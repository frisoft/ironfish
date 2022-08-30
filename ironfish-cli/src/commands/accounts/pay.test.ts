/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
import * as ironfishmodule from '@ironfish/sdk'
import { CliUx } from '@oclif/core'
import { expect as expectCli, test } from '@oclif/test'

describe('accounts:pay command', () => {
  let sendTransaction = jest.fn()

  const ironFishSdkBackup = ironfishmodule.IronfishSdk.init

  const fee = 1
  const amount = 0.000001
  const to =
    '997c586852d1b12da499bcff53595ba37d04e4909dbdb1a75f3bfd90dd7212217a1c2c0da652d187fc52ed'
  const from = 'test_account'
  const memo = 'test memo for a transaction'
  const hash =
    'aaaa586852d1b12da499bcff53595ba37d04e4909dbdb1a75f3bfd90dd7212217a1c2c0da652d187fc52ed'
  const confirmationString = `$IRON 0.00000100 ($ORE 100) plus a transaction fee of $IRON 0.00000001 ($ORE 1) to ${to} from the account ${from}`

  beforeEach(() => {
    sendTransaction = jest.fn().mockReturnValue({
      content: {
        receives: [
          {
            publicAddress: to,
            amount,
            memo,
          },
        ],
        fromAccountName: from,
        hash,
      },
    })

    ironfishmodule.IronfishSdk.init = jest.fn().mockImplementation(() => {
      const client = {
        connect: jest.fn(),
        getAccountBalance: jest.fn().mockResolvedValue({ content: { confirmed: 1000 } }),
        status: jest.fn().mockResolvedValue({ content: { blockchain: { synced: true } } }),
        sendTransaction,
        getFees: jest.fn().mockResolvedValue({ content: { p25: 10 } }),
      }

      return {
        client: client,
        connectRpc: jest.fn().mockResolvedValue(client),
      }
    })
  })

  afterEach(() => {
    sendTransaction.mockReset()
    ironfishmodule.IronfishSdk.init = ironFishSdkBackup
  })

  test
    .stub(CliUx.ux, 'confirm', () => async () => await Promise.resolve(true))
    .stdout()
    .command([
      'accounts:pay',
      `-a ${amount}`,
      `-t ${to}`,
      `-f ${from}`,
      `-o ${fee}`,
      `-m ${memo}`,
    ])
    .exit(0)
    .it(
      'with every flag: show the right confirmation message and call sendTransaction if valid',
      (ctx) => {
        expectCli(ctx.stdout).include(
          `Sending $IRON 0.00000100 ($ORE 100) to ${to} from ${from}`,
        )
        expectCli(ctx.stdout).include(`Transaction Hash: ${hash}`)
        expectCli(ctx.stdout).include(`Transaction Fee: $IRON 0.00000001 ($ORE 1)`)
        expect(sendTransaction).toBeCalledTimes(1)
      },
    )

  test
    .stub(CliUx.ux, 'confirm', () => async () => await Promise.resolve(true))
    .stdout()
    .command(['accounts:pay', `-a ${amount}`, `-t ${to}`, `-f ${from}`, `-o ${fee}`])
    .exit(0)
    .it(
      'without memo flag: show the right confirmation message and call sendTransaction if valid',
      (ctx) => {
        expectCli(ctx.stdout).include(
          `Sending $IRON 0.00000100 ($ORE 100) to ${to} from ${from}`,
        )
        expectCli(ctx.stdout).include(`Transaction Hash: ${hash}`)
        expectCli(ctx.stdout).include(`Transaction Fee: $IRON 0.00000001 ($ORE 1)`)
        expect(sendTransaction).toBeCalledTimes(1)
      },
    )

  test
    .stub(CliUx.ux, 'prompt', () => async () => await Promise.resolve(to))
    .stub(CliUx.ux, 'confirm', () => async () => await Promise.resolve(true))
    .stdout()
    .command(['accounts:pay', `-a ${amount}`, `-f ${from}`, `-o ${fee}`])
    .exit(0)
    .it(
      'without to flag: show the right confirmation message and call sendTransaction if valid',
      (ctx) => {
        expectCli(ctx.stdout).include(`Transaction Hash`)
        expect(sendTransaction).toBeCalledTimes(1)
      },
    )

  test
    .stub(CliUx.ux, 'prompt', () => async () => await Promise.resolve('not correct address'))
    .stub(CliUx.ux, 'confirm', () => async () => await Promise.resolve(true))
    .stdout()
    .command(['accounts:pay', `-a ${amount}`, `-f ${from}`])
    .exit(2)
    .it('without account flag: show the right error message', () => {
      expect(sendTransaction).toBeCalledTimes(0)
    })

  test
    .stub(CliUx.ux, 'prompt', () => async () => await Promise.resolve(amount))
    .stub(CliUx.ux, 'confirm', () => async () => await Promise.resolve(true))
    .stdout()
    .command(['accounts:pay', `-t ${to}`, `-f ${from}`])
    .exit(0)
    .it(
      'without amount flag: show the right confirmation message and call sendTransaction if valid',
      (ctx) => {
        expectCli(ctx.stdout).include(
          `Sending $IRON 0.00000100 ($ORE 100) to ${to} from ${from}`,
        )
        expectCli(ctx.stdout).include(`Transaction Hash: ${hash}`)
        expectCli(ctx.stdout).include(`Transaction Fee: $IRON 0.00000000 ($ORE 0)`)
        expect(sendTransaction).toBeCalledTimes(1)
      },
    )

  test
    .stub(CliUx.ux, 'prompt', () => async () => await Promise.resolve('non right value'))
    .stub(CliUx.ux, 'confirm', () => async () => await Promise.resolve(true))
    .stdout()
    .command(['accounts:pay', `-t ${to}`, `-f ${from}`])
    .exit(2)
    .it('without amount flag: show the right error message', () => {
      expect(sendTransaction).toBeCalledTimes(0)
    })

  test
    .stub(CliUx.ux, 'confirm', () => async () => await Promise.resolve(false))
    .stdout()
    .command(['accounts:pay', `-a ${amount}`, `-t ${to}`, `-f ${from}`, `-o ${fee}`])
    .exit(0)
    .it('aborts correctly if not confirmed', () => {
      expect(sendTransaction).toBeCalledTimes(0)
    })

  describe('with an invalid expiration sequence', () => {
    test
      .stub(CliUx.ux, 'confirm', () => async () => await Promise.resolve(true))
      .stdout()
      .command([
        'accounts:pay',
        `-a ${amount}`,
        `-t ${to}`,
        `-f ${from}`,
        `-o ${fee}`,
        '-e',
        '-1',
      ])
      .exit(1)
      .it('logs an invalid error message', (ctx) => {
        expect(sendTransaction).not.toHaveBeenCalled()
        expectCli(ctx.stdout).include('Expiration sequence must be non-negative')
      })
  })

  describe('When the RPC throws an error', () => {
    beforeEach(() => {
      sendTransaction = jest.fn().mockRejectedValue('an error')
    })
    test
      .stdout()
      .command(['accounts:pay', `-a ${amount}`, `-t ${to}`, `-f ${from}`, `-o ${fee}`, `-c`])
      .exit(2)
      .it('show the right error message and call sendTransaction', (ctx) => {
        expect(sendTransaction).toBeCalledTimes(1)
        expectCli(ctx.stdout).include(`An error occurred while sending the transaction.`)
      })
  })
})
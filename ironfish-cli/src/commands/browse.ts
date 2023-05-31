/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
import { DEFAULT_CONFIG_NAME, JSONUtils, Platform } from '@ironfish/sdk'
import { Flags } from '@oclif/core'
import { mkdtemp, readFile, writeFile } from 'fs'
import os from 'os'
import path from 'path'
import { promisify } from 'util'
import { IronfishCommand } from '../command'
import { ConfigFlag, ConfigFlagKey, DataDirFlag, DataDirFlagKey } from '../flags'
import { launchFinder } from '../utils'

export class BrowseCommand extends IronfishCommand {
  static description = `Browse to your data directory`

  static flags = {
    [ConfigFlagKey]: ConfigFlag,
    [DataDirFlagKey]: DataDirFlag,
    print: Flags.boolean({
      default: false,
      description: 'print the directory where the data directory is',
    }),
  }

  async start(): Promise<void> {
    const { flags } = await this.parse(BrowseCommand)

    if (flags.print) {
      this.log(this.sdk.dataDir)
      this.exit(0)
    }

    const launched = launchFinder(this.sdk.dataDir)

    if (!launched) {
      this.error(`Could not browse to ${this.sdk.dataDir} on ${Platform.getName()}`)
    }
  }
}

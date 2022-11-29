/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

export const genesisBlockData = `
{
  "header": {
    "sequence": 1,
    "previousBlockHash": "0000000000000000000000000000000000000000000000000000000000000000",
    "noteCommitment": {
      "commitment": {
        "type": "Buffer",
        "data": "base64:76AeW/Y/OReid2EQ5DQGuBLEja7YRmo0cPob+89ARxE="
      },
      "size": 3
    },
    "nullifierCommitment": {
      "commitment": "75B6424460A60EF177035E4265EAD201B0197A1D07989619E67C07575B53995B",
      "size": 1
    },
    "transactionCommitment": {
      "type": "Buffer",
      "data": "base64:9yLLZgLhmgHVXR6hNDjWjdyZG7sn26fRbopqclUv8rM="
    },
    "target": "883423532389192164791648750371459257913741948437809479060803100646309888",
    "randomness": "0",
    "timestamp": 1669687518300,
    "work": "0",
    "hash": "EB130E1173494EBF5290F42B4982E08978291980A666F4AC020DA769F3BAB121",
    "graffiti": "67656E6573697300000000000000000000000000000000000000000000000000"
  },
  "transactions": [
    {
      "type": "Buffer",
      "data": "base64:AAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAChdrO0kkN+UclprTXxOqdIuFrVo4pQRW++ZwXsW2mYScBT4nKz1zT81g6CsA6qvJelKtnXPeU+K/uItHZvIz637Z0foSS8SyAUQnzdeHESJbJ/mF1sLCboFuj1J6HSbEIEm/D6yN28UlMTptTvNV81jAz7GMANz4A3bPY2Zi0G9YFri24shW44esekNrooydCZRlXbKIquQaQwek0d6b9iXYMR2djkB9mfnK35Bg+NYk8ku07/BFEzypKKtI0gvqhm7aTYNi16EmQTdE2+2iBgF6x8CoMadm+ZzWsxwY21Mg79t2CWgvDO4qjOVVpKgcsgG+eINSBHBOOT73uoJd88JIjSeV24KizOP9FqJJpbu74E3Sy9LeArSnZc9I7w43NrATy7jFIJ1d3OJXHx95n5IBDafoQl1eXzfbl7O+ebASX/dRZKgpK3MH/GIjrtkbi+Z4z8tItfTRj6/7qNpOvGSWpXTngX9X7H9vDVVHfL+88LUrzJpJDbK6FP96Srx3XDC7/7mL+tWU8xMKb+Vn4Ao0u2kO/tEfFCZWFuc3RhbGsgbm90ZSBlbmNyeXB0aW9uIG1pbmVyIGtleTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMBmfF59nTHQnsS4NL1H9bvMuHJm1QUvD0DUrPUrVy+VUOja9R2Le4WHA0IFSgOAbL26taTgkppKsQ7UHaRRjQAs="
    },
    {
      "type": "Buffer",
      "data": "base64:AAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgPFLHxTx/wAAAACKmJ2BYGzrbBlGGoAGzgidK1JCPxYBkIbMldSj5URH8fpTlhSdavSlXh4XhUCtgkKSCoGfL/NgH/H2QZBEhm5lb9hmwCxDxvaZCQVUJEcTa8GVoErD+et8ds/tH9VRwtEJ+P0Lyz1FBHH8fRaKl16D9Ykiu8hOBGk9b7q5MLjUSOQBiv7gzmdhe04R1U7CeJSLtY28dbr7BZCBAa/1rwm+Og9FHIZpBeHJW77v8OzbmY3X+IGGpHC1Idhrbi8gz/8/h/4xXkPxjCgIMuzGaWc3mZeeWyuvm2CDjTE9Fex/vwukryA20nsqeEFfOS88RPqIOg2EHIp/3KJvpGBsDoplkt2OHHVl788eRplAP/Hj2jpt56PtYhn0aTnVegsH3C1e1rdh/T/fpzVQ7a4Bm4OVQsTtSpe5Jc76gMS9uacM0l84U9KEkMYXOg0M94iOsDJ+WuQJNGnPWx+YqjiG6l4rD11BSBJNQShHXofL8H8kNPdLKU/pmXOkT0wd0PmBvQYXpl6Y3IEloNk0ktWpZGwmExWAWLFVTMBCZWFuc3RhbGsgbm90ZSBlbmNyeXB0aW9uIG1pbmVyIGtleTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMHCHC5ubKXC0h7ZlV3jCaT+X4t3j1J9VeKZBubb/i5Hrdth4fcyOjKCV3bAE5V8qaUtM1zH6FXbJPICkRH6liAU="
    },
    {
      "type": "Buffer",
      "data": "base64:AQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACkbw7faqPTKG5mgrC4x7JQnStnrNmm9szmSDtlONEMqclSdCh/gGAKQvLClSaIsyyOocooVFPb5byQjRm7x+LIhqqmeLXVRdmLiN1ZsfaTmElEsdBdShnhaQlrqYDZuAkQSoGpHQarycx5svchUt5/WoxR1zi9p/+VtkxLMhK1HWUQrWEWZwzOfH61YH4uKWezlWPm9BD3agyiUZ74Qjua1+ovq6bFZOwhyWcJfhbGwy5XpF9lha/mjdPeGMdSpYcOSi10TxNcyVU4RLG3CxexsXVOYshrSYcHkhzsXi3t549tAiV4m1K83JSKjc1BqLO97TvRVFwinEltonY24jTj30dX3b9nlIHfe3NniKcmH2SaIGZh8zKnKIWm+YDJ5GkCAAAAjvxMTKqgQjgfHcH8gN31oNMXBEHF+vz/2A5CW4fMEegH3ul1V14kIqM3Mv1eAy3G4hF1ofYmOB4NAEpCHi7+SQ6UaPlYNVnBtZv59bGlZY6J+xuVCWokkfWAxERFWTQGo6Xb9R2ycQMwnrfexKm81YAEQaq79jJ9UDIkH0biHY+lz5GQmApSvSvlBNc1YPhEoRUZn4Kv4jtKDap+tb8r6NNnuC7BdL4fZbvObgoVgno29roY9/YizgENv7Px0BtsFRBLT2ScFHe1WqjjTsrAdRIo7VXaeOwhDAwvI3EY2QDhkF5VZD1jz0QGIjz36Es0i3bPK/FX4EVnXRfPNZgr0ftOYddadK+tU12DS54eGznPH+tAjpv7F7btgP24QA6t2kYMHf9WS5n7+AEKHrsYiaiYr9Br7JkJ7qYoxVg7LFEorded3DQrtz9F38m91bOxWQ61Ei8UVknnryhG+28TOL7DI1zNQ3Y5rkI6DGEcC2zNpMfGY2lymv6jfoQnIRCgynn18ITgyuHlt6BuCkuikLS+tU6nbV7PMd66WJ9bACb894ya8PlkKhaxFSO+dZcbhwJTG8f8e/x4N7w5lGZYGp+Rid0PwH2ZebfAyBQXf+BjxnDZX78Kquo7zoZFArDblYS5wes99HMxH7IzhBPjg9qBGbnsGYoN2p/E7/qyoE6pw83hq3b87P1zhnU7JhFhdX5Pmv6TXWPk5MnNL866hSmiQ6WXJeGbvlbXU6EkPHjYsCmukpJn6ocbllSYi4mv1JikgkZ1jv8C2fjw1xdoj67CYQQ7RQqskU7L14kjHBPQQOEwVc5bAZlwcdF2kt2sWJl6mjdSnf+vHIRXX6o2h2UYC7PetaYM"
    }
  ]
}`

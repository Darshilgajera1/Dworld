// https://eth-ropsten.alchemyapi.io/v2/UFo7dFlZ26jkPYD2-woeZmyPkJqaOGP-

// ('@nomiclabs/hardhat-waffle') is a plugin to build smart contract tests
require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/UFo7dFlZ26jkPYD2-woeZmyPkJqaOGP-',
      accounts: [
        'abd8d12f73955d9726963886a8fcd9625c50b1ec8b112ef0b67f28cdd5e45f4c',
      ],
    },
  },
}

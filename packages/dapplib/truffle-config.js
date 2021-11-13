require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty bottom system blame develop remember pudding hope clinic swift giggle'; 
let testAccounts = [
"0xe37d9465d1cdf00a7eed735b05dfe21d39de11e03821d7e2a921c8dd79a30184",
"0x57ef286d93930ed1b3548c268e8179c70478780eb0d299ddf257f6cd3fc80791",
"0x8be0449b0f3b04f870997f6bddccdb2bc2032a24652e84fc707b4f46ab48e616",
"0xab0440d2adcef18e1a9efc96cc1ad3ff655b351418bb6999493ab617bce514be",
"0x1f90d51f08a46594445e8bf5341aaceaec210d63058366148d600d968cec35e2",
"0x25ef4209d422ff4a082d3eddab40fbf71a1f44ba4e14b1dcfd1209bce541b29a",
"0x45f27c45164ea9b0e6f89e5cce0d06b649215a025cc666c4f853fb88b82a111e",
"0xefad1390683b7b3b7f3d4fcb19b531aa6645986eeef2ec8e481eaaeb8867224e",
"0x4e22aa3de4578a5d84dff49a7dd682607dfca6bf0b5f2563999e367e8367480d",
"0x11968eca64434e75c6aa07e8991218c06bfb2eb999b7b3079c2218d0ae94e8ce"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



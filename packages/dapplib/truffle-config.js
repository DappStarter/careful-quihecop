require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue off smooth fine birth shift pudding half climb swift throw'; 
let testAccounts = [
"0xdd619f43c6b8454e99eb07e6cb17455bd5283b2209671a82019fe1c1229a3295",
"0x4a6cd12b065ffc428ca860ff03f3cd39b0c83465c5bc70b3ed22cb3f666acef0",
"0xdcf086620c485accdbc06be688b34d0153703c2ac248f3bdf3a50a5692366388",
"0xc981d3321ddeb5cd8bad1b52eff0670260d6aa56a633991740b73c44eff66735",
"0x4bce3d9c7707c6454293b9bdb4533388ce1f18e0b975786cdb9c1a1ef62c4e19",
"0x2ed1796e889958f6f6a9631425efc9fc2af199b36d784e5e51953adc2c07d51c",
"0x5a20a4d43858c71e3c77ccdcb901a42455d0917d3cb4a7ca141f91d4d83f8393",
"0x9bae6ea4f203a43b9955e3661473cf03a02a640565581cc67268be22f15f7d2a",
"0xef96a825a130cc729e0a6971aa4b8d7a0fd4c648ccff94fc232fe7938a8c1fd7",
"0x2081f261558a32e5b76b302c3d5f70d9b34fd8e4f83ca08804ad5f22b8aa9f28"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


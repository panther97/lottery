const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider('keen gossip wire gorilla require morning round daring two divide federal between', 'https://rinkeby.infura.io/v3/eaf31d24d5a746db94d5ac51b2847c2e');

const web3 = new Web3(provider);

const deploy = async ()=>{
    const accounts = await web3.eth.getAccounts();
    console.log('attempting to deploy from account: ', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
            .deploy({data:'0x'+bytecode})
            .send({from: accounts[0], gas: '1000000'} );
    console.log('contract deployed to ',result.options.address);
}
deploy();
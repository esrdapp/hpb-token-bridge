const Web3 = require('web3');
const BridgeHpb = require('../build/contracts/BridgeHpb.json');
const BridgeBsc = require('../build/contracts/BridgeBsc.json');

// define web sockets
const web3Hpb = new Web3('ws://ws.hpbnode.com');
const web3Bsc = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');

const adminPrivKey = 'add your private key here, eg 0xABCDEF....';

// forwarder to HPB network
const { address: admin } = web3Hpb.eth.accounts.wallet.add(adminPrivKey);

const bridgeHpb = new web3Hpb.eth.Contract(
  BridgeHpb.abi,
  BridgeHpb.networks['269'].address
);

const bridgeBsc = new web3Bsc.eth.Contract(
  BridgeBsc.abi,
  BridgeBsc.networks['97'].address
);

bridgeBsc.events.Transfer(
  {fromBlock: 0, step: 0}
)
.on('data', async event => {
  const { from, to, amount, date, nonce, signature } = event.returnValues;

  const tx = bridgeHpb.methods.mint(from, to, amount, nonce, signature);
  const [gasPrice, gasCost] = await Promise.all([
    web3Hpb.eth.getGasPrice(),
    tx.estimateGas({from: admin}),
  ]);
  const data = tx.encodeABI();
  const txData = {
    from: admin,
    to: bridgeHpb.options.address,
    data,
    gas: gasCost,
    gasPrice
  };
  const receipt = await web3Hpb.eth.sendTransaction(txData);
  console.log(`Transaction hash: ${receipt.transactionHash}`);
  console.log(`
    Processed transfer:
    - from ${from} 
    - to ${to} 
    - amount ${amount} tokens
    - date ${date}
    - nonce ${nonce}
  `);
});

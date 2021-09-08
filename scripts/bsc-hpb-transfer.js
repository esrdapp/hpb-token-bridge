const BridgeBsc = artifacts.require('./BridgeBsc.sol');

const privKey = 'your private key here, e.g. 0xABCDEF.....';

module.exports = async done => {
  const nonce = 1; //Need to increment this for each new transfer
  const accounts = await web3.eth.getAccounts();
  const bridgeHpb = await BridgeBsc.deployed();
  
  //amount of tokens to send
  const amount = 5;
  
  const message = web3.utils.soliditySha3(
    {t: 'address', v: accounts[0]},
    {t: 'address', v: accounts[0]},
    {t: 'uint256', v: amount},
    {t: 'uint256', v: nonce},
  ).toString('hex');
  const { signature } = web3.eth.accounts.sign(
    message, 
    privKey
  ); 
  await bridgeBsc.burn(accounts[0], amount, nonce, signature);
  done();
}

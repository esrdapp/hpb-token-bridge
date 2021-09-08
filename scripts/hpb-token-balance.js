const TokenHpb = artifacts.require('./TokenHpb.sol');

module.exports = async done => {
  const [sender, _] = await web3.eth.getAccounts();
  const tokenHpb = await TokenHpb.deployed();
  const balance = await tokenHpb.balanceOf(sender);
  console.log(balance.toString());
  done();
}

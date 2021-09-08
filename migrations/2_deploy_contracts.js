const TokenEth = artifacts.require('TokenHpb.sol');
const TokenBsc = artifacts.require('TokenBsc.sol');
const BridgeEth = artifacts.require('BridgeHpb.sol');
const BridgeBsc = artifacts.require('BridgeBsc.sol');

module.exports = async function (deployer, network, addresses) {
  if(network === 'hpb') {
    await deployer.deploy(TokenHpb);
    const tokenHpb = await TokenHpb.deployed();
    await tokenHpb.mint(addresses[0], 1000);
    await deployer.deploy(BridgeHpb, tokenHpb.address);
    const bridgeHpb = await BridgeHpb.deployed();
    await tokenHpb.updateAdmin(bridgeHpb.address);
  }
  if(network === 'bscTestnet') {
    await deployer.deploy(TokenBsc);
    const tokenBsc = await TokenBsc.deployed();
    await deployer.deploy(BridgeBsc, tokenBsc.address);
    const bridgeBsc = await BridgeBsc.deployed();
    await tokenBsc.updateAdmin(bridgeBsc.address);
  }
};

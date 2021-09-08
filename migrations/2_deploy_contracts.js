const TokenHpb = artifacts.require('TokenHpb.sol');
const BridgeHpb = artifacts.require('BridgeHpb.sol');

const TokenBsc = artifacts.require('TokenBsc.sol');
const BridgeBsc = artifacts.require('BridgeBsc.sol');

module.exports = async function (deployer, network, addresses) {
  if(network === 'hpb') {
    await deployer.deploy(TokenHpb);
    const tokenHpb = await TokenHpb.deployed();
    
    //mint 1000 HTK test tokens
    await tokenHpb.mint(addresses[0], 1000);
    await deployer.deploy(BridgeHpb, tokenHpb.address);
    const bridgeHpb = await BridgeHpb.deployed();
    await tokenHpb.updateAdmin(bridgeHpb.address);
  }
  if(network === 'bscTestnet') {
    await deployer.deploy(TokenBsc);
    const tokenBsc = await TokenBsc.deployed();
    
    //mint 500 BTK test tokens
    await tokenBsc.mint(addresses[0], 500);
    await deployer.deploy(BridgeBsc, tokenBsc.address);
    const bridgeBsc = await BridgeBsc.deployed();
    await tokenBsc.updateAdmin(bridgeBsc.address);
  }
};

# hpb-token-bridge
A demo bridge to show how HRC20 tokens from High Performance Blockchain (HPB) can be swapped to other EVM compatible chains

The github code is to swap some dummy HPB HRC20 tokens "HTK", across to the Binance Smart Chain (BSC) Testnet, which will mint the equivalent amount of "BTK" tokens.

(see hbb-bsc-bridge.js and bsc-hpb-bridge.js for more details) 

It achieves this by using an API bridge and web sockets:

HPB Netowrk web socket address: ws://ws.hpbnode.com
BSC Test net web socket address: https://data-seed-prebsc-1-s1.binance.org:8545

HPB is a Layer 1, fully EVM-compatible blockchain, only with much faster transactional speeds than Ethereum (5000tps vs 25tps) and much lower gas fees ($0.01 vs $50)

Unlike Ethereum, by using HPB as a "core" layer 1 chain, you can bridge tokens to all of your favourite EVM compatible chains (BSC/Polygon/Fantom/Avalanche/Solana/Tomo, etc), 
with almost zero fees to worry about. This includes transferring to and from the chains.

Although the code bridges HBP to BSC, you can of course substitute BSC to any compatible EVM.

Prerequisites - You'll need a small amount of HPB and Test BNB to cover the gas fees. HPB will cover the gas going from HPB to BSC, and vice-versa you'd need some BNB to cover
the gas fee from BSC to HPB

HPB can be purchased from Kucoin/Bibox/MXC/IndoDax - Or if you visit the fantastic HPB Telegram community, you may find someone willing to send you a small amount of HPB for testing :) - https://t.me/hpbglobal

You can obtain a small amount of test BNB from the Binance Test Faucet -  https://testnet.binance.org/faucet-smart

You'll of course need an EVM wallet to transfer tokens to and from. Note that EVM compatible chains will have the same wallet address, regardless of the chain you are connected to. 

You will also need a wallet private key. This, along with the actual transaction message, is combined and hashed and is therefore fully secure on both chains, however we use the private key as part of the scripts for testing this cross chain bridge, therefore we STRONGLY ADVISE that you let truffle generate some new wallets for you, along with a private key for the wallets. You can use this for testing, and if you accidentally expose your private key, it won't matter because the wallet is just being used for testing.

A high level overview of the process is as follows:

1. We deploy the necessary smart contracts to both blockchains
2. We call the smart contracts using a script to mint some tokens (1000 'HTK' and 500 'BTK')
3. We verify the balance of both of the wallets to confirm the tokens were minted
4. We launch the hpb-bsc-bridge.js Bridge API script to act as the "forwarder" from the HPB network to the BSC Test network (uses web sockets)
5. We run the hpb-bsc-transfer.js script to call the HPB smart contract and initate the transfer.
6. We once again verify the balance of both of the wallets




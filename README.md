# hpb-token-bridge
A demo bridge to show how HRC20 tokens from High Performance Blockchain (HPB) can be swapped to other EVM compatible chains

The github code is to swap some dummy HPB HRC20 tokens "HTK", across to the Binance Smart Chain (BSC) Testnet, which will mint the equivalent amount of "BTK" tokens.

(see hbb-bsc-bridge.js and bsc-hpb-bridge.js for more details) 

It achieves this by using an API bridge and web sockets to listen out for transactional events on one chain, and act as a "forwarder" to create the same mount of tokens on the other chain.

HPB Netowrk web socket address: ws://ws.hpbnode.com
HPB Network explorer: https://hpbscan.org

BSC Test net web socket address: wss://testnet-dex.binance.org/api/ws
BSC Testnet explorer: https://testnet.bscscan.com/

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

A high level overview of the test process is as follows:

1. We deploy the necessary smart contracts to both blockchains
2. We call the smart contracts using a script to mint some tokens (1000 'HTK' and 500 'BTK')
3. We verify the balance of both of the wallets to confirm the tokens were minted
4. We launch the hpb-bsc-bridge.js Bridge API script to act as the "forwarder" from the HPB network to the BSC Test network (uses web sockets)
5. We run the hpb-bsc-transfer.js script to call the HPB smart contract and initate the transfer of 33 tokens.
6. We once again verify the balance of both of the wallets to see if HPB wallet now holds 967 tokens and BSC Test wallet holds 533 tokens.
7. We now launch the bsc-hpb-bridge.js Bridge API script to act as the "forwarder" from the BSC Test network to the HPB network.
8. We run the bsc-hpb-transfer.js script to call the BSC smart contract and initate the transfer of 5 tokens.
9. We once again verify the balance of both of the wallets to see if HPB wallet now holds 972 tokens and BSC Test wallet holds 528 tokens.


Getting started - 
You'll need node installed on your PC
https://nodejs.org/en/download/

Once node is installed, I also recommend you install git (https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) although you can still run the tests without it.

Once everything is installed, download a copy of this git repo, and place it all in a suitable folder (e.g. /hpb-bridge/)

Open up a command prompt, and check that you can see the package.json file (use 'dir' for windows command prompt, or 'ls -l' for Linux)

If you can see it, then run:

npm install

This will install all of the necessary node modules and dependencies.

(If it doesn't work, check node installed correctly. Might need a reboot)

Once completed, run:
npm install -g truffle
npm install @truffle/hdwallet-provider

Firstly, lets create some EVM wallets so that we can test the bridge, and not risk our own private wallets.

use the following command:

truffle compile

This will tell truffle to create the necessary json files/artifacts, which should appear as a new "build" folder.

Next we'll create some wallet accounts to test with. The the command:

truffle develop

This will create 10x accounts, and you'll also see the private keys for these accounts and the 12-word mnemonic

We only need the first account (account 0) and it's private key to test, so make a note of both the accout address and the private key.

(Note: you can also import this information into Metamask if you wanted to)

Next you'll need a small amount of HPB in your test wallet account and a small amount of BNB in the BSC test wallet account to cover the gas fees of deploying the smart contracts and actually transferring the tokens from one chain to another. Remember the actuall wallet address is the SAME address for both chains!

Either purchase some, request some from the community, use a faucet. etc. For the purposes of the demo, 1 HPB and 1 BNB is more than enough.

Once you have the HPB and BNB in both wallets, you can add your wallet private key into the following files:

scripts/hpb-bsc-bridge.js (Line 9)
scripts/bsc-hpb-bridge.js (Line 9)
scripts/hpb-bsc-transfer.js (Line 3)
scripts/bsc-hpb-transfer.js (Line 3)

The scripts are used to interact with them once deployed.

We're now ready to deploy the smart contracts to both chains.

If you are currently in the truffle develope console ( truffle(develop> ) then exit out of it by using the command ".exit" (notice the dot at the front!)

First we'll deploy the HPB smart contracts...

type the following:

truffle migrate --network hpb

once completed, we do the exact same thing on the BSC Test net:

truffle migrate --network bscTestnet

Both sets of contracts should now be running on the two chains. We can verify how many tokens were created on both chains by running the following:

truffle exec scripts/hpb-token-balance.js --network hpb
truffle exec scripts/bsc-token-balance.js --network bscTestnet

Now let's setup our bridge to transfer from HPB to BSC Testnet. Open up another command prompt window, and navigate to the same folder.

Run the following script to activate the bridge:

node scripts/hpb-bsc-bridge.js

With the listener now activated, now switch back to your first terminal and run the following script:

truffle exec scripts/hpb-bsc-transfer.js --network hpb

If it works, you'll see a confirmation in the window where the bridge API script is running. You can now verify both accounts with the token blance scripts.

If you want to transfer in the opposite direction, you simply run the bsc to hpb bridge in a separate window:

node scripts/bsc-hpb-bridge.js

and then initiate the token transfer script:

truffle exec scripts/bsc-hpb-transfer.js --network bscTestnet












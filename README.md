# hpb-token-bridge
A demo bridge to show how HRC20 tokens from High Performance Blockchain (HPB) can be swapped to other EVM compatible chains

The github code is to swap some dummy HPB HRC20 tokens "HTK", across to Binance Smart Chain (BSC) which will mint the equivalent amount of "BTK" tokens.

HPB is a Layer 1, fully EVM-compatible blockchain, only with much faster transactional speeds than Ethereum (5000tps vs 25tps) and much lower gas fees ($0.01 vs $50)

Unlike Ethereum, by using HPB as a "core" layer 1 chain, you can bridge tokens to all of your favourite EVM compatible chains (BSC/Polygon/Fantom/Avalanche/Solana/Tomo, etc), 
with almost zero fees to worry about. This includes transferring to and from the chains.

Although the code bridges HBP to BSC, you can of course substitute BSC to any compatible EVM.

Prerequisites - You'll need a small amount of HPB and BNB to cover the gas fees. HPB will cover the gas going from HPB to BSC, and vice-versa you'd need some BNB to cover
the gas fee from BSC to HPB

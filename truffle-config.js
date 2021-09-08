const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKeys = ['add your private key here, e.g. 0xABCDEF.............'];
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

/*
 * To deploy this via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
*/


module.exports = {
/*
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
*/

  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    // development: {
    //  host: "127.0.0.1",     // Localhost (default: none)
    //  port: 8545,            // Standard Ethereum port (default: none)
    //  network_id: "*",       // Any network (default: none)
    // },
    // Another network with more advanced options...
    // advanced: {
    // port: 8777,             // Custom port
    // network_id: 1342,       // Custom network
    // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
    // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
    // from: <address>,        // Account to send txs from (default: accounts[0])
    // websocket: true        // Enable EventEmitter interface for web3 (default: false)
    // },
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    // ropsten: {
    // provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/YOUR-PROJECT-ID`),
    // network_id: 3,       // Ropsten's id
    // gas: 5500000,        // Ropsten has a lower block limit than mainnet
    // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
    // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    // },
    // Useful for private networks
    // private: {
    // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
    // network_id: 2111,   // This network is yours, in the cloud.
    // production: true    // Treats this network as if it was a public net. (default: false)
    // }
	  
/* 
HPB Node connection
*/	  
  
	  
	  //Main HPB provider
	  	hpb: {
    	    provider: () => new HDWalletProvider(
    	       privateKeys,
    	       'https://hpbnode.com'
    	    ),
	    network_id: 269,
	    skipDryRun: true
	  },  
	  
	  
/* 
The following are a list of well-known EVM compatible chains that you can bridge from HPB to. You can of course add more if you want to
*/

	  
  
	  // Binance Smart Chain (BSC)
	bsc: {
    	    provider: () => new HDWalletProvider(
    	       privateKeys,
    	       'https://bsc-dataseed.binance.org/'
    	    ),
	    network_id: 56,
	    skipDryRun: true
	  },  
	  
	  // Binance Smart Chain Test net
	 bscTestnet: {
    	    provider: () => new HDWalletProvider(
    	       privateKeys,
    	       'https://data-seed-prebsc-1-s1.binance.org:8545/'
    	    ),
	    network_id: 97,
	    skipDryRun: true
	  },  
	  
	  // Xdai
	 xdai: {
    	    provider: () => new HDWalletProvider(
    	       privateKeys,
    	       'https://rpc.xdaichain.com/'
    	    ),
	    network_id: 100,
	    skipDryRun: true
	  },  
	  
	  // Polygon (Matic)
	 matic: {
    	    provider: () => new HDWalletProvider(
    	       privateKeys,
    	       'https://rpc-mainnet.maticvigil.com/'
    	    ),
	    network_id: 137,
	    skipDryRun: true
	  },  
	  	  
	  // Fantom
	 fantom: {
    	    provider: () => new HDWalletProvider(
    	       privateKeys,
    	       'https://rpc.ftm.tools/'
    	    ),
	    network_id: 250,
	    skipDryRun: true
	  },  
	
	 // Thundercore
	 thundercore: {
    	    provider: () => new HDWalletProvider(
    	       privateKeys,
    	       'https://mainnet-rpc.thundercore.com'
    	    ),
	    network_id: 108,
	    skipDryRun: true
	  },  
	  
	  // Tomochain
	 tomochain: {
    	    provider: () => new HDWalletProvider(
    	       privateKeys,
    	       'https://rpc.tomochain.com'
    	    ),
	    network_id: 88,
	    skipDryRun: true
	  },  
	    
	  // POA
	 poa: {
    	    provider: () => new HDWalletProvider(
    	       privateKeys,
    	       'https://core.poanetwork.dev'
    	    ),
	    network_id: 99,
	    skipDryRun: true
	  },  
	  
	  // Harmony
	 harmony: {
    	    provider: () => new HDWalletProvider(
    	       privateKeys,
    	       'https://api.harmony.one'
    	    ),
	    network_id: 1666600000,
	    skipDryRun: true
	  },
	  
	  // Ethereum Main Net (not recommended because of gas fees!)
	  eth: {
    	    provider: () => new HDWalletProvider(
    	       privateKeys,
    	       'ETH_NODE_URL'
    	    ),
	    network_id: 1,
	    skipDryRun: true
	  },
	
	 // Ethereum Test Net 
	ethTestNet: {
    	    provider: () => new HDWalletProvider(
    	       privateKeys,
    	       'ETH_NODE_URL'
    	    ),
	    network_id: 5,
	    skipDryRun: true
	  }  
	  

//,	 

    
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
       version: "0.8.4",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows: 
  // $ truffle migrate --reset --compile-all
  //
  // db: {
    // enabled: false,
    // host: "127.0.0.1",
    // adapter: {
    //   name: "sqlite",
    //   settings: {
    //     directory: ".db"
    //   }
    // }
  // }
};

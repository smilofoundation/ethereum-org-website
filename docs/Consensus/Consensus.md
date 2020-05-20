
With no need for POW/POS in a permissioned network, Smilo instead offers multiple consensus mechanisms that are more appropriate for consortium chains:  

* __Istanbul DAO (Byzantine Fault Tolerance) Consensus__: A PBFT-inspired consensus algorithm with immediate transaction finality and Smart contracts, by Autonity.  See [Istanbul BFT Consensus documentation](./ibft/ibft), the [RPC API](./ibft/istanbul-rpc-api), and this [technical web article](https://medium.com/@smilofoundation/smilo-v1-9-2-2-smilodon-populator-autonomous-community-geth-1-9-2-6aa7d65ab3d9) for more information

* __Sport (Byzantine Fault Tolerance) Consensus__: A PBFT-inspired consensus algorithm with immediate transaction finality and mining rewards, by Smilo Team. See [Sport BFT Consensus documentation](./sport/sport), the [RPC API](./sport/sport-rpc-api)

* __Sport DAO (Byzantine Fault Tolerance) Consensus__: A PBFT-inspired consensus algorithm with immediate transaction finality, by Smilo Team, inspired by Autonity Istanbul codebase.  See [Sport DAO Consensus documentation](./sportdao/sportdao), the [RPC API](./sportdao/sportdao-rpc-api), and this [technical web article](https://medium.com/@smilofoundation/smilo-v1-9-2-2-smilodon-populator-autonomous-community-geth-1-9-2-6aa7d65ab3d9) for more information

* __Tendermint DAO (Byzantine Fault Tolerance) Consensus__: A Tendermint POS Smart contracts consensus algorithm, by Smilo Team, inspired by Autonity Tendermint codebase.  See [Tendermint Consensus documentation](./tendermintdao/tendermintdao), the [RPC API](./tendermintdao/tendermintdao-rpc-api), and this [technical web article](https://medium.com/@smilofoundation/smilo-update-tendermint-consensus-2cc446bd163c) for more information

* __Clique POA Consensus__: a default POA consensus algorithm bundled with Go Ethereum.  See [Clique POA Consensus Documentation](https://github.com/ethereum/EIPs/issues/225) and a [guide to setup clique json](https://hackernoon.com/hands-on-creating-your-own-local-private-geth-node-beginner-friendly-3d45902cc612) with [puppeth](https://blog.ethereum.org/2017/04/14/geth-1-6-puppeth-master/)

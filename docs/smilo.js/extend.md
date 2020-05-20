The `extend` module of Smilo.js allows Smilo-specific APIs to be added to an instance of `web3`.

## Example
```js
const Web3 = require("web3");
const smilojs = require("Smilo-js");

const web3 = new Web3("http://localhost:22000");

smilojs.extend(web3);

web3.Smilo.eth.sendRawPrivateTransaction(signedTx, args);
```
## Parameters
| param | type | required | description |
| :---: | :---: | :---: | --- |
| `web3` | `Object` | yes | web3 instance |
| `apis` | `String` | no | comma-separated list of APIs to extend `web3` with.  Default is to add all APIs, i.e. `smilojs.extend(web3, 'eth, raft, istanbul, smiloPermission')` | 

## Methods
See the [Raft](../../Consensus/raft/raft-rpc-api), [Istanbul](../../Consensus/ibft/istanbul-rpc-api/), [Privacy](../../Getting%20Started/api/#privacy-apis), and [Permissioning](../../Permissioning/Enhanced%20Permissions%20Model/Permissioning%20apis) API documentation for API details.

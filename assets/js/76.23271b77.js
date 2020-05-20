(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{220:function(e,t,a){"use strict";a.r(t);var n=a(0),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Below is a description of how Private Transactions are processed in Smilo:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/smilofoundation/tessera/raw/master/Tessera%20Privacy%20flow.jpeg",alt:"Smilo Tessera Privacy Flow"}})]),e._v(" "),a("p",[e._v("In this example, Party A and Party B are party to Transaction AB, whilst Party C is not.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Party A sends a Transaction to their Smilo Node, specifying the Transaction payload and setting "),a("code",[e._v("privateFor")]),e._v(" to be the public keys for Parties A and B (Party A is optional)")])]),e._v(" "),a("li",[a("p",[e._v("Party A's Smilo Node passes the Transaction on to its paired Transaction Manager, requesting that it encrypt and store the Transaction payload before forwarding it on to the recipients of the transaction (i.e. Party B)")])]),e._v(" "),a("li",[a("p",[e._v("Party A's Transaction Manager makes a call to its associated Enclave to encrypt the payload for the given recipients")])]),e._v(" "),a("li",[a("p",[e._v("Party A's Enclave encrypts the private transaction payload by:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("generating a symmetric key (which will be referred to as "),a("em",[e._v("tx-key")]),e._v(" from here on) and two random nonces")])]),e._v(" "),a("li",[a("p",[e._v("encrypting the Transaction payload with this tx-key and one of the nonces")])]),e._v(" "),a("li",[a("p",[e._v("encrypting the tx-key separately for each recipient by:")]),e._v(" "),a("ol",[a("li",[e._v("deriving the ECDH (elliptic-curve Diffie-Hellman) shared symmetric key ("),a("em",[e._v("shared-key")]),e._v(") from the sender's (A's) private key and the recipient's (B's) public key")]),e._v(" "),a("li",[e._v("encrypting the tx-key with the shared-key and the other nonce")]),e._v(" "),a("li",[e._v("repeating this for all recipients (i.e. for "),a("em",[e._v("n")]),e._v(" recipients there will be "),a("em",[e._v("n")]),e._v(" unique encrypted tx-keys) (the nonce is unchanged for each recipient as the shared-key being used changes)")]),e._v(" "),a("li",[e._v("returning to the Transaction Manager: the encrypted transaction payload, all encrypted tx-keys, both nonces, and the public keys of the sender and all recipients")])])])])]),e._v(" "),a("li",[a("p",[e._v("Party A's Transaction Manager stores the response from the Enclave and forwards to the private transaction recipients by:")]),e._v(" "),a("ol",[a("li",[e._v("calculating the SHA3-512 hash of the encrypted payload (this acts as the unique identifier/primary key in the database)")]),e._v(" "),a("li",[e._v("storing the hash, encrypted payload, all encrypted tx-keys, both nonces, and the public keys of the sender and all recipients in the database")]),e._v(" "),a("li",[e._v("sending the response from the Enclave to each recipient by:\n"),a("ol",[a("li",[e._v("sanitising the response for each recipient (i.e. removing all encrypted tx-keys except for the one intended for that recipient)")]),e._v(" "),a("li",[e._v("serialising the data")]),e._v(" "),a("li",[e._v("pushing the serialised data to the recipient (in this case Party B's Transaction Manager)")]),e._v(" "),a("li",[e._v("ensuring the push was successful (if a single recipient fails to respond or returns an error then the process will stop here - i.e. it is a requirement that all recipients have stored the encrypted payload before the transaction can be propagated at the Smilo level and written to the blockchain)")]),e._v(" "),a("li",[e._v("repeating this for all recipients")])])])])]),e._v(" "),a("li",[a("p",[e._v("Party A's Transaction Manager returns the hash of the encrypted payload to the Smilo Node.  Smilo replaces the "),a("code",[e._v("data")]),e._v(" field of the Transaction with that hash, and changes the transaction's "),a("code",[e._v("v")]),e._v(" value to "),a("code",[e._v("37")]),e._v(" or "),a("code",[e._v("38")]),e._v(", thus marking the transaction as private and indicating that the transaction's "),a("code",[e._v("data")]),e._v(" field represents the hash of an encrypted payload as opposed to executable EVM bytecode")])]),e._v(" "),a("li",[a("p",[e._v("The Transaction is then propagated to the rest of the network using the standard geth P2P Protocol")])]),e._v(" "),a("li",[a("p",[e._v("A block containing Transaction AB is created and distributed to each Smilo node in the network")])]),e._v(" "),a("li",[a("p",[e._v("In processing the block, all Smilo nodes attempt to process the Transaction.  Recognising that the transaction "),a("code",[e._v("data")]),e._v(" is a hash due to the "),a("code",[e._v("v")]),e._v(" value of "),a("code",[e._v("37")]),e._v(" or "),a("code",[e._v("38")]),e._v(", each node will make a call to its Transaction Manager to determine if it is party to the transaction (i.e. there is an entry for the given hash in its database).  In this example, Party A & B's Transaction Managers will determine that they are party to the transaction whereas Party C's Transaction Manager will determine that it is not party")])]),e._v(" "),a("li",[a("p",[e._v("Party A & B's Transaction Managers make a call to their associated Enclaves to decrypt the payload")])]),e._v(" "),a("li",[a("p",[e._v("Party A & B's Enclaves decrypt the private transaction by:")]),e._v(" "),a("ol",[a("li",[e._v("deriving the shared-key used in the encryption:\n"),a("ol",[a("li",[e._v("as Party A was the sender of this transaction, it will derive the shared-key using its private key and the receiver's (B's) public key")]),e._v(" "),a("li",[e._v("as Party B was a recipient of this transaction it will derive the shared-key using its private key and the sender's (A's) public key")])])]),e._v(" "),a("li",[e._v("decrypting the tx-key with the shared-key and the encrypted data and nonce retrieved from the database")]),e._v(" "),a("li",[e._v("decrypting the private transaction payload with the tx-key and the encrytped data and nonce retrieved from the database")]),e._v(" "),a("li",[e._v("returning to the Transaction Manager: the decrypted private transaction data")])])]),e._v(" "),a("li",[a("p",[e._v("The Transaction Manager's return their results to their Smilo nodes:")]),e._v(" "),a("ol",[a("li",[e._v("Party A & B's Transaction Managers return the decrypted private transaction data to their Smilo nodes which can now execute the transaction as normal, thus updating their respective Private StateDB.  Smilo discards the decrypted private transaction data once used")]),e._v(" "),a("li",[e._v("Party C's Transaction Manager returns a 404 NOT FOUND to its Smilo node as it is not a recipient of the transaction.  Recognising that it is not party to this private transaction, the Smilo node will skip the execution of the transaction, so that no changes to its Private StateDB are made")])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);
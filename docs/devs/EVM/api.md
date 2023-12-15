# API

These following API's are recommended for development purposes. For maximun control and reliability it's recommended to run your own node.

## Networks

Quickly connect your app or client to CrossFi mainnet and public testnets. Head over to [Networks](./networks) to find a list of publicly available endpoints that you can use to connect to the CrossFi

## Clients

The CrossFi Network supports different clients in order to support Cosmos and Ethereum transactions and queries. You can use Swagger as a REST interface for state queries and transactions:

|                              | Description                                                                          | Default Port | Swagger                                       | Public APIs                       |
|------------------------------|--------------------------------------------------------------------------------------|--------------|-----------------------------------------------|-----------------------------------|
| **Cosmos gRPC**              | Query or send CrossFi transactions using gRPC                                        | `9091`       |                                               | https://cosmos-rpc.testnet.ms     |
| **Cosmos REST gRPC-Gateway** | Query or send CrossFi transactions using an HTTP RESTful API                         | `1317`       | [Testnet](https://cosmos-api.testnet.ms/)     | https://cosmos-api.testnet.ms     |
| **Ethereum JSON-RPC**        | Query Ethereum-formatted transactions and blocks or send Ethereum txs using JSON-RPC | `8545`       |                                               | https://rpc.testnet.ms            |
| **Ethereum Websocket**       | Subscribe to Ethereum logs and events emitted in smart contracts.                    | `8586`       |                                               |                                   |
| **Tendermint RPC**           | Query transactions, blocks, consensus state, broadcast transactions, etc.            | `26657`      | [Testnet](https://tendermint-rpc.testnet.ms/) | https://tendermint-rpc.testnet.ms |
| **Command Line Interface**   | Query or send CrossFi transactions using your Terminal or Console.                   | N/A          |                                               |                                   |

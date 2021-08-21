export enum Modules {
  ACCOUNT = "account",
}

export enum Actions {
  TX_LIST = "txlist",
}

export enum Sort {
  ASC = "asc",
}

export interface TxInfoEtherscan {
  blockHash: string;
  blockNumber: number;
  confirmations: number;
  contractAddress: string;
  cumulativeGasUsed: number;
  from: string;
  gas: number;
  gasPrice: number;
  gasUsed: number;
  hash: string;
  input: string;
  isError: number;
  nonce: string;
  timeStamp: number;
  to: string;
  transactionIndex: number;
  txreceipt_status: string;
  value: number;
}

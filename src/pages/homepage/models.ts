import { Actions, Modules, Sort } from "../../services/ethApi/models";

export interface ApiParameters {
  module: Modules;
  action: Actions;
  sort: Sort;
  address: string;
  startBlock: number;
  endblock: number;
  page: number;
  offset: number;
}

export interface TxRow {
  timestamp: string;
  from: string;
  to: string;
  value: number;
  confirmations: number;
  hash: string;
}

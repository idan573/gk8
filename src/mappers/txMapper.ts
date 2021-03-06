import Web3 from "web3";
import { AppTx } from "../@types/types";
import { TxInfoEtherscan } from "../services/ethApi/models";

export const txMapper = ({
  from,
  to,
  confirmations,
  value,
  hash,
  timeStamp,
}: Partial<TxInfoEtherscan>): Partial<AppTx> => {
  return {
    from,
    to,
    value: Web3.utils.fromWei(`${value}`, "ether"),
    confirmations,
    hash,
    //@ts-ignore
    date: new Date(timeStamp * 1000).toISOString(),
  };
};

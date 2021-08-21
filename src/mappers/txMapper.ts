import { AppTx } from "../@types/types";
import { TxInfoEtherscan } from "../services/ethApi/models";

export const txMapper = ({
  from,
  to,
  confirmations,
  value,
  hash,
}: Partial<TxInfoEtherscan>): Partial<AppTx> => {
  return {
    from,
    to,
    value,
    confirmations,
    hash,
  };
};

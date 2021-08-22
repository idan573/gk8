export type AppTx = {
  from: string;
  to: string;
  value: string;
  confirmations: number;
  hash: string;
  date: string; //TODO: change back to timestamp and convert the value in the grid
};

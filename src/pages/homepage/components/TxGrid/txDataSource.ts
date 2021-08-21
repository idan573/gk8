import {
  IServerSideDatasource,
  IServerSideGetRowsParams,
} from "ag-grid-community";
import { ETHERSCAN_API_KEY } from "../../../..";
import { IDataGridSortModel } from "../../../../components/AppDataGrid/models";
import { txMapper } from "../../../../mappers/txMapper";
import { HttpClient } from "../../../../services/httpClient/httpClient";

export class TransactionDataSource implements IServerSideDatasource {
  addressId: string;
  constructor(id: string) {
    this.addressId = id;
  }

  getRows(params: IServerSideGetRowsParams): void {
    console.log(params);

    const startRow = params?.request?.startRow ?? 0;
    const sortModel = params?.request?.sortModel as IDataGridSortModel[];

    const etherscanUrl = `https://api.etherscan.io/api?module=account&action=txlist&address=${this?.addressId}&startblock=0&endblock=99999999&page=1&offset=100&sort=desc&apikey=${ETHERSCAN_API_KEY}`;

    const httpClient = new HttpClient();

    httpClient
      .get(etherscanUrl)
      .then((response) => {
        console.log(response?.result);
        const rowSize =
          response?.result.length < 10 ? response?.result.length : -1;
        params?.success({
          rowData: response?.result?.map(txMapper),
          rowCount: rowSize,
        });
      })
      .catch((e) => {
        params?.success({
          rowData: [],
          rowCount: 0,
        });
      });
  }

  destroy?(): void {}
}

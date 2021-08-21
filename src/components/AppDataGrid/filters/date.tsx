import { FilterTypes, OperatorTypes, ExpOperatorTypes } from "../models";

export interface dateFilter {
  dateFrom: string;
  dateTo: string;
  filterType: FilterTypes;
  type: OperatorTypes;
}

export interface biOperationalDateExp {
  condition1: dateFilter;
  condition2: dateFilter;
  filterType: FilterTypes;
  operator: ExpOperatorTypes;
}

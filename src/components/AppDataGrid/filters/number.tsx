import { FilterTypes, ExpOperatorTypes, OperatorTypes } from "../models";

export interface numberFilter {
  filter: number;
  filterTo: number;
  filterType: FilterTypes;
  type: OperatorTypes;
}

export interface biOperationalNumberExp {
  condition1: numberFilter;
  condition2: numberFilter;
  filterType: FilterTypes;
  operator: ExpOperatorTypes;
}

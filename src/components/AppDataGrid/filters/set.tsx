import { FilterTypes, ExpOperatorTypes } from "../models";

export interface setFilter {
  values: string[];
  filterType: FilterTypes;
}

interface biOperationalTextExp {
  condition1: setFilter;
  condition2: setFilter;
  filterType: FilterTypes;
  operator: ExpOperatorTypes;
}

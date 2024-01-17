import { FilterType } from "./FilterType";

export type DataActionType = {
    qt: number;
    id: number;
    type: string;
    data: FilterType;
    index: number;
    qtt: FilterType[];
  }
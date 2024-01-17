import { FilterType } from "./FilterType";


export type InitialStateType = {
    products: FilterType[];
    subtotal: { total: number | null };
    vendasRealizadas: FilterType[]
  }
import { createContext } from "react";

 
type FormDataType = {

    id: number;
    setId: (setId: number) => void;
    
    ProductName: string;
    setProductName: (setProductName: string) => void;

    price: number | '';
    setPrice: (setPrice: number| '' ) => void

    salePrice: number | '';
    setSalePrice: (setSalePrice: number | '' ) => void

    count: number | '';
    setCount: (setCount: number | ''   ) => void

    data: string;
    setData: (setData: string) => void

   

}



export const  FormDataContext = createContext<FormDataType | null >(null);





 
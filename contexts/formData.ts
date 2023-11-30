import { createContext } from "react";

 
type FormDataType = {

    id: number;
    setId: (setId: number) => void;
    
    ProductName: string;
    setProductName: (setProductName: string) => void;

    price: string;
    setPrice: (setPrice: string) => void

    salePrice: string;
    setSalePrice: (setSalePrice: string) => void

    count: string;
    setCount: (setCount: string) => void

    data: string;
    setData: (setData: string) => void

   

}



export const  FormDataContext = createContext<FormDataType | null >(null);





 
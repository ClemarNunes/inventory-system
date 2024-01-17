import React, { ReactNode, createContext, useState } from "react";
import { Dados } from "../types/Dados";

type Props = { children: ReactNode;}

type Sales = {
    data: string;
    total: number;
}

type FormDataType = {

    id: number;
    setId: (setId: number) => void;

    ProductName: string;
    setProductName: (setProductName: string ) => void;

    price: number ;
    setPrice: (setPrice: number ) => void

    salePrice: number ;
    setSalePrice: (setSalePrice: number ) => void;

    count: number;
    setCount: (setCount: number ) => void;

    data: string;
    setData: (setData: string) => void;







    dados: Dados;
    setDados: (setDados: Dados) => void

    logout: () => void;

    searchProductContext:string;
    setSearchProductContext: (setSearchProductContext: string) => void;

    searchConductSales: string;
    setSearchConductSales: (setSearchConductSakes: string) => void;

    dateConductSales: Dados[];
    setDateConductSales: (setDateConductSales: Dados[]) => void;


    newState: Dados[];
    setNewState: (setNewState: Dados[]) => void

    sales: Sales[];
    setSales: (setSales: Sales[]) => void;

    initialDate: string;
    setInitialDate: (setInitialDate: string ) => void;

    endDate: string;
    setEndDate: (setEndDate: string ) => void;

    total: number;
    setTotal: (setTotal: number ) => void;
}
 

export const FormDataContext = createContext<FormDataType | null >(null);

  
export const FormDataProvider = ({ children }:Props) => {

    const [id, setId] = useState(0)
    const [ProductName, setProductName] = useState('');
    const [price, setPrice] = useState(1);
    const [salePrice, setSalePrice] = useState(0);
    const [count, setCount] = useState(0);
    const [data, setData] = useState('');
    const [dados, setDados] = useState<Dados>({name: '', id: 0, preco: 0, precoDeVenda:0, quantidade: 0, data: ''});

    const [dateConductSales, setDateConductSales] = useState<Dados[]>([]);
    const [newState, setNewState] = useState<Dados[]>([]);

    const [searchProductContext, setSearchProductContext] = useState('')
    const [searchConductSales, setSearchConductSales] = useState('');

    const [sales,setSales] = useState<Sales[]>([]);
 
    const [initialDate, setInitialDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [total, setTotal] = useState(0);

        const handleLogout = async () => {
            if(searchProductContext || searchConductSales){
                const req = await fetch(`/api/product`);
                const json = await req.json();
                let filterProduct = json.product.filter((item: Dados) => item.name.startsWith(searchProductContext));
                setNewState(filterProduct)
            } 
            if(searchConductSales){
                const req = await fetch(`/api/product`);
                const json = await req.json();
                let filterProduct = json.product.filter((item: Dados) => item.name.startsWith(searchConductSales));
                setDateConductSales(filterProduct)
            }
        }

    return (
        <FormDataContext.Provider value={{total, setTotal, endDate, setEndDate, initialDate, setInitialDate, sales, setSales, dateConductSales, setDateConductSales, searchConductSales, setSearchConductSales, newState, setNewState,   searchProductContext, setSearchProductContext , dados, setDados, logout: handleLogout ,  id, setId, ProductName, setProductName, price, setPrice, salePrice, setSalePrice, count,setCount, data,setData }}>
            {children}
        </FormDataContext.Provider>
    );
}  










// import { Layout } from '../components/Layout';
// import '../styles/globals.css'


// import { Session } from 'next-auth';
// import  { SessionProvider }  from 'next-auth/react'
// import type { AppProps } from 'next/app'
// import { Provider } from 'react-redux'
// import { store } from '../redux/store';



// function MyApp({ Component, pageProps }: AppProps <{session: Session}>) {
 
//   return (
//     <Provider store={store}>
//       <SessionProvider session={pageProps.session}>
//         <Layout>
//           <Component {...pageProps} />
//         </Layout>  
//       </SessionProvider>
//       </Provider>
//   );
// }
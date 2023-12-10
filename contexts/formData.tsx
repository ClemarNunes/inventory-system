import React, { ReactNode, createContext, useState } from "react";

type Dados = {
    name: string;
    id: number;
    preco: number;
    precoDeVenda: number;
    quantidade: number;
    data: string;
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

    dateConductSales: filterType[];
    setDateConductSales: (setDateConductSales: filterType[]) => void;


    newState: filterType[];
    setNewState: (setNewState: filterType[]) => void
}

type filterType = {
    name: string;
    id: number;
    preco: number;
    precoDeVenda: number;
    quantidade: number;
    data: string;
}

export const FormDataContext = createContext<FormDataType | null >(null);

  

 type Props = { children: ReactNode;}
export const FormDataProvider = ({ children }:Props) => {

    const [id, setId] = useState(0)
    const [ProductName, setProductName] = useState('');
    const [price, setPrice] = useState(1);
    const [salePrice, setSalePrice] = useState(0);
    const [count, setCount] = useState(0);
    const [data, setData] = useState('');
    const [dados, setDados] = useState<Dados>({name: '', id: 0, preco: 0, precoDeVenda:0, quantidade: 0, data: ''});

    const [dateConductSales, setDateConductSales] = useState<filterType[]>([]);
    const [newState, setNewState] = useState<filterType[]>([]);

    const [searchProductContext, setSearchProductContext] = useState('')
    const [searchConductSales, setSearchConductSales] = useState('');

        const handleLogout = async () => {
            if(searchProductContext || searchConductSales){
                const req = await fetch(`/api/product`);
                const json = await req.json();
                let filterProduct = json.product.filter((item: filterType) => item.name.startsWith(searchProductContext));
                setNewState(filterProduct)
            } 
            if(searchConductSales){
                const req = await fetch(`/api/product`);
                const json = await req.json();
                let filterProduct = json.product.filter((item: filterType) => item.name.startsWith(searchConductSales));
                setDateConductSales(filterProduct)
            }
        }

    return (
        <FormDataContext.Provider value={{dateConductSales, setDateConductSales, searchConductSales, setSearchConductSales, newState, setNewState,   searchProductContext, setSearchProductContext , dados, setDados, logout: handleLogout ,  id, setId, ProductName, setProductName, price, setPrice, salePrice, setSalePrice, count,setCount, data,setData }}>
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
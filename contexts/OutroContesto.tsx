import React, { ReactNode, createContext, useCallback, useState } from "react";



type Now = {
    name: string;
    id: number;
    preco: number;
    precoDeVenda: number;
    quantidade: number;
    data: string;
}

 

 

type FormDataType = {
 

    logout: () => void;

    searchProductContext:string;
    setSearchProductContext: (setSearchProductContext: any ) => void;
}

export const FFormDataContext = createContext<FormDataType | null >(null);

 

 type Props = { children: ReactNode;}
export const FFormDataProvider = ({ children }:Props) => {
  
    const [searchProductContext, setSearchProductContext] = useState('')


    const handleLogout = useCallback( async () => {

        const req = await fetch(`/api/product`);
            const json = await req.json();
            console.log(json)
            // let filterProduct = json.product.filter((item: Now) => item.name.startsWith(searchProduct));
    },[])


 

    return (
        <FFormDataContext.Provider value={{searchProductContext, setSearchProductContext ,  logout: handleLogout  }}>
            {children}
        </FFormDataContext.Provider>
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
import React, { ReactNode, createContext, useState } from "react";

type filterType = {
    // name: string;
    id: number;
    // preco: number;
    // precoDeVenda: number
    // quantidade: number;
}

type CartType = {
    newState: filterType[];
    setNewState: (setNewState: filterType[]) => void
 
}



type Props = { children: ReactNode; }

export const ContextCart = createContext<CartType | null>(null);

export const CartDataProvider = ({ children }: Props) => {

    const [newState, setNewState] = useState<filterType[]>([]);
 

  

    return (
        <ContextCart.Provider value={{ newState, setNewState }}>
            {children}
        </ContextCart.Provider>
    );
}










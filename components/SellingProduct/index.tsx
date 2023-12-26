import styles from './SellingProduct.module.css';

import { useContext, useEffect, useState } from 'react';
import { ContextCart } from '../../contexts/contextCart';

import { useSelector, useDispatch } from 'react-redux';


type InitialState = {
    products: filterType[];
    subtotal: { total: number};
}

type StateType = {
    CartReducer: InitialState
}

type Props = {
    name: string;
    id: number;
    sell: number;
    quantidade: number;
    data: filterType;
    // setNovaState: (setNovaState: number) => void;
    // novaState: number;
    // setQt: (setQt:number ) => void
    // info: string;
     
}



type filterType = {
    name: string;
    id: number;
    preco: number;
    precoDeVenda: number
    quantidade: number;
   
}

 

 
let modalQt = 1;
// let subTotal = 0;

 


const SellingProduct = ({ id, name, quantidade, sell, data }: Props) => {
    const C = useContext(ContextCart);
    const dispatch = useDispatch();

     
    let total:number = 0;
    

    const products = useSelector((state: StateType ) => state.CartReducer.products);


    const subtotal = useSelector((state:StateType ) => state.CartReducer.subtotal);
    
    
    const handleCart = (qt: number) => {

        dispatch({ 
            type: 'ADD_PRODUCT',
            payload: {data, qt} 
        });

        dispatch({ type: 'TOTAL' });
    };

 

    return (
        <div className={styles.Container}>

            <div className={styles.ProductInformation} >

                <div className={styles.ProductTitle}>
                    <span> Product: {modalQt} </span>
                    <span style={{ marginLeft: `${10}px` }} >{name}</span>
                </div>

                <div className={styles.Information}>

                    <div className={styles.InformationBody}>
                        <div className={styles.InformationItem}>
                            <img src="/assets/torta.jpg" alt="" width={100} height={'auto'} />
                        </div>

                        <div className={styles.InformationItem}>
                            <span>Código:   </span>
                            <span>quantidade:  </span>
                            <span>TIPO: </span>
                            <span>Valor Unitário: </span>

                        </div>

                        <div className={styles.InformationItem}>
                            <span> {id}  </span>
                            <span> {quantidade}   </span>
                            <span> varejo  </span>
                            <span> R${sell}  </span>
                        </div>
                    </div>

                    <div className={styles.InformationButton}>
                        <button onClick={() => handleCart(1)}>Adicionar</button>
                        {/* <button onClick={teste}>teste</button> */}
                        {/* {subtotal.total  }  */}
                    </div>
                </div>
 
            </div>
        </div>
    );
}


export default SellingProduct;



// setNovaState([])
        // if (key > -1) {
        //     if(array[key].quantidade < qt){
        //         array[key].quantidade += modalQt
        //         setQt(qt)
              
        //     }
        // } else {
        //     array.push({
        //         name: name,
        //         id: id,
        //         preco: sell,
        //         precoDeVenda: 0,
        //         quantidade: 1

        //     });
           
            
        // }
        // setQt(qt)
        // setNovaState([...array])
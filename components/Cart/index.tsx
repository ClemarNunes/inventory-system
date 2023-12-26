import styles from './Cart.module.css';
import { ContextCart } from '../../contexts/contextCart';
import { useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

// import Add from '../Add';



type Props = {

     
    qtt: filterType[] | undefined;
   
    // subtotal: number;
    // maxqt: number;
    // setTeste: (setTeste: number) => void;

}
type filterType = {
    name: string;
    id: number;
    preco: number;
    precoDeVenda: number
    quantidade: number;
}

 

type InitialState = {
    products: filterType[];
    subtotal: { total: number};
}


type StateType = {
    CartReducer: InitialState
}



// const products = useSelector((state: StateType) => state.CartReducer.products );  

const Cart = ({ qtt }: Props) => {
    // const [subtotal, setSubtotal] = useState(0);
    // let subtotal = 0;
    
     

    const products = useSelector((state: StateType) => state.CartReducer.products);
    const total = useSelector((state:StateType ) => state.CartReducer.subtotal.total )
    const dispatch = useDispatch()

    const handleMinus = (index: number, type: string) => {

        dispatch({
            type: 'CHANGE_PRODUCT',
            payload: { index, type }
        })
        dispatch({ type: 'TOTAL' });
       


    }
    
 

    const handlePlus = (index: number, type: string, qt: number) => {
       
        dispatch({
            type: 'CHANGE_PRODUCT',
            payload: { index, type, qt, qtt }
        });
        dispatch({ type: 'TOTAL' })
       
        
       

        
        // subtotal = calcula()
        // desconto = (subtotal * 0.1)
        // total = subtotal - desconto
       


    }



    return (
        <div className={styles.Container}>
            <div className={styles.CartArea}>

                {products.map((item, index) => (
                    <div className={styles.cartInformations} key={index}>

                        <div className={styles.CartItem}>
                            <div className={styles.cartImage}>
                                <img src="/assets/torta.jpg" height={'auto'} width={70} alt="" />
                            </div>

                            <div className={styles.cartPrice}>
                                <div>
                                    <span>{item.name} </span> <br />
                                    R${item.precoDeVenda}

                                </div>
                            </div>

                            <div className={styles.CartQt}>
                                <div onClick={() => handleMinus(index, '-')}  >
                                    <img src="/assets/minus.png" height={10} width={10} alt="" />
                                </div>

                                {item.quantidade}

                                <div onClick={() => handlePlus(index, '+', 1)} >
                                    <img src="/assets/plus.png" height={10} width={10} alt="" />
                                </div>
                            </div>

                            


                        </div>

                        {/* {subtotal} */}
                    </div>

                ))}


            </div>


        </div>
    );
}


export default Cart;
import styles from './Cart.module.css';
import { ContextCart } from '../../contexts/contextCart';
import { useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
// import Add from '../Add';

type Props = {
    name: string;
    id: number;
    qt: number;
    preco: number;
    setQt: (setQt: number) => void
    total:number;
    setTotal: (setTotal: number) => void;
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
    products: filterType[]
}



type StateType = {
    CartReducer: InitialState
}



// const products = useSelector((state: StateType) => state.CartReducer.products );  

const Cart = ({ name, qt: qttt, preco, id, setQt: qqq, total,setTotal }: Props) => {


    const products = useSelector((state: StateType) => state.CartReducer.products);
    const [qts, setQt] = useState(1)
    let car = useContext(ContextCart);
    const dispatch = useDispatch()

    // const [q, setQ] = useState(qt)

    const ola = (id: number) => {

    }



    const handleMinus = () => {

        if (qts > 1) {
            setQt(qts - 1)

        }

    }

    const handlePlus = (key: number, type: string) => {
        let index = products.findIndex(item => item.id == id);

        // if (qt < products[index].quantidade) {
        //     setQt(qt + key)
            
        // }
        dispatch({ 
            type: 'CHANGE_PRODUCT',
            payload: {type, id, qts, setQt}

        })
         
    }



    return (
        <div className={styles.Container}>
            <div className={styles.CartArea}>



                <div className={styles.cartInformations}>




                    <div className={styles.CartItem}>
                        <div className={styles.cartImage}>
                            <img src="/assets/torta.jpg" height={'auto'} width={70} alt="" />
                        </div>

                        <div className={styles.cartPrice}>

                            <div>
                                <span>{name} </span> <br />
                                R${preco}

                            </div>
                        </div>

                        <div className={styles.CartQt}>
                            <div onClick={handleMinus} style={{ border: '1px solid red' }}>
                                <img src="/assets/minus.png" height={10} width={10} alt="" />
                            </div>

                            {qts}


                            <div onClick={() => handlePlus(1, '+')} >
                                <img src="/assets/plus.png" height={10} width={10} alt="" />
                            </div>
                        </div>


                    </div>
            {total}

                </div>


            </div>


        </div>
    );
}


export default Cart;
import styles from './Cart.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { FilterType } from '../../types/FilterType';

 
type Props = {

    qtt: FilterType[] | undefined;

}
 
type InitialState = {
    products: FilterType[];
    subtotal: { total: number };
}


type StateType = {
    CartReducer: InitialState
}


 
const Cart = ({ qtt }: Props) => {
 
    const products = useSelector((state: StateType) => state.CartReducer.products);
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
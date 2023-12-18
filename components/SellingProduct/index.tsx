import styles from './SellingProduct.module.css';

import { useContext, useState } from 'react';
import { ContextCart } from '../../contexts/contextCart';

import { useSelector, useDispatch } from 'react-redux';


type InitialState = {
    products: filterType[]
}

 

type StateType = {
    CartReducer: InitialState
}


type Props = {
    name: string;
    id: number;
    sell: number;
    qt: number;
    data: filterType;
    setNovaState: (setNovaState: filterType[]) => void;
    novaState: filterType[];
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

type Props2 = {
    name: string;
    id: number;
    preco: number;
    precoDeVenda: number
    quantidade: number;
}


let array: Props2[] = [];
let modalQt = 1;




const SellingProduct = ({ id, name, qt, sell, data, setNovaState, novaState }: Props) => {
    const C = useContext(ContextCart);
    const dispatch = useDispatch();
    // const [qt, setQt] = useState(1);

    const products = useSelector((state: StateType ) => state.CartReducer.products);

    const handleCart = () => {

        // let key = array.findIndex(item => item.id == id);
        // let copia = [...products]
    
        dispatch({ 
            type: 'ADD_PRODUCT',
            payload: {data, qt} 
        });

        // console.log(qt)

        // console.log(copia)
        // console.log(key)

        

    }

    const teste = () => {
        // console.log(novaState )   
        console.log(novaState)
    }

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
                            <span> {qt}  </span>
                            <span> varejo  </span>
                            <span> R${sell}  </span>
                        </div>
                    </div>

                    <div className={styles.InformationButton}>
                        <button onClick={handleCart}>Adicionar</button>
                        <button onClick={teste}>teste</button>
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
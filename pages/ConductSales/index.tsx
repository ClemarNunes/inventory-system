import styles from './ConductSales.module.css';
import Search from '../../components/Search';

import { FormDataContext } from '../../contexts/formData';
 
import { useContext, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';


import SellingProduct from '../../components/SellingProduct';
import Cart from '../../components/Cart';


type StateType = {
    CartReducer: InitialState
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




const ConductSales = () => {

    const products = useSelector((state: StateType) => state.CartReducer.products);

    const FormContext = useContext(FormDataContext);
     
    const [novaState, setNovaState] = useState<filterType[]>([]);
    const [test, setTeste] = useState(0)
    const [qt, setQt] = useState(1);
    const [total,setTotal] = useState(0)
    const handle = () => {
        console.log(novaState)
    }

    const peymentButton = () => {
        console.log(test)
    }

    return (

        <div className={styles.Container}>
            <div className={styles.painel}>
                <div className={styles.searchArea}>
                    <div className={styles.teste}>
                        <Search state={FormContext?.searchConductSales!} setState={FormContext?.setSearchConductSales!} />
                    </div>

                </div>

                <div className={styles.productArea}>

                    <div className={styles.ProductInformation}>
                        <div className={styles.testando}>


                            {FormContext?.dateConductSales.map((item, index) => (
                                <div key={index} className={styles.Product}>
                                    <SellingProduct id={item.id} name={item.name} qt={item.quantidade} sell={item.precoDeVenda} data={item} setNovaState={setNovaState} novaState={novaState} />

                                </div>
                            ))}
                        </div>

                    </div>


                    <div className={styles.CartArea}>
                        <div>

                            <div className={styles.cartTitle}>
                                <span>Meu carrinho{ }</span>

                            </div>
                            {products.map((item, index) => (
                                <div key={index}>
                                    <Cart name={item.name} qt={qt} preco={item.preco} id={item.id} setQt={setQt} total={total} setTotal={setTotal} />

                                </div>
                            ))}

                            {/* {car !== null &&
                                <div>
                                    {car.newState.map((item, index) => (
                                        <div key={index}>
                                            {item.id}
                                        </div>
                                    ))}
                                </div>
                            } */}


                            <div className={styles.payment}>
                                <div className={styles.paymentInformation}>

                                    <span>Total</span>
                                    <span >R$10.000,00</span>
                                </div>
                                <button onClick={peymentButton} className={styles.peymentButton}>finalizar ordem </button>

                            </div>

                        </div>

                    </div>


                </div>

















            </div>
        </div>
    );
}

export default ConductSales
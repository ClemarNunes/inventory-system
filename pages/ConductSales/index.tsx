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
    precoDeVenda: number;
    quantidade: number;

}


type InitialState = {
    products: filterType[];
    subtotal: { total: number};
}



const ConductSales = () => {

    const products = useSelector((state: StateType) => state.CartReducer.products);
    const total = useSelector((state: StateType) => state.CartReducer.subtotal );

    const FormContext = useContext(FormDataContext);
    const [subtotal, setSubtotal] = useState(1);


    const peymentButton = async () => {
        // const req = await fetch(`/api/product/`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'Application/json'
        //     },
        //     body: JSON.stringify({
        //         id: products[0].id,
        //         name: products[0].name,
        //         preco: products[0].preco,
        //         precoDeVenda: products[0].precoDeVenda,
        //         quantidade: products[0].quantidade
               
                
        //     })
        // })

        


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
                                    <SellingProduct id={item.id} name={item.name} quantidade={item.quantidade} sell={item.precoDeVenda} data={item}  />

                                </div>
                            ))}
                        </div>

                    </div>


                    <div className={styles.Cart}>
                        <div className={styles.CartArea}>
                            {products.length > 0 &&
                                <>
                                    <div className={styles.cartTitle}>
                                        <span>Meu carrinho ({products.length})</span>

                                    </div>


                                    <div className={styles.cartProduct}>
                                        <Cart qtt={FormContext?.dateConductSales}   subtotal={subtotal} />
                                    </div>


                                    <div className={styles.payment}>
                                        <div className={styles.paymentInformation}>

                                            <span style={{ color: '#fff' }}> <span>Total:</span> {total.total} </span>
                                        </div>

                                        <div className={styles.buttonArea}>
                                            <button onClick={peymentButton} className={styles.peymentButton}>Finalizar Ordem </button>

                                        </div>

                                    </div>
                                </>
                            }


                        </div>



                    </div>


                </div>

















            </div>
        </div>
    );
}

export default ConductSales
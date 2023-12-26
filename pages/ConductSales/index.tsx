import styles from './ConductSales.module.css';
import Search from '../../components/Search';

import { FormDataContext } from '../../contexts/formData';

import { useContext, useEffect, useState } from 'react';

// import { useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';


import SellingProduct from '../../components/SellingProduct';
import Cart from '../../components/Cart';


type StateType = {
    CartReducer: InitialState
}

type filterType = {
    id: number;
    name: string;
    preco: number;
    precoDeVenda: number;
    quantidade: number;

}




type InitialState = {
    products: filterType[];
    subtotal: { total: number };
    
    vendasRealizadas: filterType[][];
}



const ConductSales = () => {



    const total = useSelector((state: StateType) => state.CartReducer.subtotal);
    const dispatch = useDispatch();

    const FormContext = useContext(FormDataContext);


    let products = useSelector((state: StateType) => state.CartReducer.products);
     
    let realizarVendas = useSelector((state: StateType) => state.CartReducer.vendasRealizadas)
    const peymentButton = async () => {

        let data = '';




        for (const item of products) {
            const { id, name, preco, precoDeVenda, quantidade } = item;
            let ola = FormContext?.dateConductSales.filter(item => item.id === id);
            // let index = FormContext?.dateConductSales.findIndex(item => item.id === id);

            // if (index  !== undefined && index !== -1 ) {

            if (ola !== undefined && ola[0].quantidade > 0) {

                console.log(item)
                const req = await fetch(`/api/product/${id.toString()}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'Application/json'
                    },
                    body: JSON.stringify({
                        name, preco, precoDeVenda, quantidade: ola[0].quantidade -= quantidade, data
                    })
                });

                const json = await req.json();

                if (json.status) {

                }


                dispatch({
                    type: 'CLEAR_CART'
                })
            }

        }

        // }


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
                                    <SellingProduct id={item.id} name={item.name} quantidade={item.quantidade} sell={item.precoDeVenda} data={item} />

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
                                        <Cart qtt={FormContext?.dateConductSales} />
                                    </div>


                                    <div className={styles.payment}>
                                        <div className={styles.paymentInformation}>

                                            <span style={{ color: '#fff' }}> <span>Total:</span> R${total.total} </span>
                                        </div>

                                        <div className={styles.buttonArea}>
                                            <button onClick={peymentButton} className={styles.peymentButton}>Finalizar Ordem </button>

                                        </div>

                                    </div>
                                </>
                            }


                        </div>


                        {realizarVendas.map((venda, vendaIndex) => (
                            <div key={vendaIndex}>
                                {venda.map((item, itemIndex) => (
                                    <div key={itemIndex}>
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        ))} 


                        {/* {vendas.map((item,index) => (
                            <div key={index}>
                                {item.map((item2, index2) => (
                                    <div key={index2}>
                                        {item2.name}
                                    </div>
                                ))}
                            </div>
                        ))} */}

                    </div>


                </div>

















            </div>
        </div>
    );
}

export default ConductSales;


// products.map(item => {
//     productID = item.id;


//     productData = {
//         id: item.id,
//         name: item.name,
//         preco: item.preco,
//         precoDeVenda: item.precoDeVenda,
//         quantidade: item.quantidade,
//         data: ''
//     }

//     request(productData, productID)
// });
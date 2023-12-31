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


type Props = {
    nome: string[];
    pcVenda: number[];
    qt: number[];

}


const ConductSales = () => {

    // let data = new Date();
    let data = 'oi'
   

    const total = useSelector((state: StateType) => state.CartReducer.subtotal);
    const dispatch = useDispatch();

    const FormContext = useContext(FormDataContext);


    let products = useSelector((state: StateType) => state.CartReducer.products);

    let realizarVendas = useSelector((state: StateType) => state.CartReducer.vendasRealizadas)

    const peymentButton = async () => {
        let data = '';


        const nome = products.map(item => item.name);
        const pcVenda = products.map(item => item.precoDeVenda);
        const qt = products.map(item => item.quantidade);

        if (FormContext && FormContext.dateConductSales) {
            for (const { id, name, preco, precoDeVenda, quantidade } of products) {
                let indivialProduct = FormContext.dateConductSales.filter(item => item.id === id);

                if (indivialProduct !== undefined && indivialProduct[0].quantidade > 0) {

                    const req = await fetch(`/api/product/${id.toString()}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'Application/json'
                        },
                        body: JSON.stringify({
                            name, preco, precoDeVenda, quantidade: indivialProduct[0].quantidade -= quantidade, data
                        })
                    });

                    const json = await req.json();

                    if (json.status) {
                        console.log('true')


                    }
                    dispatch({
                        type: 'CLEAR_CART'
                    })
                }

            }
        }

        saveSale(nome, pcVenda, qt)

       
    }

    const formatDate = (data: Date) => {
        let newDate = new Date(data)
         return `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`;
         
     }
 

    const saveSale = async (nome: string[], pcVenda: number[], qt: number[]) => {
        // let data = new Date().toISOString()
        // let dataAtual = 
        // let data = dataAtual.toISOString()
        let novo = new Date()
        let data= '30/12/2023'
        // formatDate(data)
        console.log(data)
      
       
 

        const req = await fetch(`/api/sales`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({
                nome,
                pcVenda,
                qt,
                total: total.total,
                data

            })
        });

        const json = await req.json();
        // console.log('Resposta do Servidor:', json);

        // if (json.status) {
        //     console.log('Venda criada:', json);
        //     alert('Venda criada com sucesso!');
        // } else {
        //     console.error('Erro ao criar venda:', json);
        // }
        if(json.status){
            alert('oi')
        }
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
                                        {item.preco}
                                        {item.precoDeVenda}
                                        quantidade {item.quantidade}
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

                        {/* <button onClick={ ()  => formatDate(data) }>ola</button> */}
                       

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




//  const teste2 = () => {
    
//      console.log(formatDate)
//  }
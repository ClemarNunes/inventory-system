import styles from './Registration.module.css';
import { useState } from 'react';

import { FormDataContext } from '../../contexts/formData';
import { useContext } from 'react';

 type Props = {
    setData: (setData:any) => void;
 }

const Registration = ({setData}: Props) => {
   
      
    
    const FormContext = useContext(FormDataContext)
   

    const registerProduct = async (e: React.MouseEvent) => {
        e.preventDefault()

        const req = await fetch(`/api/product/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({
                name: FormContext?.ProductName,
                preco: FormContext?.price,
                precoDeVenda: FormContext?.salePrice,
                quantidade: FormContext?.count,
                data: FormContext?.data
            })
        })

        const json = await req.json();
        if (json.status) {
            alert('adicionado')
        }
        ClearInput()
    }


    const editProduct = async () => {
        const req = await fetch(`/api/product/${FormContext?.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({
                name: FormContext?.ProductName,
                preco: FormContext?.price,
                precoDeVenda: FormContext?.salePrice,
                quantidade: FormContext?.count,
                data: FormContext?.data
            })
        })

        const json = await req.json();
        if(json.status){
            // alert('ALTERADO')
        }

        
        ClearInput()
        // setData({})
         
        
    }

    const ClearInput = () => {
        FormContext?.setProductName('')
        FormContext?.setPrice('')
        FormContext?.setSalePrice('');
        FormContext?.setCount('');
        FormContext?.setData('');
    }

    
    const submit = (e: React.MouseEvent) => {
        e.preventDefault()
        FormContext?.id ? editProduct() : registerProduct(e);
    }

    return (
        <div>

            <form action="" className={styles.FormArea} >
                <span>Cadastrar Produtos</span>
                <div className={styles.formItensArea}>



                    <div className={styles.FormItens}>

                        <label htmlFor="">Nome do produto</label>
                        <input
                            type="text"
                            value={FormContext?.ProductName}
                            onChange={e => FormContext?.setProductName(e.target.value)}
                            
                        />


                    </div>

                    <div className={styles.FormItens}>
                        <label htmlFor="">Preço</label>
                        <input
                            value={FormContext?.price}
                            onChange={e => FormContext?.setPrice(e.target.value)}
                            type="text"
                        />

                    </div>
                    <div className={styles.FormItens}>
                        <label htmlFor="">preco de venda</label>
                        <input
                            type="text"
                            value={FormContext?.salePrice}
                            onChange={(e => FormContext?.setSalePrice(e.target.value))}
                        />

                    </div>
                    <div className={styles.FormItens}>

                        <label htmlFor="">Quantidade</label>
                        <input
                            type="text"
                            value={FormContext?.count}
                            onChange={(e => FormContext?.setCount(e.target.value))}
                        />


                    </div>

                    <div className={styles.FormItens}>
                        <label htmlFor=''>data</label>
                        <input
                            type="date"
                            value={FormContext?.data}
                            onChange={(e => FormContext?.setData(e.target.value))}
                        />
                    </div>

                    {/* {FormContext?.dados} */}

                    <button onClick={submit} className={styles.button}>Cadastrar</button>
                    {/* <button onClick={submit}>oi</button> */}
                    {/* <button onClick={editProduct}>editar</button> */}

                </div>
            </form>
        </div>
    );
}

export default Registration;
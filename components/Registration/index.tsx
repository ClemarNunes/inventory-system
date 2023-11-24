import styles from './Registration.module.css';
import { useState } from 'react';



const Registration = () => {
    const [ProductName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [salePrice, setSalePrice] = useState('');
    const [count, setCount] = useState('');
    const [data, setData] = useState('');
    const array:any = []
    // let array2:any = []
    // let produto= {}

    const registerProduct = async () => {
        
         const req = await fetch(`/api/product/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({
                name: ProductName,
                preco: price,
                precoDeVenda: salePrice,
                quantidade: count,
                data: data
            })
         })

         const json = await req.json();
         if(json.status){
            alert('adicionado')
         }
    
    }


    return (
        <div>
            <form action="" className={styles.FormArea} >
                <div className={styles.FormItens}>

                    <label htmlFor="">Nome do produto</label>
                    <input
                        type="text"
                        value={ProductName}
                        onChange={e => setProductName(e.target.value)}
                    />


                </div>

                <div className={styles.FormItens}>
                    <label htmlFor="">Preço</label>
                    <input
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        type="text"
                    />

                </div>
                <div className={styles.FormItens}>
                    <label htmlFor="">preco de venda</label>
                    <input
                        type="text"
                        value={salePrice}
                        onChange={(e => setSalePrice(e.target.value))}
                    />

                </div>
                <div className={styles.FormItens}>

                    <label htmlFor="">Quantidade</label>
                    <input
                        type="text"
                        value={count}
                        onChange={(e => setCount(e.target.value))}
                    />


                </div>

                <div className={styles.FormItens}>
                    <label htmlFor=''>data</label>
                    <input
                        type="date"
                        value={data}
                        onChange={(e => setData(e.target.value))}
                    />
                </div>

                <button onClick={registerProduct} className={styles.button}>Cadastrar</button>
            </form>
        </div>
    );
}

export default Registration;
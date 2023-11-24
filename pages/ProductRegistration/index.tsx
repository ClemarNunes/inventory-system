import styles from './ProductRegistration.module.css';
import Registration from '../../components/Registration';
import { useState } from 'react';


const ProductRegistration = () => {

    const [searchProduct, setSearchProduct] = useState('');


    const handlerSearch = () => {
        
    }



    return (
        <div className={styles.Container}>
            <h1>Cadastro de produto</h1>



            <Registration
            // ProductName={ProductName} setProductName={setProductName}
            // price={price} setPrice={setPrice}
            // salePrice={salePrice} setSalePrice={setSalePrice}
            // count={count} setCount={setCount}
            // data={data} setData={setData}

            />



            <h1>Listagem De Produto</h1>

            <div className={styles.ListaItem}>
                <input
                    type="text"
                    placeholder='Nome Do Produto'
                    value={searchProduct}
                    onChange={e => setSearchProduct(e.target.value)}
                />

                <button onClick={handlerSearch} className={styles.button}>Pesquisar</button>
               
            </div>

            <div className={styles.AreaPesquisa}>
                <table border={1} className={styles.tableArea}>
                    <thead>
                        <tr>
                            <th>Nome Do Produto</th>
                            <th>Preço</th>
                            <th>Preço De Venda</th>
                            <th>Quantidade</th>
                            <th>Data</th>
                            <th>ação</th>
                        </tr>

                    </thead>

                    <tbody>
                        <tr>
                            <td>minoxidil</td>
                            <td>5</td>
                            <td>10</td>
                            <td>17</td>
                            <td>02/10/2026</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>minoxidil</td>
                            <td>5</td>
                            <td>10</td>
                            <td>17</td>
                            <td>02/10/2026</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>minoxidil</td>
                            <td>5</td>
                            <td>10</td>
                            <td>17</td>
                            <td>02/10/2026</td>
                            <td></td>
                        </tr>



                    </tbody>

                </table>

            </div>


        </div>
    );
}


export default ProductRegistration;
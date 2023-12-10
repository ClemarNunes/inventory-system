import styles from './ProductRegistration.module.css';
import { useState } from 'react';
import { useContext } from 'react';
import { FormDataContext } from '../../contexts/formData';

import Registration from '../../components/Registration';
import Search from '../../components/Search/index'
import Table from '../../components/Table';



const ProductRegistration = () => {
    const FormContext = useContext(FormDataContext);
    const [showTable, setShowTable] = useState(false);

    return (
        <div className={styles.Container}>

            <Registration />
            <div className={styles.ContainerListagemProduto}>
                <div className={styles.ListaItem}>
                    <Search state={FormContext?.searchProductContext!} setState={FormContext?.setSearchProductContext!} />
                </div>

                <div className={styles.AreaPesquisa} style={{ display: (showTable ? 'block' : 'false') }}>
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

                        {FormContext?.newState.map((item, index) => (
                            <tbody key={index}>
                                <tr>
                                    <Table
                                        name={item.name}
                                        id={item.id}
                                        preco={item.preco}
                                        precoDeVenda={item.precoDeVenda}
                                        quantidade={item.quantidade}
                                        data={item.data}
                                    />
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>

        </div>
    );
}
export default ProductRegistration;



{/* {data.map((item, index) => (
                            <tbody key={index}>
                                <tr>
                                    <Table handlerSearch={handlerSearch}
                                        name={item.name}
                                        id={item.id}
                                        preco={item.preco}
                                        precoDeVenda={item.precoDeVenda}
                                        quantidade={item.quantidade}
                                        data={item.data}
                                    />

                                </tr>
                            </tbody>
                        ))} */}
import styles from './ProductRegistration.module.css';
import Registration from '../../components/Registration';
import { useState } from 'react';
import Search from '../../components/Search/index'
import Table from '../../components/Table';

import { FormDataContext } from '../../contexts/formData';
import { useContext } from 'react';

    


type filterType = {
    name: string;
    id: number;
    preco: number;
    precoDeVenda: number;
    quantidade: number;
    data: string;
}
 
const ProductRegistration = () => {
    const FormContext = useContext(FormDataContext);
 


    const [data, setData] = useState<filterType[]>([])
    const [searchProduct, setSearchProduct] = useState('');
    const [showTable, setShowTable] = useState(false);

    const handlerSearch = async () => { 
        if(searchProduct){
            const req = await fetch(`/api/product`);
            const json = await req.json();
            let filterProduct = json.product.filter((item: filterType) => item.name.startsWith(searchProduct));
            
            setData(filterProduct)
            setShowTable(true);
            console.log(FormContext?.searchProductContext)
        }
    }


    return (
        <div className={styles.Container}>

            <Registration handlerSearch={handlerSearch} />

            <div className={styles.ContainerListagemProduto}>
                <div className={styles.ListaItem}>

                    <Search 
                        searchProduct={searchProduct} 
                        setSearchProduct={setSearchProduct} 
                        
                        

                        handlerSearch={handlerSearch} 
                        
                    />

                    <span>Listagem De Produto</span>
                    <input
                        type="text"
                        placeholder='Nome Do Produto'
                        value={searchProduct}
                        onChange={e => setSearchProduct(e.target.value)}
                        // onChange={e => FormContext?.setSearchProductContext(e.target.value)}
                    />

                    <button onClick={handlerSearch} className={styles.button}>Pesquisar</button>

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

                        {/* {FormContext?.searchProductContext.length} */}

                        
                        {data.map((item, index) => (
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
                        ))}

                    </table>

                </div>

            </div>


        </div>
    );
}


export default ProductRegistration;
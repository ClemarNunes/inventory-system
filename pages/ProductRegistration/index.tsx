import styles from './ProductRegistration.module.css';
import Registration from '../../components/Registration';
import { useState } from 'react';

import Table from '../../components/Table';





type Now = {
    name: string;
    id: number;
    preco: string;
    precoDeVenda: string;
    quantidade: string;
    data: string;

}





const ProductRegistration = () => {



    const [data, setData] = useState<Now[]>([])
    const [searchProduct, setSearchProduct] = useState('');
    const [showTable, setShowTable] = useState(false);








    const handlerSearch = async () => {
        setSearchProduct('');
     

        if(searchProduct){
            // setSearchProduct('')
            let oi: Now[] = []

            const req = await fetch(`/api/product`);
            const json = await req.json();

            oi = [];

            for (let i = 0; i < json.product.length; i++) {
                if (json.product[i].name.startsWith(searchProduct)) {
                    oi.push(json.product[i])

                }
            }
          
             
         

           
            setData(oi)
            setShowTable(true);
        }



    }


    return (
        <div className={styles.Container}>
            {/* <h1>Cadastro de produto</h1> */}



            <Registration setData={setData} />

            <div className={styles.ContainerListagemProduto}>


                <div className={styles.ListaItem}>
                    <span>Listagem De Produto</span>
                    <input
                        type="text"
                        placeholder='Nome Do Produto'
                        value={searchProduct}
                        onChange={e => setSearchProduct(e.target.value)}
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

                        
                        {data.map((item, index) => (
                            <tbody key={index}>
                                <tr  >

                                    <Table
                                        name={item.name}
                                        id={item.id}
                                        preco={item.preco}
                                        precoDeVenda={item.precoDeVenda}
                                        quantidade={item.quantidade}
                                        data={item.data}
                                    // handlerEditProduct={handlerEditProduct} 
                                    // setData={setData}



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
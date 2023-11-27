import styles from './ProductRegistration.module.css';
import Registration from '../../components/Registration';
import { useEffect, useState } from 'react';
import prisma from '../../libs/prisma';
import { NextApiHandler } from "next";
import api from '../../libs/api';
import Table from '../../components/Table';

type Ok = {
    id: number;
    name: string;
}

type Ok2 = {
    id: number;
    name: string

}




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


    const handlerSearch = async () => {
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

    }


    return (
        <div className={styles.Container}>
            <h1>Cadastro de produto</h1>



            <Registration />

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

                    {data.map((item, index) => (
                        <tbody>
                            <tr key={index} >
                               
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
    );
}


export default ProductRegistration;
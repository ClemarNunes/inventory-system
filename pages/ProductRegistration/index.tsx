import styles from './ProductRegistration.module.css';
import Registration from '../../components/Registration';
import { useEffect, useState } from 'react';
import prisma from '../../libs/prisma';
import { NextApiHandler } from "next";
import api from '../../libs/api';

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
    // preco: string;
    // precoDeVenda: string;
    // quantidade: string;
    // data: string;

}

const ProductRegistration = () => {



    const [oi2, setOi2] = useState<Now[]>([])
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
        setOi2(oi)

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




            {/* <div className={styles.teste}>


                <div>


                    {oi2.map((item, index) => (
                        <div key={index}>
                            {item.name}
                            {item.id}
                        </div>
                    ))}


                </div>


                oi
            </div> */}

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
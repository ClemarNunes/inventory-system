import { FormDataContext } from '../../contexts/formData';
import { useContext, useEffect, useState } from 'react';
import styles from './Table.module.css';

type Props = {
    id: number;
    name: string;
    preco: number;
    precoDeVenda: number;
    quantidade: number;
    data: string;
}

const Table = ({ id, name, preco, precoDeVenda, quantidade, data }: Props) => {
    const FormContext = useContext(FormDataContext);

    const handlerEdit = async () => {

        const req = await fetch(`/api/product/` + id, {
            method: 'GET'
        })

        const res = await req.json();

        FormContext?.setProductName(res.product.name);
        FormContext?.setPrice(res.product.preco);
        FormContext?.setSalePrice(res.product.precoDeVenda);
        FormContext?.setCount(res.product.quantidade);
        FormContext?.setData(res.product.data);
        FormContext?.setId(id);
    }

    const handlerDelete = async () => {
        const req = await (fetch('/api/product/' + id, {
            method: 'DELETE'
        }));

        if (req.ok) {
            FormContext?.logout()
        }
    }
    return (
        <>
            <td>{name}</td>
            <td>R${preco}</td>
            <td>R${precoDeVenda}</td>
            <td>{quantidade}</td>
            <td>{data}</td>
            <td className={styles.testando}>
                <button onClick={handlerEdit}>Editar</button>
                <button onClick={handlerDelete}>Excluir</button>
            </td>
        </>
    );
}

export default Table;
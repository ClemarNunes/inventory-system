import styles from './Table.module.css';

type Props = {
    id: number;
    name: string;
    preco: string;
    precoDeVenda: string;
    quantidade: string;
    data: string;
}

const Table = ({ id, name, preco, precoDeVenda, quantidade, data }: Props) => {
    return (
        <>

            <td>{name}</td>
            <td>{preco}</td>
            <td>{precoDeVenda}</td>
            <td>{quantidade}</td>
            <td>{data}</td>
            <td></td>

        </>
    );
}

export default Table;
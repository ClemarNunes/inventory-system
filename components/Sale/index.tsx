import styles from './Sale.module.css';

type Props = {
    nome: string;
    data: string;
    total: number;

}

const Sale = ({ nome, data, total }:Props) => {
    return(
        <div className={styles.Container}>
            <div className={styles.saleAreas}>
                <div>Venda realizada</div>
                <div><span>{data} </span> </div>
                <div className={styles.salePrice}><span>R${total}</span></div>

            </div>
        </div>
    );
}

export default Sale;

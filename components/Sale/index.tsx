import styles from './Sale.module.css';

type Props = {
    nome: string;

}

const Sale = ({ nome }:Props) => {
    return(
        <div className={styles.Container}>
            <div className={styles.saleAreas}>
                <div>Venda realizada</div>
                <div className={styles.salePrice}><span>R$250.00</span></div>

            </div>
        </div>
    );
}

export default Sale;

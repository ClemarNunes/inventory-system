import styles from './totalCashMovement.module.css';

type Props = {

}

const TotalCashMovement = () => {
    return (
        <div className={styles.totalCashMovement}>
            <span>lucro / prejuizo</span>
            <span>R$200,00</span>
        </div>
    );
}

export default TotalCashMovement;
 import styles from './Sale.module.css';
 import { SaleType } from '../../types/SaleType';

type Props = {
    data: string;
    total: number;
    setActiveModal: (setActiveModal: boolean) => void;
    item: SaleType;
    setProductModal: (setProductModal: SaleType[]) => void;
}

const Sale = ({   data, total, setActiveModal, item, setProductModal }: Props) => {
    const handle = () => {
        setActiveModal(true);
        setProductModal([item]);
    }

    const handleTest = (e: React.MouseEvent) => {
        e.stopPropagation();
    }
    return (
        <div className={styles.Container} onClick={handle}>
            
            <div className={styles.saleAreas}>
                <div>Venda realizada</div>
                <div><span>{data} </span> </div>
                <div className={styles.salePrice}><span>R${total}</span></div>
                <button onClick={handleTest}>Excluir</button>

            </div>
        </div>
    );
}

export default Sale;

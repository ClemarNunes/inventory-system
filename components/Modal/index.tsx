import styles from './Modal.module.css';
import { SaleType } from '../../types/SaleType';

type Props = {
    setActiveModal: (setActiveModal: boolean) => void;
    productModal: SaleType[]
}
 
const Modal = ({ setActiveModal, productModal }: Props) => {

    const closeModal = () => {
        setActiveModal(false);
    }

    return (
        <div className={styles.Container} onClick={closeModal}>
            <div className={styles.modalContainer}>
                <div className={styles.modal}>
                    {productModal[0].nome.map((item, index) => (


                        <div className={styles.SalesInformation}>
                            <span>Produto:  {item} </span>
                            <span>Preco: {productModal[0].pcVenda[index]} </span>
                            <span>Quantidade: {productModal[0].qt[index]} </span>
                        </div>


                    ))}
                </div >
            </div>
        </div>
    );
}


export default Modal;
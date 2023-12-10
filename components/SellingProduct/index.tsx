import styles from './SellingProduct.module.css';
import { FormDataContext } from '../../contexts/formData';
import { useContext } from 'react';


const SellingProduct = () => {

    const FormContext = useContext(FormDataContext);

    return (
        <div className={styles.Container}>

            {FormContext?.dateConductSales.map((item, index) => (
                <div className={styles.ProductInformation} key={index}>

                    <div className={styles.ProductTitle}>
                        <span> Product: </span>
                        <span style={{ marginLeft: `${10}px` }} >{item.name}</span>
                    </div>

                    <div className={styles.Information}>

                        <div className={styles.InformationBody}>
                            <div className={styles.InformationItem}>
                                <img src="/assets/torta.jpg" alt="" width={100} height={'auto'} />
                            </div>

                            <div className={styles.InformationItem}>
                                <span>Código:   </span>
                                <span>quantidade:  </span>
                                <span>TIPO: </span>
                                <span>Valor Unitário: </span>

                            </div>

                            <div className={styles.InformationItem}>
                                <span> {item.id}  </span>
                                <span> {item.quantidade}  </span>
                                <span> varejo  </span>
                                <span> R${item.precoDeVenda}  </span>
                            </div>
                        </div>

                        <div className={styles.InformationButton}>
                            <button>Adicionar</button>
                        </div>

                    </div>


                </div> //ProductInformation fechamento
            ))}




        </div>
    );
}


export default SellingProduct;
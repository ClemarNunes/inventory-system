import styles from './ConductSales.module.css';
import Search from '../../components/Search';

import { FormDataContext } from '../../contexts/formData';
import { useContext } from 'react';
import SellingProduct from '../../components/SellingProduct';


const ConductSales = () => {

    const FormContext = useContext(FormDataContext);

    return (

        <div className={styles.Container}>
            <div className={styles.painel}>
                <div className={styles.searchArea}>
                    <div className={styles.teste}>
                        <Search state={FormContext?.searchConductSales!} setState={FormContext?.setSearchConductSales!} />
                    </div>

                </div>


                <div className={styles.product}>
                    <div className={styles.productArea}>

                        <SellingProduct />


                        <div className={styles.SellArea}>
                            OIiiiiiiiiiiiiii

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConductSales
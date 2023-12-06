import styles from './ConductSales.module.css';
import Search from '../../components/Search';

import { FormDataContext } from '../../contexts/formData';

import { useContext } from 'react';
// import { user } from '../../contexts/formData'

const ConductSales = () => {



    const FormContext = useContext(FormDataContext);
    // const v = useContext(user)


    const handle = () => {
        
        console.log(FormContext?.dados)
    }

    return(
        
        <div className={styles.Container}>
            <div className={styles.painel}>
                <div className={styles.searchArea}>
                     {/* <Search   /> */}

                    
                       
                     <button onClick={handle}>ok</button>

                </div>


                <div className={styles.productInformation}>
                    {FormContext?.ProductName}
                </div>
            </div>
        </div>
    );
}

export default ConductSales
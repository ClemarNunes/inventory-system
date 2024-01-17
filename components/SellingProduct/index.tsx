import styles from './SellingProduct.module.css';
import { useState } from 'react';
import { FilterType } from '../../types/FilterType';
 

import { useDispatch } from 'react-redux';


type Props = {
    name: string;
    id: number;
    sell: number;
    quantidade: number;
    data: FilterType;
}


const SellingProduct = ({ id, name, quantidade:qt, sell, data }: Props) => {
 
    let modalQt = 1;
    const dispatch = useDispatch();
    const [disable,setDisable] = useState(false);

    
    
    const handleCart = (qt: number) => {
        const { quantidade } = data;
        if(quantidade > 0){
            dispatch({ 
                type: 'ADD_PRODUCT',
                payload: {data, qt} 
            });
        
            dispatch({ type: 'TOTAL' });
        }else{
            setDisable(true)
        }
    }
    
    return (
        <div className={styles.Container}>

            <div className={styles.ProductInformation} >

                <div className={styles.ProductTitle}>
                    <span> Product: {modalQt} </span>
                    <span style={{ marginLeft: `${10}px` }} >{name}</span>
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
                            <span> {id}  </span>
                            <span> {qt}   </span>
                            <span> varejo  </span>
                            <span> R${sell}  </span>
                        </div>
                    </div>

                    <div className={styles.InformationButton}>
                        <button onClick={() => handleCart(1)}  
                        disabled={qt == 0 ? true : false}  
                        style={{ opacity: (qt == 0 ? '50%' : `100%`), 
                        cursor: (qt ==  0) ? 'not-allowed' :'pointer'}}
                    >Adicionar</button>
                       
                    </div>
                </div>
 
            </div>
        </div>
    );
}


export default SellingProduct;



// setNovaState([])
        // if (key > -1) {
        //     if(array[key].quantidade < qt){
        //         array[key].quantidade += modalQt
        //         setQt(qt)
              
        //     }
        // } else {
        //     array.push({
        //         name: name,
        //         id: id,
        //         preco: sell,
        //         precoDeVenda: 0,
        //         quantidade: 1

        //     });
           
            
        // }
        // setQt(qt)
        // setNovaState([...array])
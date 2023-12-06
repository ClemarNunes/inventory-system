import styles from './searchProduct.module.css';
import { FormDataContext } from '../../contexts/formData';

import { useContext } from 'react';



type Props = {
    searchProduct: string;
    setSearchProduct: (setSearchProduct: string) => void;
    handlerSearch: () => void
}

const Search = ({ searchProduct, setSearchProduct, handlerSearch  }: Props) => {


    const FormContext = useContext(FormDataContext);



    return (
        <div>
            <span>Listagem De Produto</span>
            <input
                type="text"
                placeholder='Nome Do Produto'
                // value={searchProduct}
                value={FormContext?.searchProductContext}
                // onChange={e => setSearchProduct(e.target.value)}
                onChange={e => FormContext?.setSearchProductContext(e.target.value)}
            />

            <button onClick={handlerSearch} className={styles.button}>Pesquisar</button>
        </div>
    );
}


export default Search
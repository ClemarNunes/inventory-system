import styles from './searchProduct.module.css';
import { FormDataContext } from '../../contexts/formData';
import { useContext, useState } from 'react';

type Props = {
    state: string;
    setState: (state: string) => void;
}

const Search = ({ state, setState }: Props) => {
    const FormContext = useContext(FormDataContext);


    return (
        <div className={styles.ListaItem}>
            <span>Listagem De Produto</span>  
            <input
                type="text"
                placeholder='Nome Do Produto'

                value={state}
                onChange={e => setState(e.target.value)}
            />

            <button onClick={FormContext?.logout} className={styles.button}>Pesquisar</button>

        </div>
    );
}


export default Search
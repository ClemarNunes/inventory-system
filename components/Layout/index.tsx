import styles from './Layout.module.css';
import { ReactElement, useState } from 'react'
import SideBar from '../SideBar'
import { FormDataContext, FormDataProvider } from '../../contexts/formData';


 
 
type Props = {
    children: ReactElement;
}

const Layout = ({ children }: Props) => {
    // const [dados, setDados] = useState('')

    const [ProductName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [salePrice, setSalePrice] = useState('');
    const [count, setCount] = useState('');
    const [data, setData] = useState('');
    const [id, setId] = useState(0)

 

    return (
        <div className={styles.Container}>


            <SideBar />

            <main className={styles.PageBody}>
                {/* <FormDataContext.Provider value={{ id, setId, ProductName, setProductName, price, setPrice, salePrice, setSalePrice, count,setCount, data,setData }}> */}

                    <FormDataProvider>
                         
                        {children}
                         
                    </FormDataProvider>
                   



                {/* </FormDataContext.Provider> */}
            </main>



        </div>



    );
}


export default Layout;
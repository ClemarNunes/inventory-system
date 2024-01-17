import styles from './Layout.module.css';
import { ReactElement } from 'react'
import SideBar from '../SideBar'
import {  FormDataProvider } from '../../contexts/formData';




type Props = {
    children: ReactElement;
}

const Layout = ({ children }: Props) => {

    return (
        <div className={styles.Container}>
            <SideBar />
            <main className={styles.PageBody}>
                <FormDataProvider>

                    {children}

                </FormDataProvider>
            </main>
        </div>
    );
}


export default Layout;
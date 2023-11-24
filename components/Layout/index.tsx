import styles from './Layout.module.css';
import { ReactElement } from 'react'
import  SideBar  from '../SideBar'

type Props = {
    children: ReactElement;
}

const Layout = ({ children }: Props) => {
    return (
        <div className={styles.Container}>


            <SideBar />

            <main className={styles.PageBody}>{children}</main>



        </div>



    );
}


export default Layout;
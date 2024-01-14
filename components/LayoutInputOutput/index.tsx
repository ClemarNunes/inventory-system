import { ReactElement } from "react";
import styles from './LayoutInputOutput.module.css';
import { navigationLinks } from "../../utils/data";
import Link from "next/link";
import { useRouter } from "next/router";


type Props = {
    children: ReactElement;
}

const LayoutInputOutput = ({ children }: Props) => {
    const router = useRouter();

    


    return(
        <div className={styles.Container}>
             <div className={styles.painel}>
                    <div className={styles.MenuItens}>

                        <div className={styles.MenuTitle}> <span>FINANCEIRO</span></div>

                        <div className={styles.menu}>
                             

                            {navigationLinks.map((link, index) => (
                                <li key={index} className={ router.pathname === link.path ? styles.linkActive : styles.menuitem}>
                                    <Link href={link.path}>{link.label}</Link>
                                </li>
                            ))}

                        </div>

                        <div className={styles.AreaFilter}>
                            

                            <form action="" className={styles.form}>
                                <div className={styles.FormItens}>
                                    <label htmlFor=''>Initial Date</label>
                                    <input
                                        type="date"
                                    // value={initialDate}
                                    // onChange={(e => setInitialDate(e.target.value))}
                                    />
                                </div>

                                <div className={styles.FormItens}>
                                    <label htmlFor=''>End Date</label>
                                    <input
                                        type="date"
                                    // value={endDate}
                                    // onChange={(e => setEndDate(e.target.value))}
                                    />
                                </div>
                                <div className={styles.formButtonArea}>
                                    <button  >Search</button>
                                </div>
                            </form>
                       
                            <div></div>

                        </div>

                    </div>

                    <div className={styles.painelArea}>
                        {children}
                    </div>

                </div>
        </div>
    );
}

export default LayoutInputOutput;
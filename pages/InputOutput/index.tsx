import styles from './InputOutput.module.css';
import { navigationLinks } from '../../utils/data';
import Link from 'next/link';


import LayoutInputOutput from '../../components/LayoutInputOutput';
 
const InputOutput = () => {
  
    return (



        // <div className={styles.Container}>
        <LayoutInputOutput>
            <div className={styles.test}>
                oiiooooooooooooooooo
            </div>

        </LayoutInputOutput>
        // </div>
    );
}

export default InputOutput;




















{/* <div className={styles.painel}>
                    <div className={styles.MenuItens}>

                        <div className={styles.MenuTitle}> <span>FINANCEIRO</span></div>

                        <div className={styles.menu}>
                        

                            {navigationLinks.map((link, index) => (
                                <li key={index} className={styles.menuitem}>
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

                </div> */}


{/* <div className={styles.menuitem} style={{ background: '#1eb361' }}>
                            Movimento de caixa
                        </div>
                        <div className={styles.menuitem} style={{ background: 'red' }}>
                            Saídas
                        </div>
                        <div className={styles.menuitem} style={{ background: 'rgb(398, 200, 53)' }}>
                            Detalhes
                        </div> */}
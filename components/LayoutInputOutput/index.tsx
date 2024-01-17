import { ReactElement, useContext, useState } from "react";
import styles from './LayoutInputOutput.module.css';
import { navigationLinks } from "../../utils/data";
import Link from "next/link";
import { useRouter } from "next/router";
import entries from "../../libs/entries";

import { FormDataContext } from "../../contexts/formData";
import api from "../../libs/api";



type Props = {
    children: ReactElement;

}

type Test = {
    data: string;
    total: number;
}
const LayoutInputOutput = ({ children }: Props) => {
    const router = useRouter();
    const [info, setInfo] = useState<Test[]>([]);

    const [initialDate, setInitialDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const FormContext = useContext(FormDataContext);

    const handleDate = async (e: React.MouseEvent) => {
        e.preventDefault();

        const currentRoute = router.pathname;

        switch (currentRoute) {
            case '/InputOutput':


                const reversedDateInitial = initialDate.split('-').reverse().join('-');
                const reversedDateEnd = endDate.split('-').reverse().join('-');


                FormContext?.setInitialDate(reversedDateInitial);
                FormContext?.setEndDate(reversedDateEnd);

                const req = await fetch(`/api/filtersales`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'Application/json'
                    },
                    body: JSON.stringify({

                        initialDate, endDate
                    })
                });



                const data = await req.json();
                const filterTotal = data.FilterSales.reduce((soma: number, item: Test) => soma + item.total, 0)
                FormContext?.setTotal(filterTotal);
               







                break;
            case '/InputOutput/entrada':

                break;
            case '/InputOutput/saida':

                break;


        }
    }



    return (
        <div className={styles.Container}>
            <div className={styles.painel}>
                <div className={styles.MenuItens}>

                    <div className={styles.MenuTitle}> <span>FINANCEIRO</span></div>

                    <div className={styles.menu}>


                        {navigationLinks.map((link, index) => (
                            <li key={index} className={router.pathname === link.path ? styles.linkActive : styles.menuitem}>
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
                                    value={initialDate}
                                    onChange={(e => setInitialDate(e.target.value))}
                                />
                            </div>

                            <div className={styles.FormItens}>
                                <label htmlFor=''>End Date</label>
                                <input
                                    type="date"
                                    value={endDate}
                                    onChange={(e => setEndDate(e.target.value))}
                                />
                            </div>
                            <div className={styles.formButtonArea}>
                                <button onClick={handleDate} >Search</button>
                            </div>
                        </form>

                        <div>

                        </div>

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
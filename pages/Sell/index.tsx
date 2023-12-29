import styles from './Sell.module.css';
import { useEffect, useState } from 'react';
import Sale from '../../components/Sale';

type Props = {
    nome: string
}
const Sell = () => {
    const [sale, setSale] = useState<Props[]>([]);

    useEffect(() => {
        oi()
    }, [])


    const oi = async () => {
        const req = await fetch(`/api/sales`);
        const json = await req.json();
        setSale(json.sales)
        
    }


    return (
        <div className={styles.Container}>
            <div className={styles.painel}>

                <div className={styles.search}>
                    <div className={styles.informationTitle}>
                        <div>
                            <span>vendas</span>
                        </div>

                        <div className={styles.saleInformation}>
                            <div>
                                vendas: 6
                            </div>

                            <div>
                                total: R$1800,00
                            </div>
                        </div>

                    </div>

                    <div className={styles.formArea}>
                        <form action="" className={styles.form}>
                            <div className={styles.FormItens}>
                                <label htmlFor=''>Initial Date</label>
                                <input
                                    type="date"
                                // value={FormContext?.data}
                                // onChange={(e => FormContext?.setData(e.target.value))}
                                />
                            </div>

                            <div className={styles.FormItens}>
                                <label htmlFor=''>End Date</label>
                                <input
                                    type="date"
                                // value={FormContext?.data}
                                // onChange={(e => FormContext?.setData(e.target.value))}
                                />
                            </div>
                            <div className={styles.formButtonArea}>
                                <button>Search</button>
                            </div>
                        </form>

                    </div>
                </div>

                <div className={styles.saleArea}>
                    {sale.map((item, index) => (
                        <div key={index}>
                            <Sale nome={item.nome} />
                        </div>
                    ))}

                    <button onClick={oi}>ok</button>
                </div>



            </div>
        </div>
    );
}

export default Sell
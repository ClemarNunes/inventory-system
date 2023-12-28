import styles from './Sell.module.css';
import { useEffect, useState } from 'react';

type Props = {
    nome: string
}
const Sell = () => {
    const [a, setA] = useState<Props[]>([])
    useEffect(() => {

        const oi = async () => {
            const req = await fetch(`/api/sales`);
            const json = await req.json();
            const oi = json.map((item:Props) => item.nome )
            setA(oi)
        }

        oi()

    }, [])

    return (
        <div className={styles.Container}>
            <div className={styles.painel}>

                 
                    <div>
                        {a.map((item, index) => (
                            <div key={index}>
                                {item.nome}
                            </div>
                        ))}

                    </div>
              

            </div>
        </div>
    );
}

export default Sell
import styles from './Sell.module.css';
import { useEffect, useState } from 'react';
import Sale from '../../components/Sale';

type Props = {
    nome: string
}
type Te = {
    total: number;
}
type SaleType = {
    nome: string;
    pcVenda: number[];
    qt: number[];
    total: number;
    data: string;
};

type Date = {
    data: string;
}

const Sell = () => {

    const [sale, setSale] = useState<Props[]>([]);

    const [initialDate, setInitialDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [totalFilter, setTotalFilter] = useState(0);

    const [filteredSales, setFilteredSales] = useState<SaleType[]>([]);
    const [filterActive, setFilterActive] = useState(false);
    const [qt, setQt] = useState(0);

    useEffect(() => {
        if (!filterActive) {
            fetchDate();
        }


    }, [filterActive, initialDate, endDate]);


    const fetchDate = async () => {
        const req = await fetch(`/api/sales`);
        const json = await req.json();

        let total = json.sales.reduce((soma: number, valorAtual: Te) => soma + valorAtual.total, 0);
        setTotalFilter(total);

        setSale(json.sales);
        setQt(json.sales.length);
    }


    const handleFilter = async (e: React.MouseEvent) => {
        e.preventDefault()

        const req = await fetch(`/api/sales`);
        const res = await req.json();
        const filtered = res.sales.filter((item: Date) => item.data >= initialDate && item.data <= endDate);
        setFilteredSales(filtered);

        let total = filtered.reduce((soma: number, valorAtual: Te) => soma + valorAtual.total, 0);
        setTotalFilter(total);
        setQt(filtered.length);
        setFilterActive(true);
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
                                vendas: {qt}
                            </div>

                            <div>
                                total: {totalFilter}
                            </div>
                        </div>

                    </div>

                    <div className={styles.formArea}>
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
                                <button onClick={handleFilter}>Search</button>
                            </div>
                        </form>

                    </div>

                </div>

                <div className={styles.saleArea}>

                    {(filterActive ? filteredSales : sale).map((item, index) => (
                        <div key={index}>
                            <Sale nome={item.nome} />
                        </div>
                    ))}

                </div>



            </div>

        </div>
    );
}

export default Sell
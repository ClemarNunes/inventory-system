import styles from './Sell.module.css';
import { useEffect, useState } from 'react';
import Sale from '../../components/Sale';
import Modal from '../../components/Modal';
import { SaleType } from '../../types/SaleType';
 
type ValorAtualType = {
    total: number;
}
 
type Date = {
    data: string;
}

const Sell = () => {

    const [sale, setSale] = useState<SaleType[]>([]);
    const [filteredSales, setFilteredSales] = useState<SaleType[]>([]);

    const [initialDate, setInitialDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [totalFilter, setTotalFilter] = useState(0);

    const [filterActive, setFilterActive] = useState(false);
    const [qt, setQt] = useState(0);

    const [activeModal, setActiveModal] = useState(false);
    const [productModal, setProductModal] = useState<SaleType[]>([]);

    useEffect(() => {
        if (!filterActive) {
            fetchDate();
        }
    }, [filterActive, initialDate, endDate]);

    const fetchDate = async () => {
        const req = await fetch(`/api/sales`);
        const json = await req.json();

        let total = json.sales.reduce((soma: number, valorAtual: ValorAtualType) => soma + valorAtual.total, 0);
        setTotalFilter(total);
        // console.log(json)
        setSale(json.sales);
        setQt(json.sales.length);

    }


    const handleFilter = async (e: React.MouseEvent) => {
        e.preventDefault()

        const req = await fetch(`/api/sales`);
        const res = await req.json();
        const filtered = res.sales.filter((item: Date) => item.data >= initialDate && item.data <= endDate);
        setFilteredSales(filtered);

        let total = filtered.reduce((soma: number, valorAtual: ValorAtualType) => soma + valorAtual.total, 0);
        setTotalFilter(total);
        setQt(filtered.length);
        setFilterActive(true);
    }

    return (
        <div className={styles.Container}>
            <div className={styles.painel}>

                <div className={styles.search}>
                    <div className={styles.informationTitle}>
                        <div className={styles.saleTitle}>
                            <span>vendas</span>
                        </div>

                        <div className={styles.saleInformation}>
                            <div className={styles.sales}>
                                vendas: {qt}
                            </div>

                            <div className={styles.total}>
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

                            <Sale data={item.data} total={item.total} setActiveModal={setActiveModal} item={item} setProductModal={setProductModal} />
                        </div>
                    ))}

                    {activeModal &&

                        <div>

                            <Modal setActiveModal={setActiveModal} productModal={productModal} />

                        </div>

                    }


                </div>



            </div>

        </div>
    );
}

export default Sell
import styles from './InputOutput.module.css';
import { navigationLinks } from '../../utils/data';
import Link from 'next/link';

import { FormDataContext } from "../../contexts/formData";

import LayoutInputOutput from '../../components/LayoutInputOutput';
import TotalCashMovement from '../../components/totalCashMovement';
import { useContext, useEffect, useState } from 'react';



type Test = {
    data: string;
    total: number;
}

const InputOutput = () => {


    const teste = useContext(FormDataContext)
    const [data, setData] = useState<Test[]>([]);

    const [initialTotal, setInitialTotal] = useState(0);

    const total2 = data.reduce((soma, item) => soma + item.total, 0)

    const [sevenDaysAgo, setSevenDaysAgo] = useState('');
    const [currentDate, setCurrentDate] = useState('');



    // const getDataSeteDiasAtras = () => {
    //     const hoje = new Date();  // Obtém a data atual
    //     const seteDiasAtras = new Date(hoje);
    //     seteDiasAtras.setDate(hoje.getDate() - 7);  // Subtrai 7 dias da data atual

    //     // const formattedDate = `${seteDiasAtras.getFullYear()}-${(seteDiasAtras.getMonth() + 1).toString().padStart(2, '0')}-${seteDiasAtras.getDate().toString().padStart(2, '0')}`;
    //     const formattedDate = `${seteDiasAtras.getDate().toString().padStart(2, '0')}-${(seteDiasAtras.getMonth() + 1).toString().padStart(2, '0')}-${seteDiasAtras.getFullYear()}`;
    //     return formattedDate;
    // };

    const getDataSeteDiasAtras = () => {
        const hoje = new Date();  // Obtém a data atual
        const seteDiasAtras = new Date(hoje);
        seteDiasAtras.setDate(hoje.getDate() - 7);  // Subtrai 7 dias da data atual

        // Formate as datas conforme necessário
        const formattedHoje = `${hoje.getDate().toString().padStart(2, '0')}-${(hoje.getMonth() + 1).toString().padStart(2, '0')}-${hoje.getFullYear()}`;
        const formattedSeteDiasAtras = `${seteDiasAtras.getDate().toString().padStart(2, '0')}-${(seteDiasAtras.getMonth() + 1).toString().padStart(2, '0')}-${seteDiasAtras.getFullYear()}`;
        return {
            hoje: formattedHoje,
            seteDiasAtras: formattedSeteDiasAtras
        };
    };


    useEffect(() => {
        const fetchData = async () => {
            const req = await fetch(`/api/sales`);
            const res = await req.json();

            const { hoje, seteDiasAtras } = getDataSeteDiasAtras();

            const datainitial = seteDiasAtras.split('-').reverse().join('-');
            const dataFinal = hoje.split('-').reverse().join('-');

            const getTotal = res.sales.filter((item: Test) => item.data >= datainitial && item.data <= dataFinal);

            const soma = getTotal.reduce((soma: number, item: Test) => soma + item.total, 0);
            setInitialTotal(soma)



            setSevenDaysAgo(seteDiasAtras);
            setCurrentDate(hoje);




        }


        fetchData();

    }, [])


    const ok = () => {
        console.log(data)
    }
    return (
        <LayoutInputOutput>
            <div className={styles.Container}>

                <div className={styles.cashMovementInformation}>

                    <div className={styles.winnings}>
                        <div className={styles.winningsTitle}>
                            <span>Total de receitas</span>
                            {teste?.initialDate ? (
                                <span>{teste.initialDate} a {teste.endDate} </span>
                            ) : (
                                <span>{sevenDaysAgo} a {currentDate}</span>
                            )}


                        </div>
                        <div className={styles.winningsPrice}>
                            {teste?.total ? (
                                <span>R${teste.total} </span>
                            ) : (
                                <span>R${initialTotal}</span>
                            )}
                            {/* <span>R${total2}</span> */}

                            {/* <button onClick={ok}>teste</button> */}
                        </div>

                        <div className={styles.winningsBarra}>

                        </div>

                    </div>






                    <div className={styles.losses}>

                        <div className={styles.winningsTitle}>
                            <span>Total de receitas</span>
                            {teste?.initialDate ? (
                                <span>{teste.initialDate} a {teste.endDate} </span>
                            ) : (
                                <span>{sevenDaysAgo} a {currentDate}</span>
                            )}


                        </div>
                        <div className={styles.winningsPrice}>
                            {teste?.total ? (
                                <span>R${teste.total} </span>
                            ) : (
                                <span>R${initialTotal}</span>
                            )}
                            
                        </div>

                        <div className={styles.winningsBarra}>

                        </div>
                    </div>




                </div>

                <TotalCashMovement />
            </div>

        </LayoutInputOutput>

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
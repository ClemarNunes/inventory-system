import LayoutInputOutput from "../../../components/LayoutInputOutput";
import TotalCashMovement from "../../../components/totalCashMovement";
import styles from './entrada.module.css';


const entrada = () => {

    return (

        <LayoutInputOutput>
            <div className={styles.Container}  >
                <div className={styles.Entries}>
                        




                <table border={1} className={styles.tableArea}>
                        <thead>
                            <tr>
                                <th>Nome Do Produto</th>
                                <th>Preço</th>
                                <th>Preço De Venda</th>
                                <th>Quantidade</th>
                                <th>Data</th>
                                <th>ação</th>
                            </tr>
                        </thead>

                        {/* {FormContext?.newState.map((item, index) => (
                            <tbody key={index}>
                                <tr>
                                    <Table
                                        name={item.name}
                                        id={item.id}
                                        preco={item.preco}
                                        precoDeVenda={item.precoDeVenda}
                                        quantidade={item.quantidade}
                                        data={item.data}
                                    />
                                </tr>
                            </tbody>
                        ))} */}
                    </table>





                </div>


                <TotalCashMovement />

            </div>

        </LayoutInputOutput>


    );
}
export default entrada;
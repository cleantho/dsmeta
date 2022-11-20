import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sale } from "../../models/sale";
import { BASE_URL } from "../../utils/request";
import PersonButton from '../personButton';
import './styles.css';

function SalesCard() {

    let min = new Date();
    min.setFullYear(min.getFullYear() - 1);

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(new Date());

    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {

        const dmin = minDate.toISOString().slice(0, 10);
        const dmax = maxDate.toISOString().slice(0, 10);
        
        axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`)
            .then(response => { setSales(response.data.content); });
    }, [minDate, maxDate]);

    return (
        <>
            <div className="dsmeta-card">
                <h2 id="sales-title">Vendas</h2>
                <div>
                    <div className="form-container">
                        <DatePicker
                            selected={minDate}
                            onChange={(date: Date) => setMinDate(date)}
                            className="form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div className="form-container">
                        <DatePicker
                            selected={maxDate}
                            onChange={(date: Date) => setMaxDate(date)}
                            className="form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>
                <div>
                    <table className="sales-table">
                        <thead>
                            <tr>
                                <th className="show990">ID</th>
                                <th className="show576">Data</th>
                                <th>Vendedor</th>
                                <th className="show990">Visitas</th>
                                <th className="show990">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sales.map(sale => {
                                    return (
                                        <tr key={sale.id}>
                                            <td className="show990">{sale.id}</td>
                                            <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                                            <td>{sale.sellerName}</td>
                                            <td className="show990">{sale.visited}</td>
                                            <td className="show990">{sale.deals}</td>
                                            <td>{sale.amount.toFixed(2)}</td>
                                            <td className="td-img">           <PersonButton saleId={sale.id}/>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    );
}

export default SalesCard;
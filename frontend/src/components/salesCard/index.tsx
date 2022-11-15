import PersonButton from '../personButton'
import './styles.css'

function SalesCard() {
    return (
        <>
            <div className="dsmeta-card">
                <h2 id="sales-title">Vendas</h2>
                <div>
                    <div className="form-container">
                        <input className="form-control" type="text" />
                    </div>
                    <div className="form-container">
                        <input className="form-control" type="text" />
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
                            <tr>
                                <td className="show990">#341</td>
                                <td className="show576">15/11/2022</td>
                                <td>Anakin</td>
                                <td className="show990">15</td>
                                <td className="show990">11</td>
                                <td>55300.00</td>
                                <td className="td-img">
                                    <PersonButton />
                                </td>
                            </tr>
                            <tr>
                                <td className="show990">#341</td>
                                <td className="show576">15/11/2022</td>
                                <td>Anakin</td>
                                <td className="show990">15</td>
                                <td className="show990">11</td>
                                <td>55300.00</td>
                                <td className="td-img">
                                    <PersonButton />
                                </td>
                            </tr>
                            <tr>
                                <td className="show990">#341</td>
                                <td className="show576">15/11/2022</td>
                                <td>Anakin</td>
                                <td className="show990">15</td>
                                <td className="show990">11</td>
                                <td>55300.00</td>
                                <td className="td-img">
                                    <PersonButton />
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    )
}

export default SalesCard
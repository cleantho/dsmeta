import axios from "axios";
import icon from '../../assets/img/person-icon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';

type Props = {
    saleId: number;
}

function handleClick(id: number) {
    axios(`${BASE_URL}/sales/${id}/notify`)
        .then(response => { console.log("Enviado!") });
}

function PersonButton({ saleId }: Props) {
    return (
        <>
            <div className="bt-red" onClick={() => handleClick(saleId)}>
                <img src={icon} alt="Notificar" />
            </div>
        </>
    );
}

export default PersonButton;
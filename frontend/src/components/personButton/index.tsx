import icon from '../../assets/img/person-icon.svg';
import './styles.css';

function PersonButton() {
    return (
        <>
            <div className="bt-red">
                <img src={icon} alt="Notificar" />
            </div>
        </>
    );
}

export default PersonButton;
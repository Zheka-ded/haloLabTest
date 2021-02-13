import Form from '../form/Form';
import './Modal.css';

export default function Modal (props) {

    const {item, closeModal} = props;

    return (
        <div className="Modal__wrap">

            <div className="Modal">
                <button className="Modal__close" onClick={() => closeModal(null)} >&#10005;</button>
                <p className="Modal__category">{item.category}</p>
                <p className="Modal__name">{item.name}</p>
                <p className="Modal__price"> <span>$</span> {item.price}</p>

                <Form closeModal={closeModal} item={item} />

            </div>
            
                            
        </div>
    )
}
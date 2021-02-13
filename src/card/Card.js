import './Card.css';

export default function Card (props) {

    const {item, getModalItem} = props;

    return(
        <div className="Card">
            <p className="Card__category">{item.category}</p>
            <p className="Card__name">{item.name}</p>
            <div className="Card__price-wrap">
                <p className="Card__price"> <span>$</span> {item.price}</p>
                <div className="Card__item-btn-wrap">
                    <button onClick={() => getModalItem(item)}>BUY</button>
                </div>
            </div>
        </div>
    )
}
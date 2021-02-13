import { useEffect, useState } from 'react';
// Это наши замоканые данные
import data from '../data';

import './CardList.css'

import Card from '../card/Card';
import Spinner from '../spinner/Spinner';
import Modal from '../modal/Modal';

export default function CardList () {
    /**
     * Допустим мы уже получаем данные с сервера, а не с файла data
     */
    const [cardList, setCardList] = useState(null);

    /**
     * Элемент для модального окна
     */
    const [modalItem, setModalItem] = useState(null);
    /**
     * Ну и потом мы немного изменим наш useEffect
     */
    useEffect(() => {
        setCardList(data);
        document.querySelector('body').style.overflow = modalItem ? 'hidden' : 'auto';
    }, [modalItem]);

    /**
     * Делаем сортировку получаем меньшую цену и даем Элемент для модального окна
     */
    function getMinPrice () {
        let price = cardList.map(elem => elem).sort((a, b) => a.price > b.price ? 1 : -1);
        setModalItem(price[0]);
    }

    /**
     * Получаем элемент для модального окна
     */
    function getModalItem (item) {
        setModalItem(item);
    }

    /**
     * Закрываем модальное окно
     */
    function closeModal (close) {
        setModalItem(close);
    }
    
    return(
        <>
            
            {modalItem !== null ? <Modal item={modalItem} closeModal={closeModal} /> : null}

            {cardList !== null ?
                <>

                    <div className='CardList'>

                        {(cardList.map((item, i) => <Card key={i} item={item} getModalItem={getModalItem} />))} 

                    </div>
                    <div className="CardList__btn-wrap">
                        <button onClick={() => getMinPrice()}>Buy cheapest</button>
                    </div>

                </>
            : <Spinner/> }

        </>
    )
}
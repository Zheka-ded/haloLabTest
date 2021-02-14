import { useState } from 'react';
// import iconArrowRight from '../img/arrow-right.svg';
import ArrowRightSvg from '../img/arrowRightSvg';
import './Form.css';

export default function Form (props) {
    const {closeModal, item} = props;

    // Количество символов поля phone
    const phoneNumberLength = 12;

    // Текст ошибок поля name
    const nameErrorRequired = 'This field in required';
    const nameErrorLatters = 'Only letters allowed';

    // Текст ошибок поля phone
    const phoneErrorRequired = 'This field in required';
    const phoneErrorNumbers = 'Only numbers allowed';
    const phoneErrorLength = 'Should contain 12 characters';

    // Состояния value input
    const [userName, setUserName] = useState('');
    const [userPhone, setUserPhone] = useState('');

    // Переменные текста ошибок
    const [userNameErrorMessage, setUserNameErrorMessage] = useState(nameErrorRequired);
    const [userPhoneErrorMessage, setUserPhoneErrorMessage] = useState(phoneErrorRequired);

    // Проверка полей
    const [checkUserName, setCheckUserName] = useState(null);
    const [checkUserPhone, setCheckUserPhone] = useState(null);


    // Отправка формы
    function submitForm (e) {
        let res = {};

        e.preventDefault();
        if(checkUserName === null || checkUserPhone === null){
            setCheckUserName(false)
            setCheckUserPhone(false)
            return false
        }
        if(checkUserName === false || checkUserPhone === false) return false;
        
        closeModal(null)

        // результат
        res = {
            'user-name': userName,
            'user-phone': userPhone
        }
        
        console.log('Заказ' ,item)
        console.log('Данные' ,res)
    }

    function userNameCheck () {
        // const reg = /^[a-zA-Z]+$/i;  // Если только английские буквы
        const reg = /^\p{L}+$/u;    // Любые буквы

        // Выбор текста ошибки
        if(!reg.test(userName)) setUserNameErrorMessage(nameErrorLatters);
        if(userName.length === 0) setUserNameErrorMessage(nameErrorRequired);

        // Проходит проверку
        if(reg.test(userName)){
            setCheckUserName(true);
        } else {
            setCheckUserName(false);
        }
    }

    function userPhoneCheck () {
        const reg = /^\d+$/i;   // Только цифры

        // Выбор текста ошибки
        if(userPhone.length !== phoneNumberLength) setUserPhoneErrorMessage(phoneErrorLength);
        if(!reg.test(userPhone)) setUserPhoneErrorMessage(phoneErrorNumbers);
        if(userPhone.length === 0) setUserPhoneErrorMessage(phoneErrorRequired);

        // Проходит проверку
        if(reg.test(userPhone) && userPhone.length === phoneNumberLength){
            setCheckUserPhone(true);
        } else {
            setCheckUserPhone(false);
        }
    }

    return (
        <form onSubmit={submitForm} className="Form">
            
                <div className="Form__input-wrap">

                    {checkUserName === false && <p className="Form__input-error">Error<br/><span>&#10005;</span></p>}

                    <input type="text"
                        name="user-name"
                        placeholder="Name"
                        value={userName}
                        onFocus={() => setCheckUserName(true)}
                        onBlur={userNameCheck}
                        onInput={e => setUserName(e.target.value.trim())}
                        style={checkUserName === false ? {borderColor: '#E43F3F'} : {} }/>
                    
                    {checkUserName === false && <label>{userNameErrorMessage}</label>}
                </div>
                
                <div className="Form__input-wrap">
                    
                    {checkUserPhone === false && <p className="Form__input-error">Error<br/><span>&#10005;</span></p>}

                    <input type="text"
                        name="user-phone"
                        placeholder="Number"
                        value={userPhone}
                        onFocus={() => setCheckUserPhone(true)}
                        onBlur={userPhoneCheck}
                        onInput={e => setUserPhone(e.target.value.trim())}
                        style={checkUserPhone === false ? {borderColor: '#E43F3F'}: {} }/>

                    {checkUserPhone === false && <label>{userPhoneErrorMessage}</label>}
                </div>

            <div className="Form__btn-wrap">
                {/* <button type="submit" >ORDER <span><img src={iconArrowRight} alt={iconArrowRight}/></span> </button> */}
                <button type="submit" >ORDER <span><ArrowRightSvg /></span> </button>
            </div>

        </form>
    )
}
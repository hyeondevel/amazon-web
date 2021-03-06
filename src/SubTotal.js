import React from 'react';
import './SubTotal.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from "./StateProvider";
import {getBasketTotal} from "./Reducer";
import {useNavigate} from "react-router-dom";

function SubTotal(props) {

    const [{basket}, dispatch] = useStateValue();
    const navigate = useNavigate();

    return (
        <div className="subtotal">
            <CurrencyFormat
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
                renderText={value => (
                    <>
                        <p>
                            총액({basket?.length} items) : <strong> {value}원 </strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox"/> 체크박스 입니다.
                        </small>
                    </>
                )}
            />

            <button onClick={() => navigate('/payment')}>결제하기</button>
        </div>
    );
}

export default SubTotal;
import React from 'react';
import './SubTotal.css';
import CurrencyFormat from 'react-currency-format';

function SubTotal(props) {
    return (
        <div className="subtotal">
            <CurrencyFormat
                value={0}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
                renderText={value => (
                    <>
                        <p>
                            총액(0 items) : <string> 0원 </string>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox"/> 체크박스 입니다.
                        </small>
                    </>
                )}
            />

            <button>결제하기</button>
        </div>
    );
}

export default SubTotal;
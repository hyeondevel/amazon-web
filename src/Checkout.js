import React from 'react';
import './Checkout.css';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                    className="checkout_ad"
                    src="https://www.disruptivestatic.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png"
                    alt=""
                />
                <div className="checkout_title">
                    <h2>
    장바구니입니다.
                    </h2>
                </div>
            </div>
            <div className="checkout_right">
                <h2>장바귄 총 금액</h2>
            </div>
        </div>
    );
}

export default Checkout;
import React from 'react';
import './Checkout.css';
import SubTotal from "./SubTotal";
import CheckoutProduct from "./CheckoutProduct";
import {useStateValue} from "./StateProvider";

function Checkout() {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                    className="checkout_ad"
                    src="https://www.disruptivestatic.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png"
                    alt=""
                />
                <div>
                    <h2 className="checkout_title">
                        장바구니입니다.
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct id={item.id} title={item.title} price={item.price} image={item.image} rating={item.rating}/>
                    ))}
                </div>

            </div>
            <div className="checkout_right">
                <SubTotal/>
            </div>
        </div>
    );
}

export default Checkout;
import React from 'react';
import './Product.css';
import {useStateValue} from "./StateProvider";

function Product(props) {
    const {id, title, image, price, rating} = props;
    // basket을 가져올 것, dispatch는 쏠것
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })

    }

    console.log('바스켓 - ', basket)

    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className="product_price">
                    <small>가격</small>
                    <strong>{price}</strong>
                    <small>원</small>
                </p>

                <div className="product_rating">
                    {
                        Array(rating)
                            .fill()
                            .map(() => (<p>★</p>))
                            // .map((elem) => {return (<p>★</p>)})

                    }
                </div>

            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>장바구니에 담기</button>
        </div>
    );
}

export default Product;
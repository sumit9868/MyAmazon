import React from 'react'
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
    
    const [{basket},dispatch]=useStateValue();
    
    const addToBasket=() => {

        //add item to basket
        dispatch({
            type:'ADD TO CART',
            item : {
                //key : value
                id:id,
                title:title,
                image:image,
                price: price,
                rating:rating
            },
        }); 
    };

    return (
        <div className="product">


           <div className="product__info">

                < p className="product__title">{title}</p>

                <p className="product__price">

                    <small>₹</small>
                    <strong> {price}</strong>
                </p>

                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <span role="img">⭐️</span>
                            ))
                    }
                </div>

            </div> 

            <img src={image} alt="" />
            
            <button className= "product__button highlight" onClick={addToBasket}>Add to Cart</button>

        </div>
    )
}

export default Product

import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">

      <div className="checkout__header">
        <img
          className="checkout__header__ad"
          src="https://paisebachaoindia.com/wp-content/uploads/2016/01/banner.png"
          alt="ad"
        />

        {basket.length > 0 && (
          <div className="checkout__header__subtotal">
            <Subtotal />
          </div>
        )}
      </div>

      <div className="checkout__product__list">
        {basket?.length === 0 ? (
          <div className="checkout__title">
            <h2>
              Your shopping basket is Empty.
              <p>
                <i>
                  You have no items in your Cart. To buy one or more items,
                  click "Add to Cart" next to the item.
                </i>
              </p>
            </h2>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your shopping basket</h2>

            {/* <hr className="seperator"></hr> */}

            {/* <hr style="width:100%; text-align:left; margin-left:0;"></hr> */}

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      
    </div>
  );
}

export default Checkout;

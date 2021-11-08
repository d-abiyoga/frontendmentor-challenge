import React from "react";
import Button from "./Button";
import CartItem from "./CartItem";
import { v4 as uuidv4 } from "uuid";

const CartPopout = ({ cartItems, onDelete }) => {
    const getFinalPrice = (price, quantity) => {
        return parseFloat(price * quantity);
    };

    return (
        <div className="Cart__popout-wrapper">
            <h2 className="Cart__title">Cart</h2>
            <div className="Cart__items">
                {cartItems.length === 0 ? (
                    <>
                        <p className="Cart--no-item">Your cart is empty.</p>
                    </>
                ) : (
                    <>
                        <ul>
                            {cartItems.map((item) => (
                                <CartItem
                                    key={uuidv4()}
                                    uid={item.uid}
                                    name={item.productName}
                                    price={item.currentPrice}
                                    quantity={item.quantity}
                                    finalPrice={getFinalPrice(
                                        item.currentPrice,
                                        item.quantity
                                    )}
                                    thumbnailUrl={item.thumbnailUrl}
                                    onDelete={onDelete}
                                />
                            ))}
                        </ul>
                        <Button className="Cart__checkout-btn">Checkout</Button>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartPopout;

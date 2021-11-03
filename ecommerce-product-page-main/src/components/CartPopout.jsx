import { React, useState } from "react";
import Button from "./Button";
import CartItem from "./CartItem";
import ProductPicture from "../assets/img/image-product-1-thumbnail.jpg";
import ProductPict2 from "../assets/img/image-product-2-thumbnail.jpg";

// TODO: implement import of each product picture into a state
const dummyProduct = {
    productName: "Autumn Limited Edition",
    currentPrice: 125,
    quantity: 3,
    // localPictureUrl: ...
};

const CartPopout = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const handleClickTemp = () => {
        setCartItems(() => [...cartItems, dummyProduct]);
        console.log(cartItems);
    };

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
                        <button onClick={handleClickTemp}>Add temp item</button>
                    </>
                ) : (
                    <>
                        <ul>
                            <CartItem
                                name={cartItems[0].productName}
                                price={cartItems[0].currentPrice}
                                quantity={cartItems[0].quantity}
                                finalPrice={getFinalPrice(
                                    cartItems[0].currentPrice,
                                    cartItems[0].quantity
                                )}
                                picture={cartItems[0].picture}
                            />
                        </ul>
                        <Button className="Cart__checkout-btn">Checkout</Button>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartPopout;

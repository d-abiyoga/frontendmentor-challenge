import React from "react";
import CartIcon from "../assets/img/icon-cart.svg?components";

const CartToggler = (props) => {
    return (
        <button className="cartToggler__btn">
            <img
                src={CartIcon}
                alt="cart-toggle"
                onClick={props.toggleCartPopout}
            />
        </button>
    );
};

export default CartToggler;

import React from "react";
import CartIcon from "../assets/img/icon-cart.svg?components";

const CartToggler = (props) => {
    return (
        <div>
            <button>
                <img
                    src={CartIcon}
                    alt="cart-toggle"
                    onClick={props.toggleCartPopout}
                />
            </button>
        </div>
    );
};

export default CartToggler;

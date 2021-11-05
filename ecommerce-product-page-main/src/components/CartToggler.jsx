import React from "react";
import CartIcon from "../assets/img/icon-cart.svg?components";

const CartToggler = ({toggleCartPopout, itemOnCart, isToggled}) => {
    return (
        <button className="cartToggler__btn">
            {itemOnCart !== 0 && !isToggled && (
                <div className="cartToggler__item-quantity">
                    {itemOnCart}
                </div>
            )}
            <img
                src={CartIcon}
                alt="cart-toggle"
                onClick={toggleCartPopout}
            />
        </button>
    );
};

export default CartToggler;

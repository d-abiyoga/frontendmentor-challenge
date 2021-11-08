import React from "react";
import minusIcon from "../assets/img/icon-minus.svg?components";
import plusIcon from "../assets/img/icon-plus.svg?components";
import { ReactComponent as CartIcon } from "../assets/img/icon-cart.svg";
import Button from "./Button";

const QuantityInput = ({
    quantity,
    handleQuantityButton,
    onChange,
    handleCartButton,
}) => {
    return (
        <form>
            <div className="input-wrapper">
                <label style={{ display: "none" }}>Quantity</label>
                <button
                    className="btn__decrease"
                    onClick={handleQuantityButton}
                >
                    <img src={minusIcon} alt="decrease quantity" />
                </button>
                <input
                    className="input"
                    type="number"
                    placeholder="0"
                    min="0"
                    value={quantity}
                    onChange={onChange}
                />
                <button
                    className="btn__increase"
                    onClick={handleQuantityButton}
                >
                    <img src={plusIcon} alt="increase quantity" />
                </button>
            </div>
            <Button className="btn__add-to-cart" onClick={handleCartButton}>
                <div className="btn__icon-wrapper">
                    <CartIcon className="btn__icon" viewBox="0 0 24 24" />
                </div>
                Add to cart
            </Button>
        </form>
    );
};

export default QuantityInput;

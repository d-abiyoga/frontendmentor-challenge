import { React, useState } from "react";
import minusIcon from "../assets/img/icon-minus.svg?components";
import plusIcon from "../assets/img/icon-plus.svg?components";
import { ReactComponent as CartIcon } from "../assets/img/icon-cart.svg";
import Button from "./Button";

const QuantityInput = (props) => {
    const [quantity, setQuantity] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        const target = e.currentTarget;
        if (target.className == "btn__increase") {
            if (quantity == "") setQuantity(1);
            else setQuantity((prevQuantity) => prevQuantity + 1);
        }
        if (target.className == "btn__decrease") {
            if (quantity !== 0) setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    return (
        <form>
            <div className="input-wrapper">
                <label style={{ display: "none" }}>Quantity</label>
                <button className="btn__decrease" onClick={handleClick}>
                    <img src={minusIcon} alt="decrease quantity" />
                </button>
                <input
                    className="input"
                    type="number"
                    placeholder="0"
                    min="0"
                    value={quantity}
                />
                <button className="btn__increase" onClick={handleClick}>
                    <img src={plusIcon} alt="increase quantity" />
                </button>
            </div>
            <Button className="btn__submit-quantity">
                <div className="btn__icon-wrapper">
                    <CartIcon className="btn__icon" viewBox="0 0 24 24"/>
                </div>
                Add to cart
            </Button>
        </form>
    );
};

export default QuantityInput;

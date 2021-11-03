import React from "react";
import { ReactComponent as DeleteIcon } from "../assets/img/icon-delete.svg";
import itemPicture from "../assets/img/image-product-2-thumbnail.jpg";

const CartItem = (props) => {
    const itemName = props.name;
    const itemPrice = props.price;
    const itemQuantity = props.quantity;
    const itemFinalPrice = props.finalPrice;

    const handleClick = (e) => {
        console.log(e.target)
    }

    // const itemPicture = props.Picture;

    return (
        <div className="CartItem__wrapper">
            <img
                className="CartItem__pict"
                src={itemPicture}
                alt="product thumbnail"
            />
            <p className="CartItem__name">{itemName}</p>
            <p className="CartItem__price">
                {`$${itemPrice.toFixed(2)} x ${itemQuantity}`}
                <span className="CartItem__final-price">
                    {` $${itemFinalPrice.toFixed(2)}`}
                </span>
            </p>
            <div className="CartItem__delete">
                <DeleteIcon />
            </div>
        </div>
    );
};

export default CartItem;

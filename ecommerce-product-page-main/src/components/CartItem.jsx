import React from "react";
import { ReactComponent as DeleteIcon } from "../assets/img/icon-delete.svg";
// import itemPicture from "../assets/img/image-product-2-thumbnail.jpg";


const CartItem = ({
    name: itemName,
    price: itemPrice,
    quantity: itemQuantity,
    finalPrice: itemFinalPrice,
    thumbnailUrl,
    onDelete,
    uid
}) => {
    const displayedProductName = (name) => {
        if(name.length > 20) {
            return name.slice(0, 20) + "...";
        } else {
            return name
        }
    }

    return (
        <div className="CartItem__wrapper">
            <img
                className="CartItem__pict"
                src={thumbnailUrl}
                alt="product thumbnail"
            />
            <p className="CartItem__name">{displayedProductName(itemName)}</p>
            <p className="CartItem__price">
                {`$${itemPrice.toFixed(2)} x ${itemQuantity}`}
                <span className="CartItem__final-price">
                    {` $${itemFinalPrice.toFixed(2)}`}
                </span>
            </p>
            <button className="CartItem__delete" onClick={() => onDelete(uid)}>
                <span className="sr-only">Remove item from Cart</span>
                <DeleteIcon aria-hidden="true"/>
            </button>
        </div>
    );
};

export default CartItem;

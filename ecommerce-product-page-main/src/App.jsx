import { React, useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import MenuToggler from "./components/MenuToggler";
import NavLogo from "./components/NavLogo";
import avatar from "./assets/img/image-avatar.png";
import logo from "./assets/img/logo.svg?components";
import CartToggler from "./components/CartToggler";
import Attribution from "./components/Attribution";
import QuantityInput from "./components/QuantityInput";
import CartPopout from "./components/CartPopout";
import MenuOverlay from "./components/MenuOverlay";
import ProductData from "./components/ProductData";
import { v4 as uuidv4 } from "uuid";

const App = () => {
    const currentProduct = {
        id: ProductData.id,
        name: ProductData.name,
        seller: ProductData.seller,
        details: ProductData.details,
        normalPrice: ProductData.price,
        discount: ProductData.discount,
        picture: ProductData.picture,
    };

    const [isCartToggled, setIsCartToggled] = useState(false);
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [curProductQuantity, setCurProductQuantity] = useState("");

    const handleQuantityButton = (e) => {
        e.preventDefault();
        const target = e.currentTarget;
        if (target.className == "btn__increase") {
            if (curProductQuantity == "") setCurProductQuantity(1);
            else setCurProductQuantity((prevQuantity) => prevQuantity + 1);
        }
        if (target.className == "btn__decrease") {
            if (curProductQuantity !== 0)
                setCurProductQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    // TODO implement proper input change
    const handleInputChange = (e) => {
        setCurProductQuantity(e.target.value);
    };

    const addToCart = (e) => {
        e.preventDefault();
        if (curProductQuantity !== 0) {
            setCartItems(() => [
                ...cartItems,
                {
                    uid: uuidv4(),
                    id: currentProduct.id,
                    productName: currentProduct.name,
                    // TODO set correct price
                    currentPrice: 255,
                    quantity: curProductQuantity,
                },
            ]);
        } else {
            alert("please enter item quantity");
        }
    };

    const deleteFromCart = (uid) => {
        setCartItems(cartItems.filter(item => item.uid !== uid))
    };

    const toggleCartPopout = () => {
        setIsCartToggled(!isCartToggled);
    };

    const toggleMenu = () => {
        setIsMenuToggled(!isMenuToggled);
    };

    const calcCurrentProductPrice = (normalPrice, discount) => {
        return parseFloat((normalPrice * (100 - discount)) / 100);
    };

    return (
        <>
            <header>
                <Navbar>
                    <div className="wrapper-left">
                        <MenuToggler
                            isMenuToggled={isMenuToggled}
                            onToggle={toggleMenu}
                        />
                        <NavLogo img={logo} alt="sneakers" />
                    </div>
                    <div className="wrapper-right">
                        <CartToggler
                            toggleCartPopout={toggleCartPopout}
                            itemOnCart={cartItems.length}
                        />
                        <img src={avatar} alt="headshot photo of a man" />
                    </div>
                </Navbar>
            </header>

            <main>
                <Product
                    productId={currentProduct.id}
                    name={currentProduct.name}
                    seller={currentProduct.seller}
                    details={currentProduct.details}
                    currentPrice={calcCurrentProductPrice(
                        currentProduct.normalPrice,
                        currentProduct.discount
                    )}
                    discount={currentProduct.discount}
                    normalPrice={currentProduct.normalPrice}
                    picture={currentProduct.picture}
                ></Product>
                <QuantityInput
                    quantity={curProductQuantity}
                    handleQuantityButton={handleQuantityButton}
                    handleCartButton={addToCart}
                    onChange={handleInputChange}
                />

                {/* Toggled Components */}
                {isCartToggled && (
                    <CartPopout
                        cartItems={cartItems}
                        onDelete={deleteFromCart}
                    />
                )}
                {/* {isMenuToggled && (
                    <MenuOverlay
                        isMenuToggled={isMenuToggled}
                        handleToggleMenu={toggleMenu}
                    />
                )} */}
                {/* TODO Toggle animation */}
                <MenuOverlay
                    isMenuToggled={isMenuToggled}
                    handleToggleMenu={toggleMenu}
                />
            </main>
            <footer>
                <Attribution />
            </footer>
        </>
    );
};

export default App;

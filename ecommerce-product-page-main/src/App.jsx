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

const App = () => {
    const [isCartToggled, setIsCartToggled] = useState(false);
    const [isMenuToggled, setIsMenuToggled] = useState(false);

    const toggleCartPopout = () => {
        setIsCartToggled((prevState) => !prevState);
    };

    const toggleMenu = () => {
        setIsMenuToggled((prevState) => !prevState);
    };

    const currentProductPrice = (normalPrice, discount) => {
        return parseFloat((normalPrice * (100 - discount)) / 100);
    };

    return (
        <>
            <header>
                <Navbar>
                    <div className="wrapper-left">
                        <MenuToggler
                            isMenuToggled={isMenuToggled}
                            toggleMenu={toggleMenu}
                        />
                        <NavLogo img={logo} alt="seakers" />
                    </div>
                    <div className="wrapper-right">
                        <CartToggler
                            isActive={isCartToggled}
                            toggleCartPopout={toggleCartPopout}
                        />
                        <img src={avatar} alt="Profile" />
                    </div>
                </Navbar>
            </header>

            <main>
                <Product
                    name={ProductData.name}
                    seller={ProductData.seller}
                    details={ProductData.details}
                    currentPrice={currentProductPrice(
                        ProductData.price,
                        ProductData.discount
                    )}
                    discount={ProductData.discount}
                    normalPrice={ProductData.price}
                    picture={ProductData.picture}
                ></Product>
                <QuantityInput />

                {/* Toggled Components */}
                {isCartToggled && <CartPopout />}
                {isMenuToggled && <MenuOverlay toggleMenu={toggleMenu} />}
            </main>
            <footer>
                <Attribution />
            </footer>
        </>
    );
};

export default App;

import { React, useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import MenuToggler from "./components/MenuToggler";
import NavItem from "./components/NavItem";
import NavMenu from "./components/NavMenu";
import NavLogo from "./components/NavLogo";
import avatar from "./assets/img/image-avatar.png";
import logo from "./assets/img/logo.svg?components";
import CartToggler from "./components/CartToggler";
import Attribution from "./components/Attribution";
import QuantityInput from "./components/QuantityInput";
import CartPopout from "./components/CartPopout";
import MenuOverlay from "./components/MenuOverlay";


const productImage = [];

const App = () => {
    const [isCartToggled, setIsCartToggled] = useState(false);
    const [isMenuToggled, setIsMenuToggled] = useState(false);

    const toggleCartPopout = () => {
        setIsCartToggled(prevState => !prevState)
    }

    const toggleMenu = () => {
        setIsMenuToggled(prevState => !prevState)
    }

    return (
        <>
            <header>
                <Navbar>
                    <MenuToggler isMenuToggled={isMenuToggled} toggleMenu={toggleMenu}/>
                    <NavLogo img={logo} />
                    {/* {false && (
                        <>
                            <img className="close-btn" src />
                            <NavMenu />
                        </>
                    )} */}
                    <CartToggler isActive={isCartToggled} toggleCartPopout={toggleCartPopout}  />
                    <img src={avatar} alt="Profile" />
                </Navbar>
            </header>

            <main>
                <Product
                    name="Fall Limited Edition Sneakers"
                    seller="Sneaker Company"
                    details="These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they'll
                withstand everything the weather can offer."
                    currentPrice={125}
                    discount={50}
                    normalPrice={250}
                ></Product>
                <QuantityInput />

                {/* Conditional Components */}
                {isCartToggled && <CartPopout />}
                {isMenuToggled && <MenuOverlay toggleMenu={toggleMenu}/>}
            </main>
            <footer>
                <Attribution />
            </footer>
        </>
    );
};

export default App;

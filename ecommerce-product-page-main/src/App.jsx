import React, { Suspense, useState , useEffect} from "react";
import Navbar from "./components/Navbar";
import NavLogo from "./components/NavLogo";
import logo from "./assets/img/logo.svg?components";
import NavMenu from "./components/NavMenu";
import avatar from "./assets/img/image-avatar.png";
import MenuToggler from "./components/MenuToggler";
import SideDrawer from "./components/SideDrawer";
import Carousel from "./components/Carousel";
import ProductData from "./components/ProductData";
import ProductInfo from "./components/ProductInfo";
import QuantityInput from "./components/QuantityInput";
import CartToggler from "./components/CartToggler";
import CartPopout from "./components/CartPopout";
import Attribution from "./components/Attribution";
import { v4 as uuidv4 } from "uuid";
import { useMediaQuery } from "react-responsive";
// import Slideshow from "./components/Slideshow";

const Slideshow = React.lazy(() => import("./components/Slideshow"));
const Lightbox = React.lazy(() => import("./components/Lightbox"));

const App = () => {
    const calcCurrentProductPrice = (normalPrice, discount) => {
        return parseFloat((normalPrice * (100 - discount)) / 100);
    };

    const currentProduct = {
        id: ProductData.id,
        name: ProductData.name,
        seller: ProductData.seller,
        details: ProductData.details,
        normalPrice: ProductData.price,
        discount: ProductData.discount,
        picture: ProductData.picture,
        currentPrice: calcCurrentProductPrice(
            ProductData.price,
            ProductData.discount
        ),
    };

    const [isCartToggled, setIsCartToggled] = useState(false);
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const [isLightboxToggled, setIsLightboxToggled] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [curProductQuantity, setCurProductQuantity] = useState(0);

    const isNotDesktop = useMediaQuery({ query: "(max-width: 1023px)" });

    // Cart add and delete item
    const addToCart = (e) => {
        e.preventDefault();
        if (curProductQuantity !== 0) {
            setCartItems(() => [
                ...cartItems,
                {
                    uid: uuidv4(),
                    id: currentProduct.id,
                    productName: currentProduct.name,
                    currentPrice: currentProduct.currentPrice,
                    quantity: curProductQuantity,
                    thumbnailUrl: currentProduct.picture[0].thumbnailUrl
                },
            ]);
        } else if (!curProductQuantity || curProductQuantity == ""){
            alert("Item quantity cannot be zero");
        }
    };

    const deleteFromCart = (uid) => {
        setCartItems(cartItems.filter((item) => item.uid !== uid));
    };

    // Toggle handler
    const toggleLightbox = () => {
        setIsLightboxToggled((isLightboxToggled) => !isLightboxToggled);
    };

    const toggleCartPopout = () => {
        setIsCartToggled(!isCartToggled);
    };

    const toggleMenu = () => {
        setIsMenuToggled(!isMenuToggled);
    };

    // Quantity input handler
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

    const handleInputChange = (e) => {
        setCurProductQuantity(e.target.value);
    };

    useEffect(() => {
        if(curProductQuantity < 0) {
            alert("quantity cannot be below zero");
            setCurProductQuantity(0);
        }
    })

    return (
        <>
            <header>
                <Navbar>
                    <div className="wrapper-left">
                        {isNotDesktop && (
                            <MenuToggler
                                isMenuToggled={isMenuToggled}
                                onToggle={toggleMenu}
                            />
                        )}
                        <NavLogo img={logo} alt="sneakers" />
                        {!isNotDesktop && <NavMenu></NavMenu>}
                    </div>
                    <div className="wrapper-right">
                        <CartToggler
                            toggleCartPopout={toggleCartPopout}
                            itemOnCart={cartItems.length}
                        />
                        <img
                            className="navbar__avatar"
                            src={avatar}
                            alt="headshot photo of a man"
                        />
                    </div>
                </Navbar>
            </header>

            <main>
                {isNotDesktop ? (
                    <Carousel
                        sliderData={currentProduct.picture}
                        showDotIndex={false}
                    />
                ) : (
                    <Suspense fallback={<div>Product image is still loading...</div>}>
                        <Slideshow
                            onMainFigureClicked={toggleLightbox}
                            pictures={currentProduct.picture}
                        />
                    </Suspense>
                )}
                <ProductInfo
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
                ></ProductInfo>
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
                {isLightboxToggled && (
                    <Suspense fallback={<div>Loading....</div>}>
                        <Lightbox
                            pictures={ProductData.picture}
                            handleClick={toggleLightbox}
                        />
                    </Suspense>
                )}

                {isNotDesktop && (
                    <SideDrawer
                        isMenuToggled={isMenuToggled}
                        handleToggleMenu={toggleMenu}
                    />
                )}
            </main>
            <footer>
                <Attribution />
            </footer>
        </>
    );
};

export default App;

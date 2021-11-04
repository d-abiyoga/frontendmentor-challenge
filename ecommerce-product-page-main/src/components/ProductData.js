import { v4 as uuidv4 } from "uuid";

const ProductData = {
    name: "Fall Limited Edition Sneakers",
    seller: "Sneaker Company",
    details:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    picture: [
        {
            id: uuidv4(),
            title: "Lorem",
            alt: "alt1",
            imgUrl: "../assets/img/image-product-1.jpg",
        },
        {
            id: uuidv4(),
            title: "Lorem",
            alt: "alt1",
            imgUrl: "../assets/img/image-product-2.jpg",
        },
        {
            id: uuidv4(),
            title: "Lorem",
            alt: "alt1",
            imgUrl: "../assets/img/image-product-3.jpg",
        },
        {
            id: uuidv4(),
            title: "Lorem",
            alt: "alt1",
            imgUrl: "../assets/img/image-product-4.jpg",
        },
    ],
    price: 250,
    discount: 50
};

export default ProductData;

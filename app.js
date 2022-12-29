const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
//Slideshow code for the image slider, so that the images match with the skate selection
const products = [{
        id: 1,
        title: "Razors Shift Pro Skates",
        price: 150,
        colors: [{
            img: "RazorShift.png",
        }]
    },
    {
        id: 2,
        title: "Roces M12",
        price: 149,
        colors: [{
            code: "lightgray",
            img: "Roces m12.png",
        }, ],
    },
    {
        id: 3,
        title: "USD Aeon 60",
        price: 150,
        colors: [{
            code: "Black ",
            img: "usd aeon.png",
        }, ]
    },
    {
        id: 4,
        title: "Them Marius Gaile",
        price: 300,
        colors: [{
            code: "black",
            img: "them skates.png",
        }, ],
    },
    {
        id: 5,
        title: "Gawds: Franky Morales",
        price: 350,
        colors: [{
            code: "gray",
            img: "gawds.png",
        }, ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index];

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assing new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});
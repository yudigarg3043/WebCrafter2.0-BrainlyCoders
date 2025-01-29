const products = {
    electronics: [
{
id: "ele-1",
name: "Apple iPhone 15",
brand: "Apple",
type: "Smartphone",
price: 99999,
rating: 4.8,
image: "https://m.media-amazon.com/images/I/71d7rfSl0wL.AC_UF350,350_QL50.jpg"
},
{
id: "ele-2",
name: "Sony WH-1000XM5 Headphones",
brand: "Sony",
type: "Noise Cancelling Headphones",
price: 24999,
rating: 4.9,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3wF_G3E2rjnMXlnvvgutGU5Pr6rQFUHWf3g&s"
},
{
id: "ele-3",
name: "Samsung Galaxy Tab S8",
brand: "Samsung",
type: "Tablet",
price: 54999,
rating: 4.7,
image: "https://images.samsung.com/in/galaxy-tab-s8/feature/galaxy-tab-s8-ultra-graphite-kv-mo.jpg"
},
{
id: "ele-4",
name: "Canon EOS 1500D DSLR Camera",
brand: "Canon",
type: "DSLR Camera",
price: 36990,
rating: 4.7,
image: "https://gppro.in/wp-content/uploads/2024/11/1500D4.jpeg"
},
{
id: "ele-5",
name: "LG OLED TV",
brand: "LG",
type: "Smart OLED TV",
price: 79999,
rating: 4.8,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu3NW2bTXO3y_bZEk3qFouod_JRz1WWv7a7g&s"
},
{
id: "ele-6",
name: "JBL Flip 5 Bluetooth Speaker",
brand: "JBL",
type: "Bluetooth Speaker",
price: 6999,
rating: 4.7,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRBbfcVh1FS3mqE3UWZ7tlQCrDEBhU0StTXQ&s"
},
{
id: "ele-7",
name: "Fitbit Charge 5 Fitness Tracker",
brand: "Fitbit",
type: "Fitness Tracker",
price: 9999,
rating: 4.6,
image: "https://m.media-amazon.com/images/I/61Mz0onKYIL.AC_UF1000,1000_QL80.jpg"
},
{
id: "ele-8",
name: "OnePlus 10 Pro",
brand: "OnePlus",
type: "Smartphone",
price: 64999,
rating: 4.8,
image: "https://5.imimg.com/data5/ECOM/Default/2022/10/KI/AE/QS/162219571/oneplus-10-pro-global-chinese-variant-onetop-tech-4.png"
},
{
id: "ele-9",
name: "Dell XPS 13 Laptop",
brand: "Dell",
type: "Laptop",
price: 114990,
rating: 4.7,
image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/9345/media-gallery/touch/gray/notebook-xps-13-9345-t-gray-gallery-4.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=1355&qlt=100,1&resMode=sharp2&size=1355,804&chrss=full"
},
{
id: "ele-10",
name: "Google Nest Thermostat",
brand: "Google",
type: "Smart Thermostat",
price: 6499,
rating: 4.6,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwJ179O7ZL_C5TbPHlGESaJ0xKCibd2QIEwQ&s"
},
{
id: "ele-11",
name: "Bose QuietComfort Earbuds",
brand: "Bose",
type: "Earbuds",
price: 24999,
rating: 4.8,
image: "https://avstore.in/cdn/shop/files/1.AVStore-Bose-QuietComfort-Earbuds-II-Wire-Free-Earbuds-With-Bluetooth-_-Powerful-Noise-Canceling-Circuitry-Triple-Black.jpg?v=1685707630"
},
{
id: "ele-12",
name: "Xiaomi Mi Smart Band 6",
brand: "Xiaomi",
type: "Fitness Band",
price: 2999,
rating: 4.6,
image: "https://m.media-amazon.com/images/I/51--Fsb1yvL.jpg"
},
{
id: "ele-13",
name: "Apple AirPods Pro",
brand: "Apple",
type: "Earbuds",
price: 24990,
rating: 4.9,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrl1Nq92f7FB60eHtCzC55JVFCmzyCF4ohbg&s"
},
{
id: "ele-14",
name: "Sony PlayStation 5",
brand: "Sony",
type: "Gaming Console",
price: 49999,
"rating": 4.9,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSHn327xturibR9oEJmGYZpWsExpVi7TZinA&s"
},
{
id: "ele-15",
name: "Samsung Galaxy Watch 4",
brand: "Samsung",
type: "Smartwatch",
price: 16999,
rating: 4.7,
image: "https://m.media-amazon.com/images/I/61Nhi7ovjkL.AC_UF1000,1000_QL80.jpg"
},
{
id: "ele-16",
name: "Amazon Echo Show 8",
brand: "Amazon",
type: "Smart Display",
price: 9999,
rating: 4.6,
image: "https://m.media-amazon.com/images/I/61AvI9FrkQL.AC_UF1000,1000_QL80.jpg"
},
{
id: "ele-17",
name: "Samsung Galaxy Buds Live",
brand: "Samsung",
type: "Earbuds",
price: 9999,
rating: 4.7,
image: "https://m.media-amazon.com/images/I/61qyt0unbUL.AC_UF1000,1000_QL80_FMwebp.jpg"
},
{
id: "ele-18",
name: "Lenovo Yoga 7i Laptop",
brand: "Lenovo",
type: "Laptop",
price: 74990,
rating: 4.7,
image: "https://m.media-amazon.com/images/I/61mNePX+b5L.AC_UF1000,1000_QL80.jpg"
},
{
id: "ele-19",
"name": "GoPro HERO10 Black",
brand: "GoPro",
type: "Action Camera",
price: 49999,
rating: 4.8,
image: "https://m.media-amazon.com/images/I/61A31TlXnuL.jpg"
},
{
id: "ele-20",
name: "Microsoft Xbox Series X",
brand: "Microsoft",
type: "Gaming Console",
price: 49999,
rating: 4.9,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3R3ghKIC06f08ZE5Z0Ie0Dwj8VxwJSIUUWg&s"
}
],
fashion: [
{
id: "fa-1",
name: "Nike Athletic Shorts",
brand: "Nike",
type: "Sportswear",
price: 749,
rating: 4.7,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBD2_Vl-K993g3_mlICkiDzTXr2DxMMSJGbs3VLEHFpd5cZRH9iXdDYTSft2vUjfvLwKA&usqp=CAU"
},
{
id: "fa-2",
name: "Adidas Backpacks",
brand: "Adidas",
type: "Backpacks",
price: 1799,
rating: 4.7,
image: "https://m.media-amazon.com/images/I/61OFU8k7TSL.AC_UY1100.jpg"
},
{
id: "fa-3",
name: "Band Uniforms",
brand: "Custom",
type: "Uniforms",
price: 2000,
rating: 4.7,
image: "https://i.pinimg.com/236x/3b/d6/1d/3bd61d1bad3d55a8a93dd9a688377887.jpg"
},
{
id: "fa-4",
name: "Puma Blazers",
brand: "Puma",
type: "Blazers",
price: 4499,
rating: 4.7,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfKWO2KL6wBu1e9MFJSDVUbFNaD0VzLYOmQQ&s"
},
{
id: "fa-5",
name: "Everlast Boxing Gloves",
brand: "Everlast",
type: "Boxing Equipment",
price: 2423,
rating: 4.7,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_wn7RT4_z81RvOW-Ich7Yc_7Tb6RtpMfqpg&s"
},
{
id: "fa-6",
name: "H&M Cardigans",
brand: "H&M",
type: "Casual Wear",
price: 729,
rating: 4.7,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW3QVESacGSoqTewIiDezLN_u8UnE3Cb-aOA&s"
},
{
id: "fa-7",
name: "Michael Kors Clutches",
brand: "Michael Kors",
type: "Clutches",
price: 700,
rating: 4.7,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHIMASzg7jgV07LD4F8pzBLuNUbuzOPn9vtg&s"
},
{
id: "fa-8",
name: "Cosplay Costumes",
brand: "Various",
type: "Cosplay",
price: 2499,
rating: 4.7,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRXwxNg8MLuKAF2KJuVosb1XItpH3w6KoO9g&s"
},
{
id: "fa-9",
name: "Levi's Denim Jackets",
brand: "Levi's",
type: "Outerwear",
price: 1356,
rating: 4.7,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYbZrZ3YM7gmU3Kkp_mWTAxaQKwpEYPNAmtw&s"
},
{
id: "fa-10",
name: "Zara Earrings",
brand: "Zara",
type: "Jewelry",
price: 557,
rating: 4.7,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTajzg8PqOKkTTk-vD_KukEtjbw4R7qxaUfYw&s"
},
{
id: "fa-11",
name: "Ray-Ban Sunglasses",
brand: "Ray-Ban",
type: "Eyewear",
price: 399,
rating: 4.7,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-t3FggVaXy0fXKpfXy9NQBZRnjfxdSBD_g&s"
},
{
id: "fa-12",
name: "Van Heusen Formal Shirt",
brand: "Van Heusen",
type: "Shirts",
price: 999,
rating: 4.7,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKYQOe3VWAC8_Dn1O62lmu2SlgHHLszGWcg&s"
},
{
id: "fa-13",
name: "Fossil Handbags",
brand: "Fossil",
type: "Handbags",
price: 489,
rating: 4.7,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR86SzWuVzkQl6sxjCtsHlwE5xLpe6FUPnQmA&s"
},
{
id: "fa-14",
name: "Steve Madden Heels",
brand: "Steve Madden",
type: "Footwear",
price: 1099,
rating: 4.7,
image: "https://i.pinimg.com/736x/91/c6/ab/91c6ab301b193ee472e13d4913994904.jpg"
},
{
id: "fa-15",
name: "Levi's Skinny Jeans",
brand: "Levi's",
type: "Bottom Wear",
price: 1399,
rating: 4.6,
image: "https://m.media-amazon.com/images/I/A1a8lhK0MvL.AC_UY1100.jpg"
},
{
id: "fa-16",
name: "Vero Moda Dresses",
brand: "Vero Moda",
type: "Dresses",
price: 1799,
rating: 4.5,
image: "https://m.media-amazon.com/images/I/61luwFBn+ML.AC_UY1100.jpg"
},
{
id: "fa-17",
name: "H&M Skirts",
brand: "H&M",
type: "Bottom Wear",
price: 799,
rating: 4.6,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEwidUHBgG5CjYilTZ-ef39xMhbvxVWaDCJA&s"
},
{
id: "fa-18",
name: "Biba Kurtis",
brand: "Biba",
type: "Ethnic Wear",
price: 1599,
rating: 4.7,
image: "https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw90cbf479/images/aw21/assorted17961eaw21wne_1.jpg?sw=502&sh=753"
},
{
id: "fa-19",
name: "Puma Sneakers",
brand: "Puma",
type: "Footwear",
price: 2999,
rating: 4.8,
image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSXBS_EweLAhQVYnh38EqSNSujZQ2Q63gHF144blc-UlLTa_xEdmYYCNm-TVmQtjFVF86tL_ZHpjsmIcXW7WdooBLZnjLmFeLjJiKcY9ZIBBQo6FYfbKyt_QA"
},
{
id: "fa-20",
name: "Calvin Klein T-Shirt",
brand: "Calvin Klein",
type: "Casual Wear",
price: 1599,
rating: 4.6,
image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ6gIeFuWXt2J8jqBjgBgY31MGyJrWYymN75rxdKoGBxwzwzaG90kIwBSVBbBsowTMMyOFHMpOoMF-A4nYCC1GpfKBGdpUg4lZmMqBR2L-kZtd8T6XKlSVP"
}
],
home: [
{
id: "ha-1",
name: "Samsung Refrigerator",
type: "Double Door Refrigerator",
price: 28999,
rating: 4.8,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJK1js8E31HzUdaMNyS8Ll6TfSJPLbsMlpOg&s"
},
{
id: "ha-2",
name: "LG Washing Machine",
type: "Front Load Washing Machine",
price: 24999,
rating: 4.7,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYTs5-qIJbq0wAv0CfI7ZLgKtjPRERKzZx2Q&s"
},
{
id: "ha-3",
name: "Philips Air Fryer",
type: "Digital Air Fryer",
price: 8999,
rating: 4.6,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsz-stEt4WlygmBP1Z9oUXVJ-axDkZwlZLAw&s"
},
{
id: "ha-4",
name: "Dyson Vacuum Cleaner",
type: "Cordless Stick Vacuum Cleaner",
price: 34999,
rating: 4.9,
image: "https://m.media-amazon.com/images/I/21hvQHWbBzL.jpg"
},
{
id: "ha-5",
name: "Bajaj Microwave Oven",
type: "Convection Microwave",
price: 10499,
rating: 4.5,
image: "https://m.media-amazon.com/images/I/81BzXCawNSL.AC_UF1000,1000_QL80.jpg"
},
{
id: "ha-6",
name: "Panasonic Mixer Grinder",
type: "750W Mixer Grinder",
price: 5299,
rating: 4.7,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2K2U47VqGFWAI7-2D_eviQZmGheL3ydHhcQ&s"
},
{
id: "ha-7",
name: "Havells Water Purifier",
type: "RO+UV Water Purifier",
price: 15999,
rating: 4.6,
image: "https://5.imimg.com/data5/SELLER/Default/2022/6/WS/DF/FS/43648447/havells-max-ro-uv-min-8-ltr-ro-water-purifier-500x500.jpg"
},
{
id: "ha-8",
name: "Usha Ceiling Fan",
type: "3-Blade Ceiling Fan",
price: 3499,
rating: 4.5,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE_1ZElUiGKokNMp1ZUwKIU19nabKZxg-ivg&s"
},
{
id: "ha-9",
name: "Eureka Forbes Geyser",
type: "Instant Water Heater",
price: 6499,
rating: 4.6,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkrKUzopd7QKLP1cakvwDZo-BC9Oh68mcw8w&s"
},
{
id: "ha-10",
name: "Sony Home Theater",
type: "5.1 Surround Sound System",
price: 29999,
rating: 4.8,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJAh0DiK-LKGyn0r8mwyR5kFgcR-v0NN56Uw&s"
},
{
id: "ha-11",
name: "Orient Electric Room Heater",
type: "Quartz Room Heater",
price: 3299,
rating: 4.4,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfN4Csg4-Lud5LFtUCKv8ABJ72TOstt3yx9w&s"
},
{
id: "ha-12",
name: "Voltas Air Conditioner",
type: "1.5 Ton Split AC",
price: 32999,
rating: 4.7,
image: "https://bansiwalastores.com/cdn/shop/files/SA266_1_61e1c5c2-389d-4550-874a-830d8fd3d985_1024x1024.jpg?v=1712484431"
},
{
id: "ha-13",
name: "Prestige Induction Cooktop",
type: "2000W Induction Stove",
price: 3999,
rating: 4.6,
image: "https://m.media-amazon.com/images/I/51VRBhp6yjL.AC_UF894,1000_QL80.jpg"
},
{
id: "ha-14",
name: "Kent Chimney",
type: "Auto Clean Kitchen Chimney",
price: 18999,
rating: 4.7,
image: "https://5.imimg.com/data5/SELLER/Default/2022/5/VS/IZ/XO/5409533/kent-supreme-ro-water-purifier.jpg"
},
{
id: "ha-15",
name: "Whirlpool Deep Freezer",
type: "Chest Freezer",
price: 21999,
rating: 4.7,
image: "https://5.imimg.com/data5/UJ/VO/PZ/SELLER-5774620/whirlpool-chest-freezer-with-dual-function-24-to-5c.jpeg"
},
{
id: "ha-16",
name: "Croma Air Purifier",
type: "HEPA Filter Air Purifier",
price: 9999,
rating: 4.5,
image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1730097558/308984_0_ubmauu.png?tr=w-1000"
},
{
id: "ha-17",
name: "Sanyo LED TV",
type: "Smart LED TV",
price: 24999,
rating: 4.4,
image: "https://m.media-amazon.com/images/I/71MvL-3KMBL.jpg"
},
{
id: "ha-18",
name: "Karcher High Pressure Washer",
type: "Electric Pressure Washer",
price: 12999,
rating: 4.7,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh2LiQyQ2R-_Y5tZtcaSQMfUCsJA1EHFD27A&s"
},
{
id: "ha-19",
name: "Black+Decker Coffee Maker",
type: "Coffee Brewing Machine",
price: 3499,
rating: 4.3,
image: "https://m.media-amazon.com/images/I/61djyKQMUAL.jpg"
},
{
id: "ha-20",
name: "Samsung Microwave Oven",
type: "Grill Microwave",
price: 16999,
rating: 4.6,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiJCKAhlz0Y5M2uSKaMJ0XNEBt_WudUszrKA&s"
}
],
toys: [
    {
        id: "toy-1",
        name: "LEGO City Fire Station",
        brand: "LEGO",
        type: "Building Blocks",
        price: 3499,
        rating: 4.8,
        image: "https://m.media-amazon.com/images/I/91C+dMhwnrL.AC_SY679.jpg"
    },
    {
        id: "toy-2",
        name: "Barbie Dreamhouse Dollhouse",
        brand: "Barbie",
        type: "Dollhouse",
        price: 9999,
        rating: 4.7,
        image: "https://m.media-amazon.com/images/I/91d5hthzI7L.AC_SY679.jpg"
    },
    {
        id: "toy-3",
        name: "Hot Wheels Ultimate Garage",
        brand: "Hot Wheels",
        type: "Car Set",
        price: 5999,
        rating: 4.8,
        image: "https://m.media-amazon.com/images/I/91jB9Ntbw7L.AC_SY679.jpg"
    },
    {
        id: "toy-4",
        name: "NERF Elite 2.0 Blaster",
        brand: "NERF",
        type: "Blaster Gun",
        price: 1999,
        rating: 4.6,
        image: "https://m.media-amazon.com/images/I/51D5VKTbmYL.AC_SY450.jpg"
    },
    {
        id: "toy-5",
        name: "Fisher-Price Laugh & Learn Smart Stages",
        brand: "Fisher-Price",
        type: "Learning Toy",
        price: 3499,
        rating: 4.8,
        image: "https://m.media-amazon.com/images/I/91kmV5iP2QL.AC_SY450.jpg"
    },
    {
        id: "toy-6",
        name: "Play-Doh Kitchen Creations",
        brand: "Play-Doh",
        type: "Craft Kit",
        price: 1299,
        rating: 4.7,
        image: "https://m.media-amazon.com/images/I/91l6J7aYbQL.AC_SY450.jpg"
    },
    {
        id: "toy-7",
        name: "Disney Princess Royal Shimmer Dolls",
        brand: "Disney Princess",
        type: "Doll",
        price: 999,
        rating: 4.7,
        image: "https://m.media-amazon.com/images/I/91d28SFlWsL.AC_SY450.jpg"
    },
    {
        id: "toy-8",
        name: "VTech Smart Wheels",
        brand: "VTech",
        type: "Vehicle Toy",
        price: 1299,
        rating: 4.6,
        image: "https://m.media-amazon.com/images/I/61O4kAbBO5L.AC_SY450.jpg"
    },
    {
        id: "toy-9",
        name: "Playmobil Pirates Ship",
        brand: "Playmobil",
        type: "Building Set",
        price: 2499,
        rating: 4.8,
        image: "https://m.media-amazon.com/images/I/81WOK2vP71L.AC_SY679.jpg"
    },
    {
        id: "toy-10",
        name: "L.O.L. Surprise! Dolls",
        brand: "L.O.L. Surprise",
        type: "Doll",
        price: 799,
        rating: 4.7,
        image: "https://m.media-amazon.com/images/I/91ftv+gs6uL.AC_SY679.jpg"
    },
    {
        id: "toy-11",
        name: "Rubik's Cube",
        brand: "Rubik's",
        type: "Puzzle",
        price: 599,
        rating: 4.6,
        image: "https://m.media-amazon.com/images/I/91g-I5HLLQL.AC_SY450.jpg"
    },
    {
        id: "toy-12",
        name: "LeapFrog LeapPad Academy",
        brand: "LeapFrog",
        type: "Tablet Toy",
        price: 9999,
        rating: 4.7,
        image: "https://m.media-amazon.com/images/I/61BeJlLkD5L.AC_SY679.jpg"
    },
    {
        id: "toy-13",
        name: "LOL Surprise! Biggie Pets",
        brand: "LOL Surprise",
        type: "Pet Toy",
        price: 1499,
        rating: 4.6,
        image: "https://m.media-amazon.com/images/I/81iq83fFayL.AC_SY450.jpg"
    },
    {
        id: "toy-14",
        name: "FurReal Friends",
        brand: "Hasbro",
        type: "Interactive Pet",
        price: 2299,
        rating: 4.7,
        image: "https://m.media-amazon.com/images/I/91JfVbEX7oL.AC_SY450.jpg"
    },
    {
        id: "toy-15",
        name: "Little Tikes Rocking Horse",
        brand: "Little Tikes",
        type: "Rocking Toy",
        price: 1999,
        rating: 4.7,
        image: "https://m.media-amazon.com/images/I/61IcGVz7Z7L.AC_SY450.jpg"
    },
    {
        id: "toy-16",
        name: "VTech KidiZoom Camera",
        brand: "VTech",
        type: "Camera Toy",
        price: 2999,
        rating: 4.6,
        image: "https://m.media-amazon.com/images/I/81dUAtwTlXL.AC_SY679.jpg"
    },
    {
        id: "toy-17",
        name: "Star Wars: The Mandalorian Baby Yoda",
        brand: "Star Wars",
        type: "Action Figure",
        price: 1999,
        rating: 4.8,
        image: "https://m.media-amazon.com/images/I/91YlycdpQ4L.AC_SY450.jpg"
    },
    {
        id: "toy-18",
        name: "VTech Write and Learn",
        brand: "VTech",
        type: "Learning Toy",
        price: 1399,
        rating: 4.7,
        image: "https://m.media-amazon.com/images/I/71VjA0hI5tL.AC_SY450.jpg"
    },
    {
        id: "toy-19",
        name: "Hot Wheels Track Set",
        brand: "Hot Wheels",
        type: "Track Set",
        price: 1999,
        rating: 4.6,
        image: "https://m.media-amazon.com/images/I/91N8WBzDR0L.AC_SY679.jpg"
    },
    {
        id: "toy-20",
        name: "Baby Shark Singing Plush",
        brand: "Baby Shark",
        type: "Plush Toy",
        price: 1599,
        rating: 4.7,
        image: "https://m.media-amazon.com/images/I/91pV-JjGG0L.AC_SY450.jpg"
    }
],
books: [
    {
        id: "book-1",
        name: "The Alchemist",
        "author": "Paulo Coelho",
        "genre": "Fiction",
        price: 499,
        rating: 4.8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6rivxzWfS_59cr1eaAK3DaWohC_bp48QgBw&s"
    },
    {
        id: "book-2",
        name: "Becoming",
        "author": "Michelle Obama",
        "genre": "Biography",
        price: 899,
        rating: 4.9,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_rtHG95UtkCYeJOgyOYlk2iGgobGzN1aa7g&s"
    },
    {
        id: "book-3",
        name: "Sapiens: A Brief History of Humankind",
        "author": "Yuval Noah Harari",
        "genre": "Non-fiction",
        price: 749,
        rating: 4.7,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQF5xrR_9QsaHLB4Wv8UVZ0UdDrwi5bXx5uQ&s"
    },
    {
        id: "book-4",
        name: "Where the Crawdads Sing",
        "author": "Delia Owens",
        "genre": "Mystery",
        price: 649,
        rating: 4.8,
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg"
    },
    {
        id: "book-5",
        name: "Atomic Habits",
        "author": "James Clear",
        "genre": "Self-Help",
        price: 799,
        rating: 4.8,
        image: "https://images-na.ssl-images-amazon.com/images/I/615bheKNgEL.AC_UL600_SR600,600.jpg"
    },
    {
        id: "book-6",
        name: "The Silent Patient",
        "author": "Alex Michaelides",
        "genre": "Thriller",
        price: 699,
        rating: 4.7,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv4xbRWzlZZKpi-1kzTi-xeyNZIDUdF-A3pw&s"
    },
    {
        id: "book-7",
        name: "The Midnight Library",
        "author": "Matt Haig",
        "genre": "Fiction",
        price: 499,
        rating: 4.8,
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1692820079l/51879720.jpg"
    },
    {
        id: "book-8",
        name: "Educated",
        "author": "Tara Westover",
        "genre": "Memoir",
        price: 799,
        rating: 4.9,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcuLipdReOGjslChgAkOoTA__dHAuugazLwA&s"
    },
    {
        id: "book-9",
        name: "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "genre": "Classics",
        price: 399,
        rating: 4.6,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKi5lknrw7SIwZ01RQRqyvtXz2bFxrUsGVpA&s"
    },
    {
        id: "book-10",
        name: "The Book Thief",
        "author": "Markus Zusak",
        "genre": "Historical Fiction",
        price: 699,
        rating: 4.8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSYS5MCRNf9a3eTWz9X64R5ToG8HfgEBlKGQ&s"
    },
    {
        id: "book-11",
        name: "The Hunger Games",
        "author": "Suzanne Collins",
        "genre": "Dystopian",
        price: 399,
        rating: 4.7,
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/The_Hunger_Games.jpg/220px-The_Hunger_Games.jpg"
    },
    {
        id: "book-12",
        name: "Circe",
        "author": "Madeline Miller",
        "genre": "Fantasy",
        price: 699,
        rating: 4.8,
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/The_Hunger_Games.jpg/220px-The_Hunger_Games.jpg"
    },
    {
        id: "book-13",
        name: "The Power of Habit",
        "author": "Charles Duhigg",
        "genre": "Self-Help",
        price: 699,
        rating: 4.7,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8PqHT8IIpKr2e3HYyszRBjzpZ6C7krNRdyQ&s"
    },
    {
        id: "book-14",
        name: "The Girl on the Train",
        "author": "Paula Hawkins",
        "genre": "Thriller",
        price: 599,
        rating: 4.7,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWUrACNm70PEQ__A-Zs22QQ2wPFNrXY-XnEw&s"
    },
    {
        id: "book-15",
        name: "Little Fires Everywhere",
        "author": "Celeste Ng",
        "genre": "Fiction",
        price: 799,
        rating: 4.8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_5Q0Gtc3KsBmSThwEQnFO0NFXl4apxR3btw&s"
    },
   
       
    {
        id: "book-17",
        name: "The Seven Husbands of Evelyn Hugo",
        "author": "Taylor Jenkins Reid",
        "genre": "Romance",
        price: 799,
        rating: 4.8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT14f0XnUsqeKjLB7CRF7rDWLX4OeYBwVTdWw&s"
    },
    {
        id: "book-18",
        name: "The Subtle Art of Not Giving a F*ck",
        "author": "Mark Manson",
        "genre": "Self-Help",
        price: 599,
        rating: 4.7,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDg7g4G4noCRirArFlduwDp9Nk6U8FQMxtxA&s"
    },
    {
        id: "book-19",
        name: "The Outsiders",
        "author": "S.E. Hinton",
        "genre": "Young Adult",
        price: 499,
        rating: 4.8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCjXe5g5dnt9_E1gicrpqVHJJZsHSgWSVtg&s"
    },
    {
        id: "book-20",
        name: "The Road",
        "author": "Cormac McCarthy",
        "genre": "Fiction",
        price: 599,
        rating: 4.6,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyQF0RRiPzPI8jMlQKiEOyeHEicsWYBq5Qag&s"
    }
],
beauty: [
    {
        id: "beauty-1",
        name: "Estée Lauder Double Wear Foundation",
        brand: "Estée Lauder",
        type: "Foundation",
        price: 4200,
        rating: 4.8,
        image: "https://m.media-amazon.com/images/I/91YWx9R7tLL.AC_SY679.jpg"
    },
    {
        id: "beauty-2",
        name: "Maybelline Fit Me Matte + Poreless",
        brand: "Maybelline",
        type: "Foundation",
        price: 799,
        rating: 4.7,
        image: "https://m.media-amazon.com/images/I/81xTAvHGR5L.AC_SY679.jpg"
    },
    {
        id: "beauty-3",
        name: "L'Oréal Paris Lash Paradise Mascara",
        brand: "L'Oréal",
        type: "Mascara",
        price: 899,
        rating: 4.8,
        image: "https://m.media-amazon.com/images/I/91mgA44xP6L.AC_SY679.jpg"
    },
    {
        id: "beauty-4",
        name: "Revlon Super Lustrous Lipstick",
        brand: "Revlon",
        type: "Lipstick",
        price: 499,
        rating: 4.6,
        image: "https://m.media-amazon.com/images/I/91X9HKU4KFL.AC_SY679.jpg"
    },
    {
        id: "beauty-5",
        name: "Clinique Moisture Surge",
        brand: "Clinique",
        type: "Moisturizer",
        price: 4200,
        rating: 4.7,
        image: "https://m.media-amazon.com/images/I/91v7H4bHk7L.AC_SY679.jpg"
    },
    {
        id: "beauty-6",
        name: "Tarte Shape Tape Concealer",
        brand: "Tarte",
        type: "Concealer",
        price: 2999,
        rating: 4.8,
        image: "https://m.media-amazon.com/images/I/81F3lWX26AL.AC_SY679.jpg"
    },
    {
        id: "beauty-7",
        name: "Fenty Beauty Pro Filt'r Foundation",
        brand: "Fenty Beauty",
        type: "Foundation",
        price: 3599,
        rating: 4.9,
        image: "https://m.media-amazon.com/images/I/91MbLoFY2ML.AC_SY679.jpg"
    },
    {
        id: "beauty-8",
        name: "NYX Professional Makeup Butter Gloss",
        brand: "NYX",
        type: "Lip Gloss",
        price: 399,
        rating: 4.7,
        image: "https://m.media-amazon.com/images/I/71B-cTkfD9L.AC_SY679.jpg"
    },
    {
        id: "beauty-9",
        name: "L'Oréal Paris Revitalift Bright Reveal",
        brand: "L'Oréal",
        type: "Face Cream",
        price: 799,
        rating: 4.6,
        image: "https://m.media-amazon.com/images/I/71X94+2Iq-L.AC_SY679.jpg"
    },
    {
        id: "beauty-10",
        name: "The Ordinary Niacinamide Serum",
        brand: "The Ordinary",
        type: "Serum",
        price: 799,
        rating: 4.8,
        image: "https://m.media-amazon.com/images/I/81ZyDJ5qY+L.AC_SY679.jpg"
    },
    {
        id: "beauty-11",
        name: "Charlotte Tilbury Magic Cream",
        brand: "Charlotte Tilbury",
        type: "Moisturizer",
        price: 8999,
        rating: 4.9,
        image: "https://m.media-amazon.com/images/I/71zIBFiHhML.AC_SY679.jpg"
    },
    {
        id: "beauty-12",
        name: "Anastasia Beverly Hills Brow Wiz",
        brand: "Anastasia Beverly Hills",
        type: "Brow Pencil",
        price: 2299,
        rating: 4.7,
        image: "https://m.media-amazon.com/images/I/81+xJc1NVjL.AC_SY679.jpg"
    },
    {
        id: "beauty-13",
        name: "Kiehl's Ultra Facial Cream",
        brand: "Kiehl's",
        type: "Face Cream",
        price: 3999,
        rating: 4.8,
        image: "https://m.media-amazon.com/images/I/81+Jlkm1WsL.AC_SY679.jpg"
    },
    {
        id: "beauty-14",
        name: "MAC Lipstick",
        brand: "MAC",
        type: "Lipstick",
        price: 1800,
        rating: 4.7,
        image: "https://m.media-amazon.com/images/I/91ilQ5J7zlL.AC_SY679.jpg"
    },
    {
        id: "beauty-15",
        name: "Morphe 35O Nature Glow Eyeshadow Palette",
        brand: "Morphe",
        type: "Eyeshadow Palette",
        price: 2499,
        rating: 4.8,
        image: "https://m.media-amazon.com/images/I/91f0W9vqTLL.AC_SY679.jpg"
    },
    {
        id: "beauty-16",
        name: "Burt's Bees Lip Balm",
        brand: "Burt's Bees",
        type: "Lip Balm",
        price: 299,
        rating: 4.6,
        image: "https://m.media-amazon.com/images/I/71GvcJ5J1XL.AC_SY679.jpg"
    },
    {
        id: "beauty-17",
        name: "Urban Decay All Nighter Setting Spray",
        brand: "Urban Decay",
        type: "Setting Spray",
        price: 2699,
        rating: 4.8,
        image: "https://m.media-amazon.com/images/I/91H9RG4F8RL.AC_SY679.jpg"
    },
    {
        id: "beauty-18",
        name: "Drunk Elephant Protini Polypeptide Cream",
        brand: "Drunk Elephant",
        type: "Moisturizer",
        price: 3999,
        rating: 4.7,
        image: "https://m.media-amazon.com/images/I/81lFVY2SVqL.AC_SY679.jpg"
    },
    {
        id: "beauty-19",
        name: "Mario Badescu Facial Spray",
        brand: "Mario Badescu",
        type: "Facial Mist",
        price: 799,
        rating: 4.7,
        image: "https://m.media-amazon.com/images/I/71+En-rsl2L.AC_SY679.jpg"
    },
    {
        id: "beauty-20",
        name: "Neutrogena Hydro Boost Water Gel",
        brand: "Neutrogena",
        type: "Moisturizer",
        price: 899,
        rating: 4.8,
        image: "https://m.media-amazon.com/images/I/71pGbblmTTL.AC_SY679.jpg"
    }
]
};

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartTotal() {
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById("cart-total").textContent = total.toFixed(2);
}

function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.length;
}

function addToCart(productId) {
    let product = Object.values(products).flat().find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        updateCartTotal();
        alert(`${product.name} added to cart!`);
    }
    renderCartItems()
}

function toggleCart() {
    const cartSidebar = document.getElementById("cart-sidebar");
    cartSidebar.classList.toggle("open");
    renderCartItems();
}

function renderCartItems() {
    const cartItemsList = document.getElementById("cart-items");
    cartItemsList.innerHTML = cart.map((item, index) => `
        <li>${item.name} - ₹${item.price.toFixed(2)}
            <button id="bt1" onclick="removeFromCart(${index})">❌</button>
        </li>`).join('');
    updateCartTotal();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
}

function switchTab(category) {
const productList = document.getElementById("product-list");

if (!products[category] || products[category].length === 0) {
    productList.innerHTML = "<p>No products available.</p>";
    return;
}

productList.innerHTML = `
    <div class="row">
        ${products[category].map(product => `
            <div class="col-md-3 d-flex align-items-stretch">
                <div class="card rounded-4 border-3 mb-3" style="width: 18rem;">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h4>${product.name}</h4>
                        <p class="card-text">₹${product.price.toFixed(2)}</p>
                        <button class="btn btcart" onclick="addToCart('${product.id}')">Add to Cart</button>
                    </div>
                </div>
            </div>
        `).join('')}
    </div>`;
}


switchTab("electronics");
updateCartCount();
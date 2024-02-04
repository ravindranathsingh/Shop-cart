import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Pant from "../assets/Pant.jpg";
import Watch from "../assets/Watch.jpg";
import Washing_Machine from "../assets/Washing_Machine.jpg";
import T_shirt from "../assets/T_shirt.jpg";
import Shoes from "../assets/Shoes.jpg";
import Refrigirator from "../assets/Refrigirator.jpg";

import Motorola from "../assets/Motorola.png";
import Samsung from "../assets/Samsung.png";
import Vivo from "../assets/Vivo.png";
import Realme from "../assets/Realme.png";
import Nothing from "../assets/Nothing.png";
import Poco from "../assets/Poco.png";
import Redmi from "../assets/Redmi.png";
import Infinix from "../assets/Infinix.png";
import Apple from "../assets/Apple.png";

import Keyboard from "../assets/Keyboard.jpg";
import Printer from "../assets/Printer.jpg";
import Camera from "../assets/Camera.jpg";
import Monitors from "../assets/Monitors.jpg";
import TV from "../assets/TV.jpg";
import Mouse from "../assets/Mouse.jpg";
import Desktops from "../assets/Desktops.webp";
import Trimmer from "../assets/Trimmer.webp";
import Lenovo_Laptop from "../assets/Lenovo_Laptop.webp";

import OnePlus_Tv from "../assets/OnePlus_Tv.webp";
import Washing from "../assets/Washing.webp";
import Fan from "../assets/Fan.png";
import Grinder from "../assets/Grinder.webp";
import frigde from "../assets/frigde.png";
import Panasonic_Ac from "../assets/Panasonic_Ac.webp";
import Purifier from "../assets/Purifier.png";
import Vacuum_Cleaner from "../assets/Vacuum_Cleaner.png";
import Microwave from "../assets/Microwave.png";

import Suitcase from "../assets/Suitcase.webp";
import Trekking from "../assets/Trekking.png";
import Wildcraft from "../assets/Wildcraft.webp";
import Duffel from "../assets/Duffel.webp";
import Travel_Luggage from "../assets/Travel_Luggage.webp";
import Travel_Bag from "../assets/Travel_Bag.webp";
import Tourister from "../assets/Tourister.webp";
import Mountain from "../assets/Mountain.webp";
import Hand_Duffel from "../assets/Hand_Duffel.webp";

import Men_Regular from "../assets/Men_Regular.webp";
import Carson from "../assets/Carson.webp";
import kuberji from "../assets/kuberji.webp";
import Kurti from "../assets/Kurti.webp";
import Saree from "../assets/Saree.webp";
import Regular_wear from "../assets/Regular_wear.webp";
import Casual from "../assets/Casual.webp";
import Girls_Casual from "../assets/Girls_Casual.webp";
import Thermal from "../assets/Thermal.webp";

import ShopCart_Bed from "../assets/ShopCart_Bed.webp";
import Take_Interio from "../assets/Take_Interio.webp";
import Bunk_Loft from "../assets/Bunk_Loft.webp";
import three_Seater from "../assets/three_Seater.webp";
import Wakeup_Sofa from "../assets/Wakeup_Sofa.webp";
import six_Seater from "../assets/six_Seater.webp";
import two_Seater from "../assets/two_Seater.webp";
import Computer_Desk from "../assets/Computer_Desk.webp";
import Gaming_Chair from "../assets/Gaming_Chair.webp";

import Sneaker1 from "../assets/Sneaker1.webp";
import Sneaker2 from "../assets/Sneaker2.webp";
import Sneaker3 from "../assets/Sneaker3.webp";
import Sneaker4 from "../assets/Sneaker4.webp";
import Sneaker5 from "../assets/Sneaker5.webp";
import Sneaker6 from "../assets/Sneaker6.webp";
import Sneaker7 from "../assets/Sneaker7.webp";
import Sneaker8 from "../assets/Sneaker8.webp";
import Sneaker9 from "../assets/Sneaker9.webp";

import toy1 from "../assets/toy1.webp";
import toy2 from "../assets/toy2.webp";
import toy3 from "../assets/toy3.webp";
import toy4 from "../assets/toy4.webp";
import toy5 from "../assets/toy5.webp";
import toy6 from "../assets/toy6.webp";
import toy7 from "../assets/toy7.webp";
import toy8 from "../assets/toy8.webp";
import toy9 from "../assets/toy9.webp";

import { ShopContext } from '../context/ShopContextProvider';

export const productList = [  
    {
        id: 1,
        name : "OnePlus U1S 164 cm (65 inch) Ultra HD",
        image: OnePlus_Tv,
        price: 47999
    },
    {
        id: 2,
        name : "LG 6.5 kg Fully Automatic Front Load Washing Machine",
        image: Washing,
        price: 24990
    },
    {
        id: 3,
        name : "LUMINOUS Centaur 400 mm 3 Blade Table Fan",
        image: Fan,
        price: 1569
    },
    {
        id: 4,
        name : "BAJAJ 410570 GX 1 500 W Juicer Mixer Grinder (3 Jars, Blue)",
        image: Grinder,
        price: 2299
    },
    {
        id: 5,
        name : "Whirlpool 308 L Frost Free Double Door 3 Star Refrigerator",
        image: frigde,
        price: 32990
    },
    {
        id: 6,
        name : "Panasonic 1 Ton 3 Star Split Inverter AC with Wi-fi Connect - White",
        image: Panasonic_Ac,
        price: 32990
    },
    {
        id: 7,
        name : "LIVPURE + Minerals Water Purifier",
        image: Purifier,
        price: 8999
    },
    {
        id: 8,
        name : "PHILIPS Vacuum Cleaner with Suction,Turbo Brush",
        image: Vacuum_Cleaner,
        price: 9199
    },
    {
        id: 9,
        name : "Panasonic 23 L Convection Microwave Oven",
        image: Microwave,
        price: 10290
    },
    {
        id: 10,
        name : "Small Cabin Suitcase (57 cm)",
        image: Suitcase,
        price: 1199
    },
    {
        id: 11,
        name : "GTIER TREKKING",
        image: Trekking,
        price: 528
    },
    {
        id: 12,
        name : "Wildcraft Flip Ruck",
        image: Wildcraft,
        price: 1379
    },
    {
        id: 13,
        name : "WROGN 70 L Strolley Duffel Bag",
        image: Duffel,
        price: 549
    },
    {
        id: 14,
        name : "Urban Travel Luggage 70 L Strolley Duffel Bag",
        image: Travel_Luggage,
        price: 399
    },
    {
        id: 15,
        name : "Fast look Expandable Travel Bag",
        image: Travel_Bag,
        price: 699
    },
    {
        id: 16,
        name : "Kamiliant by American Tourister",
        image: Tourister,
        price: 1649
    },
    {
        id: 17,
        name : "JIRFASHION Mountain Rucksack bag",
        image: Mountain,
        price: 415
    },
    {
        id: 18,
        name : "Wildcraft 40 L Hand Duffel",
        image: Hand_Duffel,
        price: 889
    },
    {
        id: 19,
        name: "Mouse",
        image: Mouse,
        price: 249
    },
    {
        id: 20,
        name: "Monitors",
        image: Monitors,
        price: 24949
    },
    {
        id: 21,
        name: "TV",
        image: TV,
        price: 12499
    },
    {
        id: 22,
        name: "KeyBoard",
        image: Keyboard,
        price: 1149
    },
    {
        id: 23,
        name: "Printer",
        image: Printer,
        price: 20520
    },
    {
        id: 24,
        name: "Camera",
        image: Camera,
        price: 44949
    },
    {
        id: 25,
        name : "ASUS Desktops Core i5",
        image: Desktops,
        price: 35590
    },
    {
        id: 26,
        name : "PHILIPS BT3101/15 Trimmer",
        image: Trimmer,
        price: 1049
    },
    {
        id: 27,
        name : "Lenovo Intel Core i5",
        image: Lenovo_Laptop,
        price: 30990
    },
    {
        id: 28,
        name : "TIGERSNAKE Men Regular Fit",
        image: Men_Regular,
        price: 339
    },
    {
        id: 29,
        name : "James Carson Men Regular Fit",
        image: Carson,
        price: 424
    },
    {
        id: 30,
        name : "Shree kuberji fashion Men Printed Cotton Blend",
        image: kuberji,
        price: 799
    },
    {
        id: 31,
        name : "SEAKART Women Floral",
        image: Kurti,
        price: 510
    },
    {
        id: 32,
        name : "KRIVITY Embroidered Saree",
        image: Saree,
        price: 361
    },
    {
        id: 33,
        name : "XRV Beach Wear Regular",
        image: Regular_wear,
        price: 835
    },
    {
        id: 34,
        name : "Mars Infiniti Boys & Girls Casual",
        image: Casual,
        price: 401
    },
    {
        id: 35,
        name : "EM DRESSES Baby Girls Casual",
        image: Girls_Casual,
        price: 151
    },
    {
        id: 36,
        name : "Heatonn Top - Pyjama Set Thermal",
        image: Thermal,
        price: 692
    },{
        id: 37,
        name : "ShopCart Engineered Wood Queen Bed",
        image: ShopCart_Bed,
        price: 9249
    },
    {
        id: 38,
        name : "Take Interio Engineered Wood Queen Bed",
        image: Take_Interio,
        price: 9299
    },
    {
        id: 39,
        name : "StellWell BUNK LOFT BED",
        image: Bunk_Loft,
        price: 11321
    },
    {
        id: 40,
        name : "Bharat Lifestyle Deno Fabric 3 Seater Sofa",
        image: three_Seater,
        price: 11749
    },
    {
        id: 41,
        name : "Wakeup India Hazy Premium Fabric Sofa",
        image: Wakeup_Sofa,
        price: 15928
    },
    {
        id: 42,
        name : "WESTIDO Berger Fabric 6 Seater Sofa",
        image: six_Seater,
        price: 17925
    },
    {
        id: 43,
        name : "Wakeup India Snugy Sofa 2 Seater, Sofa Set",
        image: two_Seater,
        price: 11359
    },
    {
        id: 44,
        name : "Purple Furniture Elite Wood Computer Desk",
        image: Computer_Desk,
        price: 12999
    },
    {
        id: 45,
        name : "Upmarkt Pro Ergonomic Gaming Chair",
        image: Gaming_Chair,
        price: 10449
    },
    {
        id: 46,
        name : "ATOM Gansta1 Sneaker",
        image: Sneaker1,
        price: 1339
    },
    {
        id: 47,
        name : "CAMPUS NORTH PLUS",
        image: Sneaker2,
        price: 1215
    },
    {
        id: 48,
        name : "RebelBe Outdoor Casual",
        image: Sneaker3,
        price: 599
    },
    {
        id: 49,
        name : "Aadi Synthetic",
        image: Sneaker4,
        price: 434
    },
    {
        id: 50,
        name : "BRUTON Lite Sports Shoe",
        image: Sneaker5,
        price: 514
    },
    {
        id: 51,
        name : "asian Newton-09 White",
        image: Sneaker6,
        price: 648
    },
    {
        id: 52,
        name : "action Action Athleo",
        image: Sneaker7,
        price: 1119
    },
    {
        id: 53,
        name : "JQR Signature Sports",
        image: Sneaker8,
        price: 1270
    },
    {
        id: 54,
        name : "Proase Cricket Sports Shoe",
        image: Sneaker9,
        price: 999
    },
    {
        id: 55,
        name : "spincart Mini Monster",
        image: toy1,
        price: 55
    },
    {
        id: 56,
        name : "Soft Bullet Shooting Pistol Toy Guns",
        image: toy2,
        price: 174
    },
    {
        id: 57,
        name : "TOYT R3 sports Ride on Bike",
        image: toy3,
        price: 11114
    },
    {
        id: 58,
        name : "Learn With Fun 2 in 1 Construction Trucks",
        image: toy4,
        price: 219
    },
    {
        id: 59,
        name : "Zenex store Monster truck toy",
        image: toy5,
        price: 55
    },
    {
        id: 60,
        name : "VikriDa Kids 49 Key Piano Keyboard",
        image: toy6,
        price: 1349
    },
    {
        id: 61,
        name : "Rajni Plastic Air Sports Mauser Gun Toy",
        image: toy7,
        price: 99
    },
    {
        id: 62,
        name : "Kirat Doctor Kit Toy",
        image: toy8,
        price: 194
    },
    {
        id: 63,
        name : "Educational Laptop Computer Toy",
        image: toy9,
        price: 1099
    },
    {
        id: 64,
        name : "Motorola Edge 40 Neo",
        image: Motorola,
        price: 22999
    },
    {
        id: 65,
        name : "Samsung Galaxy S21",
        image: Samsung,
        price: 30999
    },
    {
        id: 66,
        name : "Vivo T2 Pro 5G",
        image: Vivo,
        price: 24999
    },
    {
        id: 67,
        name : "Realme 11 Pro 5G ",
        image: Realme,
        price: 23999
    },
    {
        id: 68,
        name : "Nothing Phone",
        image: Nothing,
        price: 39999
    },
    {
        id: 69,
        name : "POCO M6 5G",
        image: Poco,
        price: 9999
    },
    {
        id: 70,
        name : "Redmi 12",
        image: Redmi,
        price: 9499
    },
    {
        id: 71,
        name : "Infinix HOT 30 5G",
        image: Infinix,
        price: 12999
    },
    {
        id: 72,
        name : "Apple iPhone 15",
        image: Apple,
        price: 65999
    },
    {
        id: 73,
        name: "Shoe",
        image: Shoes,
        price: 1599
    },
    {
        id: 74,
        name: "T-shirt",
        image: T_shirt,
        price: 449
    },
    {
        id: 75,
        name: "Refrigirator",
        image: Refrigirator,
        price: 22949
    },
    {
        id: 76,
        name: "Watch",
        image: Watch,
        price: 2499
    },
    {
        id: 77,
        name: "Washing Machine",
        image: Washing_Machine,
        price: 26549
    },
    {
        id: 78,
        name: "Pant",
        image: Pant,
        price: 899
    },
];

export function GetprodList(props) {
    const {id, image, name, price} =props.data;
    const { addToCart } = useContext(ShopContext);

    const handleAddToCart = () => {
        toast.success('Item added to cart!', { position: 'top-right', autoClose: 1500 });
      };

      const onButtonClick = () => {
        addToCart(id); 
        handleAddToCart();
      }
          return (
            <>
            <div className='productItems'>
              <div style={{backgroundImage: `url(${image})`}}></div>
              <p>{name}</p>
              <p>Price: &#x20B9; {price}</p>
            </div>
            <div className='btn'>
              <button className='buy'>Buy Now</button>
              <button onClick={() => onButtonClick()}>Add To Cart </button>
            </div>
            </>
            );
      }

export function Products() {
    return (
        <div className='products'>
            <div className='product-list'>
              <h1>Products</h1> <hr/>
                <div>              
                    {
                        productList.map((prodList) => {
                        return (
                            <div>
                                <GetprodList data={prodList} image={prodList.image} name={prodList.name} 
                                price={prodList.price}/>
                            </div>
                        );
                        })
                    }
                </div>           
            </div>
        </div>
      )
}

export default Products
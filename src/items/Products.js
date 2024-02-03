import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Pant from "../assets/Pant.jpg";
import Watch from "../assets/Watch.jpg";
import Washing_Machine from "../assets/Washing_Machine.jpg";
import T_shirt from "../assets/T_shirt.jpg";
import Shoes from "../assets/Shoes.jpg";
import Refrigirator from "../assets/Refrigirator.jpg";
import Keyboard from "../assets/Keyboard.jpg";
import Printer from "../assets/Printer.jpg";
import Camera from "../assets/Camera.jpg";
import Monitors from "../assets/Monitors.jpg";
import TV from "../assets/TV.jpg";
import Motorola from "../assets/Motorola.png";
import Samsung from "../assets/Samsung.png";
import Vivo from "../assets/Vivo.png";
import Realme from "../assets/Realme.png";
import Nothing from "../assets/Nothing.png";
import Poco from "../assets/Poco.png";
import Redmi from "../assets/Redmi.png";
import Infinix from "../assets/Infinix.png";
import Apple from "../assets/Apple.png";
import Mouse from "../assets/Mouse.jpg";
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
import Desktops from "../assets/Desktops.webp";
import Trimmer from "../assets/Trimmer.webp";
import Lenovo_Laptop from "../assets/Lenovo_Laptop.webp";
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
        name: "Shoe",
        image: Shoes,
        price: '1,599'
    },{
        id: 70,
        name : "Motorola Edge 40 Neo",
        image: Motorola,
        price: '22,999',
    },
    {
        id: 71,
        name : "Samsung Galaxy S21",
        image: Samsung,
        price: '30,999',
    },
    {
        id: 72,
        name : "Vivo T2 Pro 5G",
        image: Vivo,
        price: '24,999',
    },
    {
        id: 73,
        name : "Realme 11 Pro 5G ",
        image: Realme,
        price: '23,999',
    },
    {
        id: 74,
        name : "Nothing Phone",
        image: Nothing,
        price: '39,999',
    },
    {
        id: 75,
        name : "POCO M6 5G",
        image: Poco,
        price: '9,999',
    },
    {
        id: 76,
        name : "Redmi 12",
        image: Redmi,
        price: '9,499',
    },
    {
        id: 77,
        name : "Infinix HOT 30 5G",
        image: Infinix,
        price: '12,999',
    },
    {
        id: 78,
        name : "Apple iPhone 15",
        image: Apple,
        price: '65,999',
    },
    {
        id: 2,
        name: "Mouse",
        image: Mouse,
        price: '249'
    },
    {
        id: 3,
        name: "Monitors",
        image: Monitors,
        price: '24,949'
    },
    {
        id: 4,
        name: "TV",
        image: TV,
        price: '12,499'
    },
    {
        id: 5,
        name: "T-shirt",
        image: T_shirt,
        price: '449'
    },
    {
        id: 6,
        name: "Refrigirator",
        image: Refrigirator,
        price: '22,949'
    },
    {
        id: 7,
        name: "KeyBoard",
        image: Keyboard,
        price: '1,149'
    },
    {
        id: 8,
        name: "Printer",
        image: Printer,
        price: '20,520'
    },
    {
        id: 9,
        name: "Camera",
        image: Camera,
        price: '44,949'
    },
    {
        id: 10,
        name: "Watch",
        image: Watch,
        price: '2,499'
    },
    {
        id: 11,
        name: "Washing Machine",
        image: Washing_Machine,
        price: '26,549'
    },
    {
        id: 12,
        name: "Pant",
        image: Pant,
        price: '899'
    },
    {
        id: 13,
        name : "OnePlus U1S 164 cm (65 inch) Ultra HD",
        image: OnePlus_Tv,
        price: '47,999',
    },
    {
        id: 14,
        name : "LG 6.5 kg Fully Automatic Front Load Washing Machine",
        image: Washing,
        price: '24,990',
    },
    {
        id: 15,
        name : "LUMINOUS Centaur 400 mm 3 Blade Table Fan",
        image: Fan,
        price: '1,569',
    },
    {
        id: 16,
        name : "BAJAJ 410570 GX 1 500 W Juicer Mixer Grinder (3 Jars, Blue)",
        image: Grinder,
        price: '2,299',
    },
    {
        id: 17,
        name : "Whirlpool 308 L Frost Free Double Door 3 Star Refrigerator",
        image: frigde,
        price: '32,990',
    },
    {
        id: 18,
        name : "Panasonic 1 Ton 3 Star Split Inverter AC with Wi-fi Connect - White",
        image: Panasonic_Ac,
        price: '32,990',
    },
    {
        id: 19,
        name : "LIVPURE + Minerals Water Purifier",
        image: Purifier,
        price: '8,999',
    },
    {
        id: 20,
        name : "PHILIPS Vacuum Cleaner with Suction,Turbo Brush",
        image: Vacuum_Cleaner,
        price: '9,199',
    },
    {
        id: 21,
        name : "Panasonic 23 L Convection Microwave Oven",
        image: Microwave,
        price: '10,290',
    },
    {
        id: 22,
        name : "Small Cabin Suitcase (57 cm)",
        image: Suitcase,
        price: '1,199',
    },
    {
        id: 23,
        name : "GTIER TREKKING",
        image: Trekking,
        price: '528',
    },
    {
        id: 24,
        name : "Wildcraft Flip Ruck",
        image: Wildcraft,
        price: '1,379',
    },
    {
        id: 25,
        name : "WROGN 70 L Strolley Duffel Bag",
        image: Duffel,
        price: '549',
    },
    {
        id: 26,
        name : "Urban Travel Luggage 70 L Strolley Duffel Bag",
        image: Travel_Luggage,
        price: '399',
    },
    {
        id: 27,
        name : "Fast look Expandable Travel Bag",
        image: Travel_Bag,
        price: '699',
    },
    {
        id: 28,
        name : "Kamiliant by American Tourister",
        image: Tourister,
        price: '1,649',
    },
    {
        id: 29,
        name : "JIRFASHION Mountain Rucksack bag",
        image: Mountain,
        price: '415',
    },
    {
        id: 30,
        name : "Wildcraft 40 L Hand Duffel",
        image: Hand_Duffel,
        price: '889',
    },
    {
        id: 31,
        name : "ASUS Gaming & Editing Desktops Core i5 Core i5",
        image: Desktops,
        price: '35,590',
    },
    {
        id: 32,
        name : "PHILIPS BT3101/15 Trimmer",
        image: Trimmer,
        price: '1,049',
    },
    {
        id: 33,
        name : "Lenovo IdeaPad Slim 3 Intel Core i5",
        image: Lenovo_Laptop,
        price: '30,990',
    },
    {
        id: 34,
        name : "TIGERSNAKE Men Regular Fit",
        image: Men_Regular,
        price: '339',
    },
    {
        id: 35,
        name : "James Carson Men Regular Fit",
        image: Carson,
        price: '424',
    },
    {
        id: 36,
        name : "Shree kuberji fashion Men Printed Cotton Blend",
        image: kuberji,
        price: '799',
    },
    {
        id: 37,
        name : "SEAKART Women Floral",
        image: Kurti,
        price: '510',
    },
    {
        id: 38,
        name : "KRIVITY Embroidered Saree",
        image: Saree,
        price: '361',
    },
    {
        id: 39,
        name : "XRV Beach Wear Regular",
        image: Regular_wear,
        price: '835',
    },
    {
        id: 40,
        name : "Mars Infiniti Boys & Girls Casual",
        image: Casual,
        price: '401',
    },
    {
        id: 41,
        name : "EM DRESSES Baby Girls Casual",
        image: Girls_Casual,
        price: '151',
    },
    {
        id: 42,
        name : "Heatonn Top - Pyjama Set Thermal",
        image: Thermal,
        price: '692',
    },{
        id: 43,
        name : "ShopCart Engineered Wood Queen Bed",
        image: ShopCart_Bed,
        price: '9,249',
    },
    {
        id: 44,
        name : "Take Interio Engineered Wood Queen Bed",
        image: Take_Interio,
        price: '9,299',
    },
    {
        id: 45,
        name : "StellWell BUNK LOFT BED",
        image: Bunk_Loft,
        price: '11,321',
    },
    {
        id: 46,
        name : "Bharat Lifestyle Deno Fabric 3 Seater Sofa",
        image: three_Seater,
        price: '11,749',
    },
    {
        id: 47,
        name : "Wakeup India Hazy Premium Fabric Sofa",
        image: Wakeup_Sofa,
        price: '15,928',
    },
    {
        id: 48,
        name : "WESTIDO Berger Fabric 6 Seater Sofa",
        image: six_Seater,
        price: '17,925',
    },
    {
        id: 49,
        name : "Wakeup India Snugy Sofa 2 Seater, Sofa Set",
        image: two_Seater,
        price: '11,359',
    },
    {
        id: 50,
        name : "Purple Furniture Elite Wood Computer Desk",
        image: Computer_Desk,
        price: '12,999',
    },
    {
        id: 51,
        name : "Upmarkt Pro Ergonomic Gaming Chair",
        image: Gaming_Chair,
        price: '10,449',
    },{
        id: 52,
        name : "ATOM Gansta1 Sneaker",
        image: Sneaker1,
        price: '1,339',
    },
    {
        id: 53,
        name : "CAMPUS NORTH PLUS",
        image: Sneaker2,
        price: '1,215',
    },
    {
        id: 54,
        name : "RebelBe Outdoor Casual",
        image: Sneaker3,
        price: '599',
    },
    {
        id: 55,
        name : "Aadi Synthetic",
        image: Sneaker4,
        price: '434',
    },
    {
        id: 56,
        name : "BRUTON Lite Sports Shoe",
        image: Sneaker5,
        price: '514',
    },
    {
        id: 57,
        name : "asian Newton-09 White",
        image: Sneaker6,
        price: '648',
    },
    {
        id: 58,
        name : "action Action Athleo",
        image: Sneaker7,
        price: '1,119',
    },
    {
        id: 59,
        name : "JQR Signature Sports",
        image: Sneaker8,
        price: '1,270',
    },
    {
        id: 60,
        name : "Proase Cricket Sports Shoe",
        image: Sneaker9,
        price: '999',
    },
    {
        id: 61,
        name : "spincart Mini Monster",
        image: toy1,
        price: '55',
    },
    {
        id: 62,
        name : "Soft Bullet Shooting Pistol Toy Guns",
        image: toy2,
        price: '174',
    },
    {
        id: 63,
        name : "TOYT R3 sports Ride on Bike",
        image: toy3,
        price: '11,114',
    },
    {
        id: 64,
        name : "Learn With Fun 2 in 1 Construction Trucks",
        image: toy4,
        price: '219',
    },
    {
        id: 65,
        name : "Zenex store Monster truck toy",
        image: toy5,
        price: '55',
    },
    {
        id: 66,
        name : "VikriDa Kids 49 Key Piano Keyboard",
        image: toy6,
        price: '1,349',
    },
    {
        id: 67,
        name : "Rajni Plastic Air Sports Mauser Gun Toy",
        image: toy7,
        price: '99',
    },
    {
        id: 68,
        name : "Kirat Doctor Kit Toy",
        image: toy8,
        price: '194',
    },
    {
        id: 69,
        name : "Educational Laptop Computer Toy",
        image: toy9,
        price: '1,099',
    }
];

function GetprodList(props) {
    const {id, image, name, price} =props.data;
    const { addToCart } = useContext(ShopContext);

    const handleAddToCart = () => {
        toast.success('Item added to cart!', { position: 'top-right', autoClose: 3000 });
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
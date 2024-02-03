import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Mobiles from './items/Mobiles';
import Fashion from './items/Fashion';
import Electronics from './items/Electronics';
import Appliances from './items/Appliances';
import Shoes from './items/Shoes';
import Toys from './items/Toys';
import Furniture from './items/Furniture';
import Bags from './items/Bags';
import ShopContextProvider from './context/ShopContextProvider';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
     <ToastContainer />
      <ShopContextProvider>
        <Router>
          <Navbar />  
            <Routes>
              <Route path='/' exact Component={Home}/>
              <Route path='/account' element={<Account />}/>
              <Route path='/cart' element={<Cart />}/>
              <Route path='/product' element={<Product />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/contact' element={<Contact />}/>
              <Route path='/privacy' element={<Privacy />}/>
              <Route path='/mobiles' element={<Mobiles />}/>
              <Route path='/fashion' element={<Fashion />}/>
              <Route path='/electronics' element={<Electronics />}/>
              <Route path='/appliances' element={<Appliances />}/>
              <Route path='/shoes' element={<Shoes />}/>
              <Route path='/toys' element={<Toys />}/>
              <Route path='/furniture' element={<Furniture />}/>
              <Route path='/bags' element={<Bags />}/>
            </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;

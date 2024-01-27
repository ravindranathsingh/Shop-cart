import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />  
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/account' element={<Account />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/orders' element={<Orders />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/privacy' element={<Privacy />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

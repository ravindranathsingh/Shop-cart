import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Footer from './components/Footer';

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
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

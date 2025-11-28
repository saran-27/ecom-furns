
import './App.css';
import Home from './home/home';
import Login from './Login/Login';
import About from './About/About';
import Checkout from './Checkout/Checkout'
import Contact from './Contact/Contact';
import Products from './Products/Products';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
   <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;

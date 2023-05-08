import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Products" element={<Products/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

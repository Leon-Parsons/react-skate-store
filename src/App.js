import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';

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
      </BrowserRouter>
    </div>
  );
}

export default App;

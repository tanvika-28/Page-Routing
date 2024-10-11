
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer';
import Header from './Pages/Header';
import Navbar from './Pages/Navbar';
import About from './Pages/Navigation/About';
import Home from './Pages/Navigation/Home';
import Products from './Pages/Navigation/Products';
import  Services from './Pages/Navigation/Services';
import Contact from './Pages/Navigation/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Products" element={<Products/>}></Route>
        <Route path="/Services" element={<Services/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>

      
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;

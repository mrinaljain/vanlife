
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About/About';
import Vans from './pages/Vans/Vans';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import VanDetail from './pages/VanDetail/VanDetail';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/vans' element={<Vans />}></Route>
        <Route path='/vans/:id' element={<VanDetail />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;


import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About/About';
import Vans from './pages/Vans/Vans';
import Home from './pages/Home/Home';
import VanDetail from './pages/Vans/VanDetail';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostLayout from './components/Hostlayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=':id' element={<VanDetail />} />
          </Route>
          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

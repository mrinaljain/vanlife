import { Link } from "react-router-dom";
function Header() {
   return (
      <header>
         <Link className="site-logo" to="/">
            <img className='App-logo' alt="" src='https://i0.wp.com/www.genericvan.life/wp-content/uploads/2017/11/GenericVanLife-Logo.png' />
         </Link>
         <nav className='appHeader'>
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
         </nav>
      </header>
   );
}

export default Header;
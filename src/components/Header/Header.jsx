import { Link } from "react-router-dom";
function Header() {
   return (
      <header>
         <nav className='appHeader'>
            <Link to="/">
               <img className='App-logo' alt="" src='https://i0.wp.com/www.genericvan.life/wp-content/uploads/2017/11/GenericVanLife-Logo.png' />
            </Link>
            <ul className='navLinks'>
               <li>
                  <Link to="/about">About</Link>
               </li>
               <li>
                  <Link to="/vans">Vans</Link>
               </li>
            </ul>
         </nav>
      </header>
   );
}

export default Header;
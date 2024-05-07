import { Link, NavLink } from "react-router-dom";
function Header() {
   return (
      <header>
         <Link className="site-logo" to="/">
            <img className='App-logo' alt="" src='https://i0.wp.com/www.genericvan.life/wp-content/uploads/2017/11/GenericVanLife-Logo.png' />
         </Link>
         <nav className='appHeader'>
            <NavLink
               to="/host"
               className={(obj) => { return obj.isActive ? "active" : "" }}
            >Host
            </NavLink>
            <NavLink
               to="/about"
               className={(obj) => { return obj.isActive ? "active" : "" }}>
               About
            </NavLink>
            <NavLink to="/vans"
               className={(obj) => { return obj.isActive ? "active" : "" }}>
               Vans
            </NavLink>
         </nav>
      </header>
   );
}

export default Header;
import React from "react";
import { Outlet, NavLink } from "react-router-dom";
function HostLayout() {
   return (<>
      <header>
         <nav className="appHeader">
            <NavLink
               to="."
               end
               className={({ isActive }) => isActive ? "active" : ""}
            > Dashboard
            </NavLink>
            <NavLink
               to="income"
               className={({ isActive }) => isActive ? "active" : ""}
            > Income
            </NavLink>
            <NavLink
               to="vans"
               className={({ isActive }) => isActive ? "active" : ""}
            > Vans
            </NavLink>
            <NavLink
               to="reviews"
               className={({ isActive }) => isActive ? "active" : ""}
            > Reviews
            </NavLink>
         </nav>
      </header>
      <Outlet />
   </>);
}

export default HostLayout;
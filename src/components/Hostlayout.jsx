import React from "react";
import { Link, Outlet } from "react-router-dom";
function HostLayout() {
   return (<>
      <header>
         <nav>
            <Link to="/host" > Dashboard</Link>
            <Link to="/host/reviews" > Reviews</Link>
            <Link to="/host/income" > Income</Link>
         </nav>
      </header>
      <Outlet />
   </>);
}

export default HostLayout;
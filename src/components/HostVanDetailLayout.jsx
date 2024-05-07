import React from "react";
import { Link, useParams, Outlet, NavLink } from "react-router-dom";
function HostVanDetailLayout() {
   const { id } = useParams()
   const [currentVan, setCurrentVan] = React.useState(null)

   React.useEffect(() => {
      fetch(`/api/host/vans/${id}`)
         .then(res => res.json())
         .then(data => setCurrentVan(data.vans))
   }, [id])

   if (!currentVan) {
      return <h1>Loading...</h1>
   }

   return (
      <>
         <section>
            <Link
               to=".."
               relative="path"
               className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
               <div className="host-van-detail">
                  <img src={currentVan.imageUrl} alt="some meaningful"/>
                  <div className="host-van-detail-info-text">
                     <i
                        className={`van-type van-type-${currentVan.type}`}
                     >
                        {currentVan.type}
                     </i>
                     <h3>{currentVan.name}</h3>
                     <h4>${currentVan.price}/day</h4>
                  </div>
               </div>
               <nav className="host-van-detail-nav">
                  <NavLink
                     to="."
                     end
                     className={(obj) => { return obj.isActive ? "active" : "" }}
                  >Details</NavLink>
                  <NavLink
                     to="pricing"
                     className={(obj) => { return obj.isActive ? "active" : "" }}
                  >Pricing</NavLink>
                  <NavLink
                     to="photos"
                     className={(obj) => { return obj.isActive ? "active" : "" }}
                  >Photos</NavLink>
               </nav>
               <Outlet context={[currentVan, setCurrentVan]} />
            </div>
            
         </section>
         
         

      </>
   );
}

export default HostVanDetailLayout;
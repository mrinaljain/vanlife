import { React, useEffect , useState } from "react";
import Van from "../../components/Van/Van"
function Vans() {
   const [vans, setVans] = useState([]);
   
   useEffect(function () {
      fetch("/api/vans")
         .then(response => response.json())
         .then(data => {
            setVans(data.vans); 
         });
   }, []);
   const vanElements = vans.map(function (van) { return <Van van={van} />});
   return (
      <div className="van-list-container">
         <h1>Explore our van options</h1>
         <div className="van-list">
            {vanElements}
         </div>
      </div>
   );
}

export default Vans;
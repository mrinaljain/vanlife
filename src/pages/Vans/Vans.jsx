import { React, useEffect, useState } from "react";
import Van from "../../components/Van/Van"
import "./Vans.css"
import { useSearchParams } from "react-router-dom";
function Vans() {
   const [vans, setVans] = useState([]);
   const [searchParams, setSearchParams] = useSearchParams();
   let typeFilter = searchParams.get("type");
   useEffect(function () {
      fetch("/api/vans")
         .then(response => response.json())
         .then(data => {
            setVans(data.vans);
         });
   }, []);
   // Checking if filter is there or not
   const displayedVans = typeFilter
      ? vans.filter(van => van.type === typeFilter)
      : vans
   const vanElements = displayedVans.map(van => <Van van={van} />);

   // Changing UrL on click with querryparams
   function handleFilterChange(key, value) {
      setSearchParams(prevParams => {
         if (value != null) {
            prevParams.set(key, value)
         }
         else {
            prevParams.delete(key)
         }
         return prevParams;
      });
   }
   return (
      <div className="van-list-container">
         <h1>Explore our van options</h1>
         <div className="van-list-filter-buttons">
            <button
               onClick={() => handleFilterChange("type", "simple")}
               className={
                  `van-type simple 
                        ${typeFilter === "simple" ? "selected" : ""}`
               }
            >Simple</button>
            <button
               onClick={() => handleFilterChange("type", "luxury")}
               className={
                  `van-type simple 
                        ${typeFilter === "luxury" ? "selected" : ""}`
               }
            >Luxury</button>
            <button
               onClick={() => handleFilterChange("type", "rugged")}
               className={
                  `van-type simple 
                        ${typeFilter === "rugged" ? "selected" : ""}`
               }
            >Rugged</button>
            {typeFilter ?
               (<button
                  onClick={() => handleFilterChange("type", null)}
                  className="van-type clear-filters"
               >Clear filter</button>) : null
            }

         </div>
         <div className="van-list">
            {vanElements}
         </div>
      </div>
   );
}

export default Vans;
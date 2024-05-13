import React  from "react";
import { Link, useParams } from "react-router-dom";

function VanDetail(props) {
   const params = useParams();
   const [van , setVan] = React.useState({});

   React.useEffect(function(){
      fetch(`/api/vans/${params.id}`)
      .then(response => response.json())
      .then(data => {
         console.log(data);
         setVan(data.vans);
      });
   }, [params.id]);

   return (
      <div className="van-detail-container">
         <Link
            to=".."
            relative="path"
            className="back-button"
         >&larr; <span>Back to all vans</span></Link>
         {van ? (
            <div className="van-detail">
               <img src={van.imageUrl} alt="neme"/>
               <i className={`van-type ${van.type} selected`}>{van.type}</i>
               <h2>{van.name}</h2>
               <p className="van-price"><span>${van.price}</span>/day</p>
               <p>{van.description}</p>
               <button className="link-button">Rent this van</button>
            </div>
         ) : <h2>Loading...</h2>}
      </div>
   );
}
export default VanDetail;
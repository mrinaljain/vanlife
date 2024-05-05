import { React } from "react";
import { Link } from "react-router-dom";

function Van(props) {
   const {id, imageUrl, name, price, type } = props.van;
   return (
         <div key={id} className="van-tile">
         <Link to={`/vans/${id}`} aria-label="Speak this">
            <img src={imageUrl} alt={name}/>
            <div className="van-info">
               <p>{name}</p>
               <p>${price}<span>/day</span></p>
            </div>
            <i className={`van-type ${type} selected`}>{type}</i>
         </Link>
         </div>
   );
}

export default Van;
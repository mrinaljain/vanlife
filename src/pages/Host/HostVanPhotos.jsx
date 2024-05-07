import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanPhotos() {
   const [currentVan] = useOutletContext();
   return (
      <img src={currentVan.imageUrl} className="host-van-detail-image" alt="van on beach"/>
   );
}

export default HostVanPhotos;
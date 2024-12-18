'use client';
import dynamic from 'next/dynamic';
const NITTrichyMap = dynamic(() => import("../nittmap/NITTMap"), { ssr: false });
import { useState } from 'react';

const Map = () => {
  const [showMap, setShowMap] = useState(false);

  const btnHandler = () => {
    if(showMap)
      setShowMap(false);
    else
      setShowMap(true)
  };

  return (
    <>
      <button onClick={btnHandler}>Map</button>
      {showMap && <NITTrichyMap />}
    </>
  );
}

export default Map;

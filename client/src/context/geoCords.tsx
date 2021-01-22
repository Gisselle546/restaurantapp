import React, { createContext, useEffect } from 'react';
import { useState } from 'react';

export const MapContext = createContext<{
    geocords:google.maps.LatLngLiteral,
    setGeocords:any
}>({
    geocords:{
        lat:0,
        lng:0
    },
    setGeocords:()=>{}
   
});


export const MapProvider = (props: { children: React.ReactNode; }) => {
  const [geocords, setGeocords] = useState({lat:42.3265,lng:-122.8756});

  useEffect(() => {
    localStorage.setItem(
      "location",
      JSON.stringify(geocords)
    );
    
  });
    



  return (
    <MapContext.Provider value={{geocords, setGeocords}}>
      {props.children}
    </MapContext.Provider>
  );
};
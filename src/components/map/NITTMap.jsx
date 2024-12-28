"use client";

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

const NITTrichyMap = () => {
  useEffect(() => {
    const map = L.map("map").setView([10.760652939498392, 78.814644951214], 17);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    const locations = [
      { name: "Octagon", coords: [10.760652939498392, 78.814644951214] },
      { name: "Admin Block", coords: [10.758992420208626, 78.81321606867355] },
      {
        name: "Central Library",
        coords: [10.757234763819078, 78.81823008736052],
      },
      { name: "Lassi Shop", coords: [10.761874944125786, 78.81462252518216] },
      {
        name: "Basketball Court",
        coords: [10.762694930278185, 78.81462147241709],
      },
      { name: "Barn Hall", coords: [10.75935716831512, 78.81330713747782] },
      {
        name: "Lecture Hall Complex",
        coords: [10.761066735566802, 78.81418222136351],
      },
      { name: "ThirdI Lab", coords: [10.761627553975291, 78.81454740190756] },
      {
        name: "Department Of Computer Applications",
        coords: [10.759852491629992, 78.81778024924118],
      },
      { name: "2K Market", coords: [10.761253043932214, 78.81903808707331] },
      { name: "Lyceum", coords: [10.759755139971304, 78.81722256124189] },
      { name: "Tasty Chat Khazana", coords: [10.758, 78.817] },
      { name: "GJCH", coords: [10.761614235607802, 78.81189165601184] },
      { name: "MIG Plaza", coords: [10.75966650181768, 78.80991497981377] },
      { name: "Mega Mess", coords: [10.766062107330727, 78.8152904454767] },
      {
        name: "Diamond Hostel",
        coords: [10.763505023095314, 78.81442345517546],
      },
      {
        name: "Emerald Hostel",
        coords: [10.763473404619923, 78.81638255989726],
      },
      { name: "Jade Hostel", coords: [10.763526104968138, 78.81784704565673] },
      { name: "Pearl Hostel", coords: [10.764456526110454, 78.81534369180822] },
      { name: "Ganesh Temple", coords: [10.755404977294964, 78.8206182091696] },
    ];

    locations.forEach((location) => {
      L.marker(location.coords).addTo(map).bindPopup(`<b>${location.name}</b>`);
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="map"
      className="h-[500px] w-[500px] border-solid border-2 border-yellow-500 overflow-hidden"
    />
  );
};
export default NITTrichyMap;

'use client';

import { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
});

const NITTrichyMap = () => {
    useEffect(() => {
            const map = L.map('map').setView([10.758, 78.813], 16)

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(map)

            const locations = [
                { name: "Octagon (Center)", coords: [10.758, 78.813] },
                { name: "Admin Block", coords: [10.759, 78.814] },
                { name: "Library", coords: [10.762, 78.814] },
                { name: "Orion Boys Hostel", coords: [10.756, 78.812] },
                { name: "Leo Boys Hostel", coords: [10.757, 78.813] },
                { name: "Aquarius Boys Hostel", coords: [10.755, 78.814] },
                { name: "Opal Girls Hostel", coords: [10.758, 78.810] },
                { name: "Mega Mess 1", coords: [10.758, 78.811] },
                { name: "Mega Mess 2", coords: [10.759, 78.811] },
                { name: "Silver Jubilee Building", coords: [10.761, 78.813] },
                { name: "Barn Hall", coords: [10.760, 78.813] },
                { name: "Lecture Hall Complex", coords: [10.759, 78.816] },
                { name: "MCA Lab (in front of Lyceum)", coords: [10.760, 78.816] },
                { name: "ThirdI Lab (in front of Lecture Hall)", coords: [10.759, 78.815] },
                { name: "Computer Science Department", coords: [10.761, 78.814] },
                { name: "EEE Department", coords: [10.760, 78.815] },
                { name: "Mechanical Department", coords: [10.759, 78.817] },
                { name: "Chemical Engineering Department", coords: [10.758, 78.817] }
            ]            

            locations.forEach(location => {
                L.marker(location.coords).addTo(map)
                    .bindPopup(`<b>${location.name}</b>`)
            })

            return () => {
                map.remove()
            }
        }
    , [])

    return <div id="map" className="h-[500px] w-[500px] border-solid border-2 border-yellow-500" />
}

export default NITTrichyMap;

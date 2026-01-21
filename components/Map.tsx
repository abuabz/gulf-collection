"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { useEffect } from "react"

// Fix for default marker icon not showing
const iconRequest = {
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
}

const customIcon = L.icon({
    iconUrl: iconRequest.iconUrl,
    iconRetinaUrl: iconRequest.iconRetinaUrl,
    shadowUrl: iconRequest.shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
})

export default function Map() {
    // Coordinates for branches
    const locations = [
        {
            name: "Kottappadi Branch",
            position: [11.073, 76.074] as [number, number],
            address: "Downhill, Kottappadi, Malappuram",
        },
        {
            name: "Kizhakkethala Branch",
            position: [10.976, 76.225] as [number, number],
            address: "Kizhakkethala, Perinthalmanna",
        },
    ]

    // Center the map between the points roughly
    const centerPosition = [11.02, 76.15] as [number, number]

    return (
        <MapContainer center={centerPosition} zoom={10} style={{ height: "100%", width: "100%" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map((loc) => (
                <Marker key={loc.name} position={loc.position} icon={customIcon}>
                    <Popup>
                        <div className="text-center">
                            <h3 className="font-bold text-base">{loc.name}</h3>
                            <p className="text-sm">{loc.address}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}

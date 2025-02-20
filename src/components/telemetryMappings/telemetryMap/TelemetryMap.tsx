import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './telemetryMap.css'

const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
})

const TelemetryMap = () => {
    const [position, setPosition] = useState<[number, number]>([51.505, -0.09])

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition(prev => [
                prev[0] + (Math.random() - 0.5) * 0.01,
                prev[1] + (Math.random() - 0.5) * 0.01,
            ])
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className='map-container'>
            <h3>Live Telemetry Tracking</h3>
            <MapContainer center={position} zoom={13} className='map'>
                <TileLayer
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
                />
                <Marker position={position} icon={customIcon}>
                    <Popup>
                        Live Telemetry Location: {position[0].toFixed(5)},{' '}
                        {position[1].toFixed(5)}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default TelemetryMap

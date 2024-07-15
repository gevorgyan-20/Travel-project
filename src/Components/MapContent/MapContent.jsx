import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const MapContent = () => {
    const position = [40.173306, 44.525243]
  
    return (
        <div className='map-container' style={{width: '55%', height: '400px', margin: '0 auto', overflow: 'hidden'}}>
        <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        {/* <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup> */}
      </Marker>
    </MapContainer>
    </div>
  )
}

export default MapContent
import React, { useEffect, useState } from 'react'

export const MapSample = () => {
  const [, setMap] = useState(null)
  useEffect(() => {
    setMap(
      new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 35.675069, lng: 139.763328 },
        zoom: 15,
      }),
    )
  }, [])
  console.log('a')
  return <div style={{ width: '100%', height: 640 }} id="map" />
}

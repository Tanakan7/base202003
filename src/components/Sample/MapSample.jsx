import React, { useEffect, useState } from 'react'

const markerClick = (e, map) => {
  console.log(e, map)
}

export const MapSample = () => {
  const [map, setMap] = useState(null)
  useEffect(() => {
    console.log('useEffect Map')
    setMap(
      new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 35.675069, lng: 139.763328 },
        zoom: 15,
        // maxZoom:
        // minZoom:
        streetViewControl: false,
        fullscreenControl: false,
        mapTypeControl: false,
        clickableIcons: false,
      }),
    )
  }, [])

  useEffect(() => {
    console.log('useEffect marker')
    if (map) {
      const marker = new window.google.maps.Marker({
        // 35.6761 139.768382
        position: { lat: 35.677699, lng: 139.761735 },
        map,
        title: 'Hello Istanbul!',
      })

      const handleDragEnd = () => {
        console.log('移動した', map.center.lat(), map.center.lng())
      }
      map.addListener('dragend', handleDragEnd)

      marker.addListener('click', e => {
        markerClick(e, map)
      })
    }
  }, [map])
  console.log('再評価(MapSample.jsx')
  return <div style={{ width: '100%', height: 640 }} id="map" />
}

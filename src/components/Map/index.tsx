import { useRouter } from 'next/router'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

import * as S from './style'

type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: Place[]
}

const Map = ({ places }: MapProps) => {
  const router = useRouter()

  return (
    <S.MapWrapper>
      <MapContainer
        center={[-27.6147, -48.4579]}
        zoom={11}
        minZoom={3}
        style={{ height: '100%', width: '100%' }}
        maxBounds={[
          [-180, 180],
          [180, -180]
        ]}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {places?.map(({ id, slug, name, location }) => {
          const { latitude, longitude } = location

          return (
            <Marker
              key={`place-${id}`}
              position={[latitude, longitude]}
              title={name}
              eventHandlers={{
                click: () => {
                  router.push(`/place/${slug}`)
                }
              }}
            ></Marker>
          )
        })}
      </MapContainer>
    </S.MapWrapper>
  )
}

export default Map

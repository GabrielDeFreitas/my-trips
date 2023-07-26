import dynamic from 'next/dynamic'
import Main from 'components/Main'

const Map = dynamic(() => import('components/Main/Map'), { ssr: false })

const Index = () => (
  <>
    <Main />
    <Map
      places={[
        {
          id: '2',
          name: 'Reykjavik',
          slug: 'reykjavik',
          location: {
            latitude: 45,
            longitude: -10
          }
        }
      ]}
    />
  </>
)

export default Index

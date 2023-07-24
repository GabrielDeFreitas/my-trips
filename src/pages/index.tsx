import dynamic from 'next/dynamic'
import Main from 'components/Main'

const Map = dynamic(() => import('components/Main/Map'), { ssr: false })

const Index = () => (
  <>
    <Main />
    <Map />
  </>
)

export default Index

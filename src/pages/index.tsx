import dynamic from 'next/dynamic'
import Main from 'components/Main'
import LinkWrapper from 'components/LinkWrapper'

const Map = dynamic(() => import('components/Main/Map'), { ssr: false })

const Index = () => (
  <>
    <LinkWrapper />
    <Main />
    <Map />
  </>
)

export default Index

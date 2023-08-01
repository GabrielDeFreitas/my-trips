import client from 'graphql/client'
import { GET_PAGES } from 'graphql/queries'
import { useRouter } from 'next/router'
import PageTemplate from 'templates/Pages'

export default function AboutPage() {
  const router = useRouter

  if (router.isFallback) return null

  return <PageTemplate />
}

export async function getStaticPaths() {
  const { pages } = client.request(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

/*export const getStaticProps = async () => {
  const { pages } = client.request(GET_PAGES)

  console.log(pages)

  return {
    props: {}
  }
}
*/
// getStaticPaths => serve para gerar as urls em build time /about, /trip/florianopolis
// getStaticProps => serve para buscar dados da pagina (props) - build time - estatico
// getServerSideProps => serve para buscar dados da pagina ( props) - runtime - toda requisicao (bundle fica no server)

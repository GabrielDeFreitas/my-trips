import client from 'graphql/client'
import { GetPageBySlugQuery, PagesQuery } from 'graphql/generated/graphql'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import PageTemplate, { PageTemplateProps } from 'templates/Pages'

export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter()

  // Retornar um loading, qualquer coisa enquanto está sendo criado
  if (router.isFallback) return <div>Loading...</div>

  return <PageTemplate heading={heading} body={body} />
}

export async function getStaticPaths() {
  const { pages } = await client.request<PagesQuery>(GET_PAGES, { first: 3 })

  if (!pages) {
    return { paths: [], fallback: true }
  }

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!page) return { notFound: true }

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}

// getStaticPaths => serve para gerar as urls em build time /about, /trip/florianopolis
// getStaticProps => serve para buscar dados da pagina (props) - build time - estatico
// getServerSideProps => serve para buscar dados da pagina ( props) - runtime - toda requisicao (bundle fica no server)

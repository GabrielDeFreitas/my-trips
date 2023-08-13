import { NextSeo } from 'next-seo'
import { format } from 'date-fns'

import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'
import Image from 'next/image'

import * as S from './style'
import { useRouter } from 'next/router'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlacesTemplateProps = {
  place: {
    slug: string
    name: string
    description?: {
      html: string
      text: string
    }
    gallery: ImageProps[]
    createdAt: number
    createdBy: {
      name: string
      picture: string
    }
  }
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} - My Trips`}
        description={
          place.description?.text ||
          'A simple project to show in a map the places that I went and show more informations and photos when clicked.'
        }
        canonical="https://mytrips.com"
        openGraph={{
          url: 'https://mytrips.com',
          title: `${place.name} - My Trips`,
          description:
            place.description?.text ||
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`
            }
          ]
        }}
      />
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.AuthorWrapper>
            <Image
              src={place.createdBy.picture}
              alt="teste"
              width="44"
              height="44"
              quality={75}
            />
            <S.Content>
              <S.Name>{place.createdBy.name}</S.Name>
              <S.PostDate>
                {format(new Date(place.createdAt), "dd/MM/yyyy 'às' HH:mm")}
              </S.PostDate>
            </S.Content>
          </S.AuthorWrapper>
          <S.Heading>{place.name}</S.Heading>
          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />
          <S.Gallery>
            {place.gallery.map((image, index) => (
              <>
                <Image
                  key={`photo-${index}`}
                  src={image.url}
                  alt={place.name}
                  width={image.width}
                  height={image.height}
                  quality={75}
                />
              </>
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

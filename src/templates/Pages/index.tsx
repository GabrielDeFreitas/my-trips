import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import { GithubSquare } from '@styled-icons/fa-brands/GithubSquare'
import { TwitterSquare } from '@styled-icons/fa-brands/TwitterSquare'
import { Linkedin } from '@styled-icons/fa-brands/Linkedin'
import * as S from './styles'
import LinkWrapper from 'components/LinkWrapper'
import LinkBasic from 'components/LinkBasic'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <S.Wrapper>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>
    <S.Content>
      <S.Card>
        <h1>{heading}</h1>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </S.Card>
      <S.Card>
        <h2>Fique à vontade para me contatar</h2>
        <S.List>
          <li>
            <LinkBasic
              href="https://github.com/GabrielDeFreitas"
              ariaLabel="Github"
            >
              <GithubSquare size={50} />
            </LinkBasic>
          </li>
          <li>
            <LinkBasic
              href="https://www.linkedin.com/in/gabrielfreitas21/"
              ariaLabel="Linkedin"
            >
              <Linkedin size={50} />
            </LinkBasic>
          </li>
          <li>
            <LinkBasic
              href="https://twitter.com/refri_comfrango"
              ariaLabel="Twitter"
            >
              <TwitterSquare size={50} />
            </LinkBasic>
          </li>
        </S.List>
      </S.Card>
    </S.Content>
  </S.Wrapper>
)

export default PageTemplate

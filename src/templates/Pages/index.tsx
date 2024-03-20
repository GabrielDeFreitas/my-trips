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
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>
      <h1>{heading}</h1>
      <div>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </div>
      <h2>Fique à vontade para me contatar.</h2>
      <S.List>
        <li>
          <LinkBasic href="/" ariaLabel="Github">
            <GithubSquare size={50} />
          </LinkBasic>
        </li>
        <li>
          <LinkBasic href="/" ariaLabel="Linkedin">
            <Linkedin size={50} />
          </LinkBasic>
        </li>
        <li>
          <LinkBasic href="/" ariaLabel="Twitter">
            <TwitterSquare size={50} />
          </LinkBasic>
        </li>
      </S.List>
    </S.Content>
  </S.Wrapper>
)

export default PageTemplate

import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import * as S from './styles'
import LinkWrapper from 'components/LinkWrapper'

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
    </S.Content>
  </S.Wrapper>
)

export default PageTemplate

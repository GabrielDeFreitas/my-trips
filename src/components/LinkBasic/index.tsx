import Link from 'next/link'

import * as S from './styles'

type LinkBasicProps = {
  href: string
  ariaLabel: string
  children: React.ReactNode
}

const LinkBasic = ({ href, ariaLabel, children }: LinkBasicProps) => (
  <S.Wrapper>
    <Link href={href} aria-label={ariaLabel}>
      {children}
    </Link>
  </S.Wrapper>
)

export default LinkBasic

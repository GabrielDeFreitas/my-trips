import Image from 'next/image'
import * as S from './styles'

const Author = () => (
  <S.Wrapper>
    <Image
      src="https://avatars.githubusercontent.com/u/47906240?v=4"
      alt="teste"
      width="44"
      height="44"
      quality={75}
    />
    <S.Content>
      <S.Name>@refri_comfrango</S.Name>
      <S.PostDate>10:40 PM · Jul 26, 2023 · 159 Views</S.PostDate>
    </S.Content>
  </S.Wrapper>
)

export default Author

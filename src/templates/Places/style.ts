import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: var(--large) var(--medium);
`

export const Container = styled.section`
  max-width: var(--container);
  padding-bottom: var(--large);
  margin: auto;
`

export const Gallery = styled.div`
  display: grid;
  margin-top: var(--medium);
  gap: 1.25rem;

  img {
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }
`

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  box-sizing: inherit;
  border-bottom: solid 1px #f2f2f2;
  padding-bottom: 1rem;
`

export const Content = styled.div`
  margin-left: 1rem;
  display: block;
  width: 100%;
`

export const PostDate = styled.p`
  font-size: 1.25rem;
  color: var(--highlight);
`

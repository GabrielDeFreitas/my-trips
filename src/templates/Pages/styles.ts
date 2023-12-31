import styled from 'styled-components'

export const Content = styled.section`
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-width: var(--container);
  margin: auto;
`

export const Heading = styled.h1`
  font-size: var(--large);
  margin-bttom: var(--large);
`

export const Body = styled.div`
  p {
    font-size: 2rem;
    line-height: 1.5;
  }
`

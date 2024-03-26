import styled from 'styled-components'

export const Content = styled.div`
  text-align: left;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-width: var(--container);
  margin: auto;

  p {
    font-weight: 100;
  }
`
export const Wrapper = styled.div`
  padding: var(--large) var(--medium);
`
export const List = styled.ul`
  display: flex;
  gap: 2.75rem;
  margin-block: 3.25rem;
  list-style-type: none;
`
export const Card = styled.div`
  background-color: #cdffb80d;
  border-radius: 0.75rem;
  margin: 2rem;
  padding: 2rem;
  color: #ffff;
`

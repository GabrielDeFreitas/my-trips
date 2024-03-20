import styled from 'styled-components'

export const Wrapper = styled.div`
  cursor: pointer;

  svg {
    transition: color 0.3s ease-in-out;
  }

  &:hover {
    svg {
      color: var(--highlight);
    }
  }
`

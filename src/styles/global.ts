import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  :root {
    --highlight: #29bc89;
    --background: #1d1f20;
    --white: #eeeeee;
    --grey: #cccccc;

    --container: 100rem;

    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
    background: var(--background);
    color: var(--white);
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  p,a {
    font-size: 2rem;
    line-height: var(--medium);
    margin-block: var(--small);
  }

  h1 {
    font-size: 4rem;
    line-height: var(--medium);
    margin-block: var(--small);
  }

  h2 {
    font-size: 3rem;
    line-height: var(--medium);
    margin-block: var(--small);
  }

  h3 {
    font-size: 2rem;
    line-height: var(--medium);
    margin-block: var(--small);
  }

  a {
    color: var(--highlight);
  }
`

export default GlobalStyles

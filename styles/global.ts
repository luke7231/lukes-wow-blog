import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --theme: #fff;
    --bg-color: #f5f5f5;
    --bg-article: #fff;
    --radius: 8px;
    --gap-16: 16px;
    --gap-24: 24px;
    --main-width: 720px;
  }
  body {
    background-color: var(--bg-color);

    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    padding: 0;
    margin: 0;

    line-height: 1.6;
    font-size: 18px;
  }

  a {
    color: black;
    text-decoration: none;
  }
  
  h2 {
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

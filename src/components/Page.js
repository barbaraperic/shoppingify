import React from 'react'
import Header from './Header'
import Meta from './Meta'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
  blue: '#112388',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  background-color: white;
  color: ${props => props.theme.black};
`

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  background-color: red;
`

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Montserrat', sans-serif;
  }
  a {
    text-decoration: none;
    color: ${theme.black}
  }
`

const Page = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledPage>
        <Meta />
        <Header />
        <Inner>
          {children}
        </Inner>
      </StyledPage>
    </ThemeProvider>
  )
}

export default Page
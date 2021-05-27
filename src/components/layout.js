import React from "react"
import styled from "styled-components"
import "normalize.css"
import GlobalStyles from "../styles/GlobalStyles"

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Content>
        <main>{children}</main>
      </Content>
    </>
  )
}

const Content = styled.div`
  padding: 2rem;
`

import { css } from '@emotion/css'
import * as React from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

type Props = {}

const Layout = (props: Props) => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      `}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Layout

import { css } from '@emotion/css'
import * as React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <header
      className={css`
        background-color: #333;
        color: #fff;
        height: 60px;
      `}
    >
      <nav
        className={css`
          padding-left: 1em;
        `}
      >
        <h1>Ruby's R(ale) House</h1>
      </nav>
    </header>
  )
}

export default Header

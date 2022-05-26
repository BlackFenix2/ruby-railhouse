import { css } from '@emotion/css'
import * as React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer>
      <hr />
      <div
        className={css`
          padding-left: 1em;
        `}
      >
        <p
          className={css`
            text-align: center;
          `}
        >
          Ruby Railhouse &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer

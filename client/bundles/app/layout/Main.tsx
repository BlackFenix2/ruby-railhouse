import { css } from '@emotion/css'
import * as React from 'react'

type Props = {}

const Main = (props: Props) => {
  const [name, setName] = React.useState('stranger')

  return (
    <main
      className={css`
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
    >
      <h3
        className={css`
          color: red;
        `}
      >
        Hello, {name}!
      </h3>
      <form>
        <label
          className={css`
            color: green;
            font-weight: bold;
          `}
          htmlFor="name"
        >
          Say hello to:
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
    </main>
  )
}

export default Main

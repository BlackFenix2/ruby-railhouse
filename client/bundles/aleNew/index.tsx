import * as React from 'react'
import AppContainer from '../app'
import type { Ale } from '../app/types/ale'
import Main from './Main'

type Props = {
  ale: Ale
  token: string
}

const New = (props: Props, railsContext) => {
  return () => (
    <AppContainer railsContext={railsContext}>
      <Main {...props}></Main>
    </AppContainer>
  )
}

export default New

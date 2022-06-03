import * as React from 'react'
import AppContainer from '../app'
import Main from './Main'
type Props = {
  ale: any
}

const Show = (props: Props, railsContext) => {
  return () => (
    <AppContainer railsContext={railsContext}>
      <Main ale={props.ale} />
    </AppContainer>
  )
}

export default Show

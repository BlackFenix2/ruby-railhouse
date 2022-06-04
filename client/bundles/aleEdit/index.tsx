import * as React from 'react'
import AppContainer from '../app'
import Main from './Main'
type Props = {
  ale: any
}

const Edit = (props: Props, railsContext) => {
  return () => (
    <AppContainer railsContext={railsContext}>
      <Main ale={props.ale} />
    </AppContainer>
  )
}

export default Edit

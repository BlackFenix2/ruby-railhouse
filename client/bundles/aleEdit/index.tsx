import * as React from 'react'
import AppContainer from '../app'
import Main from './Main'
type Props = {
  ale: any
  token: string
}

const Edit = (props: Props, railsContext) => {
  return () => (
    <AppContainer railsContext={railsContext}>
      <Main {...props} />
    </AppContainer>
  )
}

export default Edit

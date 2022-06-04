import * as React from 'react'
import AppContainer from '../app'

type Props = {}

const Delete = (props: Props, railsContext) => {
  return (
    <AppContainer railsContext={railsContext}>
      <div>Delete</div>
    </AppContainer>
  )
}

export default Delete

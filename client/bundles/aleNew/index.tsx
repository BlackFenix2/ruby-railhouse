import * as React from 'react'
import AppContainer from '../app'

type Props = {}

const New = (props: Props, railsContext) => {
  return (
    <AppContainer railsContext={railsContext}>
      <div>New</div>
    </AppContainer>
  )
}

export default New

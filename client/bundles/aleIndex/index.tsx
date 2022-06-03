import * as React from 'react'
import AppContainer from '../app'
import Main from './Main'
type Props = {
  ales: any
}

const Index = (props: Props, railsContext) => {
  return () => (
    <AppContainer railsContext={railsContext}>
      <Main aleList={props.ales} />
    </AppContainer>
  )
}

export default Index

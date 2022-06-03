import * as React from 'react'
import { Context } from './context'

export const useAppContext = () => {
  return React.useContext(Context)
}

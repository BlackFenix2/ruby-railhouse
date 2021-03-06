import ReactOnRails from 'react-on-rails'

import AleIndex from '../bundles/aleIndex'
import AleEdit from '../bundles/aleEdit'
import AleShow from '../bundles/aleShow'
import AleNew from '../bundles/aleNew'
import AleDelete from '../bundles/aleDelete'

export default function register() {
  // This is how react_on_rails can see the AleHouse in the browser.
  ReactOnRails.register({
    AleIndex,
    AleEdit,
    AleShow,
    AleNew,
    AleDelete
  })
}

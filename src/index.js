import addons from '@storybook/addons'
import { bool, string } from 'prop-types'
import { EVENT_ID } from './shared'

export const WithAdobePreview = ({ children, allowFullScreen, previewId }) => {
  addons.getChannel().emit(EVENT_ID, {
    allowFullScreen,
    previewId,
  })
  return children
}

export default ({ allowFullScreen, previewId }) => (getStory) => {
  addons.getChannel().emit(EVENT_ID, {
    previewId,
    allowFullScreen,
  })
  return getStory()
}

WithAdobePreview.propTypes = {
  previewId: string.isRequired,
  allowFullScreen: bool,
}

WithAdobePreview.defaultProps = {
  allowFullScreen: true,
}

import React from 'react'
import { bool, string } from 'prop-types'

const AdobeXdPreviewIframe = ({ active, previewId, allowFullScreen }) => {
  return (
    <iframe
      title="Adobe XD Preview Design"
      height="100%"
      width="100%"
      frameBorder="0"
      src={`https://xd.adobe.com/embed/${previewId}`}
      style={{ display: active ? 'block' : 'none' }}
      allowFullScreen={allowFullScreen}
    />
  )
}

AdobeXdPreviewIframe.propTypes = {
  active: bool.isRequired,
  allowFullScreen: bool.isRequired,
  previewId: string.isRequired,
}

AdobeXdPreviewIframe.defaultProps = {
  active: false,
  allowFullScreen: true,
}

export default AdobeXdPreviewIframe

import React, { useState, useEffect } from 'react'
import { bool, object } from 'prop-types'
import { EVENT_ID } from '../shared'
import EmptyAdobeXdPreviewIframe from './EmptyAdobeXdPreview'
import AdobeXdPreviewIframe from './AdobeXdPreviewIframe'

const AdobeXdPreviewPanel = ({ channel, api, active }) => {
  const initialState = {
    previewId: null,
    allowFullScreen: true,
  }
  const [state, setState] = useState({ ...initialState })

  useEffect(() => {
    const onAddAdobeXdPreview = ({
      previewId = initialState.previewId,
      allowFullScreen = initialState.allowFullScreen,
    }) => {
      setState({
        previewId,
        allowFullScreen,
      })
    }

    if (active) {
      channel.on(EVENT_ID, onAddAdobeXdPreview)

      return
    }

    api.onStory(() => {
      onAddAdobeXdPreview({ ...initialState })
    })

    channel.removeListener(EVENT_ID, onAddAdobeXdPreview)
  }, [active, channel, api, initialState])

  const { allowFullScreen, previewId } = state

  return previewId ? (
    <AdobeXdPreviewIframe active={active} allowFullScreen={allowFullScreen} previewId={previewId} />
  ) : (
    <EmptyAdobeXdPreviewIframe active={active} />
  )
}

AdobeXdPreviewPanel.propTypes = {
  active: bool.isRequired,
  api: object.isRequired,
  channel: object.isRequired,
}

export default AdobeXdPreviewPanel

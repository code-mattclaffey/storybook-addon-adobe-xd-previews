import React from 'react'
import addons from '@storybook/addons'
import { ADDON_ID, PANEL_ID } from './shared'
import AdobeXdPreviewPanel from './components/AdobeXdPreviewPanel'

addons.register(ADDON_ID, (api) => {
  addons.addPanel(PANEL_ID, {
    title: 'Adobe XD Previews',
    render: ({ active, key }) => {
      return <AdobeXdPreviewPanel key={key} channel={addons.getChannel()} api={api} active={active} />
    },
  })
})

import React from 'react'
import { bool } from 'prop-types'

const EmptyAdobeXdPreview = ({ active }) => (
  <div
    style={{
      margin: '1rem',
      fontFamily: 'Arial',
      fontSize: '1rem',
      color: '#444',
      width: '100%',
      overflow: 'auto',
      display: active ? 'block' : 'none',
    }}
  >
    <strong>
      Oh Hey!{' '}
      <span role="img" aria-label="Waving emoji">
        👋
      </span>{' '}
      Add a Adobe XD design to your story:
    </strong>
    <pre>
      {`
      import React from 'react'
      import { storiesOf } from '@storybook/react'
      import { WithAdobePreview } from 'storybook-addon-adobe-xd-preview'

      export withAdobeXdWrapper = () => (
        <WithAdobePreview
          previewId={'c53e8159-2e24-4118-b02b-6fe4b3a3afee'}
        >
          <button>Hello</button>
        </WithAdobePreview>
      )
      `}
    </pre>
  </div>
)

EmptyAdobeXdPreview.propTypes = {
  active: bool.isRequired,
}

EmptyAdobeXdPreview.defaultProps = {
  active: false,
}

export default EmptyAdobeXdPreview

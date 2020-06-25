import React from 'react';

var EmptyAdobeXdPreview = function EmptyAdobeXdPreview(_ref) {
  var active = _ref.active;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '1rem',
      fontFamily: 'Arial',
      fontSize: '1rem',
      color: '#444',
      width: '100%',
      overflow: 'auto',
      display: active ? 'block' : 'none'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Oh Hey!", ' ', /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": "Waving emoji"
  }, "\uD83D\uDC4B"), ' ', "Add a Adobe XD design to your story:"), /*#__PURE__*/React.createElement("pre", null, "\n      import React from 'react'\n      import { storiesOf } from '@storybook/react'\n      import { WithAdobePreview } from 'storybook-addon-adobe-xd-preview'\n\n      export withAdobeXdWrapper = () => (\n        <WithAdobePreview\n          previewId={'c53e8159-2e24-4118-b02b-6fe4b3a3afee'}\n        >\n          <button>Hello</button>\n        </WithAdobePreview>\n      )\n      "));
};

EmptyAdobeXdPreview.defaultProps = {
  active: false
};
export default EmptyAdobeXdPreview;
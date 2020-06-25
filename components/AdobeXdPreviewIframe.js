import React from 'react';

var AdobeXdPreviewIframe = function AdobeXdPreviewIframe(_ref) {
  var active = _ref.active,
      previewId = _ref.previewId,
      allowFullScreen = _ref.allowFullScreen;
  return /*#__PURE__*/React.createElement("iframe", {
    title: "Adobe XD Preview Design",
    height: "100%",
    width: "100%",
    frameBorder: "0",
    src: "https://xd.adobe.com/embed/".concat(previewId),
    style: {
      display: active ? 'block' : 'none'
    },
    allowFullScreen: allowFullScreen
  });
};

AdobeXdPreviewIframe.defaultProps = {
  active: false,
  allowFullScreen: true
};
export default AdobeXdPreviewIframe;
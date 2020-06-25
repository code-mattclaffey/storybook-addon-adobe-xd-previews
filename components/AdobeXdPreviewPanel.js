import _objectSpread from "/Users/matthewclaffey/Desktop/Repos/addon-xd/storybook-addon-adobe-xd-previews/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "/Users/matthewclaffey/Desktop/Repos/addon-xd/storybook-addon-adobe-xd-previews/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect } from 'react';
import { EVENT_ID } from '../shared';
import EmptyAdobeXdPreviewIframe from './EmptyAdobeXdPreview';
import AdobeXdPreviewIframe from './AdobeXdPreviewIframe';

var AdobeXdPreviewPanel = function AdobeXdPreviewPanel(_ref) {
  var channel = _ref.channel,
      api = _ref.api,
      active = _ref.active;
  var initialState = {
    previewId: null,
    allowFullScreen: true
  };

  var _useState = useState(_objectSpread({}, initialState)),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  useEffect(function () {
    var onAddAdobeXdPreview = function onAddAdobeXdPreview(_ref2) {
      var _ref2$previewId = _ref2.previewId,
          previewId = _ref2$previewId === void 0 ? initialState.previewId : _ref2$previewId,
          _ref2$allowFullScreen = _ref2.allowFullScreen,
          allowFullScreen = _ref2$allowFullScreen === void 0 ? initialState.allowFullScreen : _ref2$allowFullScreen;
      setState({
        previewId: previewId,
        allowFullScreen: allowFullScreen
      });
    };

    if (active) {
      channel.on(EVENT_ID, onAddAdobeXdPreview);
      return;
    }

    api.onStory(function () {
      onAddAdobeXdPreview(_objectSpread({}, initialState));
    });
    channel.removeListener(EVENT_ID, onAddAdobeXdPreview);
  }, [active, channel, api, initialState]);
  var allowFullScreen = state.allowFullScreen,
      previewId = state.previewId;
  return previewId ? /*#__PURE__*/React.createElement(AdobeXdPreviewIframe, {
    active: active,
    allowFullScreen: allowFullScreen,
    previewId: previewId
  }) : /*#__PURE__*/React.createElement(EmptyAdobeXdPreviewIframe, {
    active: active
  });
};

export default AdobeXdPreviewPanel;
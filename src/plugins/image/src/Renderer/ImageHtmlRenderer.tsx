import * as React from 'react';
import { ImageRendererProps } from '../types/renderer';
import { iconStyle } from '../common/styles';
import { lazyLoad } from '@react-page/core';
import { Component } from 'react';

const ImageIcon = lazyLoad(() => import('@material-ui/icons/Landscape'));

class ImageHtmlRenderer extends Component<ImageRendererProps, any> {
  render() {
    const { isEditMode, state } = this.props;
    const src = state.src;
    return src ? (
      // <div>
      //   {state.href && !isEditMode ? (
      //     <a href={state.href} target={state.target} rel={state.rel}>
      //       {Image}
      //     </a>
      //   ) : (
      //     Image
      //   )}
      // </div>
      <div>
        <img className="ory-plugins-content-image" alt="" src={src} />
      </div>
    ) : (
      <div>
        <div className="ory-plugins-content-image-placeholder">
          <ImageIcon style={iconStyle} />
        </div>
      </div>
    );
  }
};

export default ImageHtmlRenderer;

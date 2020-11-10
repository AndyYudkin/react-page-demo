import * as React from 'react';
import { ImageRendererProps } from '../types/renderer';
import { iconStyle } from '../common/styles';
import { lazyLoad } from '@react-page/core';

const ImageIcon = lazyLoad(() => import('@material-ui/icons/Landscape'));

const ImageHtmlRenderer: React.SFC<ImageRendererProps> = (props) => {
  const { isEditMode, state } = props;
  const src = state.src;
  const Image = <img className="ory-plugins-content-image" alt="" src={src} />;
  return src ? (
    <div>
      {state.href && !isEditMode ? (
        <a href={state.href} target={state.target} rel={state.rel}>
          {Image}
        </a>
      ) : (
        Image
      )}
    </div>
  ) : (
    <div>
      <div className="ory-plugins-content-image-placeholder">
        <ImageIcon style={iconStyle} />
      </div>
    </div>
  );
};

export default ImageHtmlRenderer;

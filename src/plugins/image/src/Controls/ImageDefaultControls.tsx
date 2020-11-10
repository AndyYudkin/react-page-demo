import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { BottomToolbar, ImageUpload } from '@react-page/ui';
import * as React from 'react';
import { ImageControlsProps } from '../types/controls';

const ImageDefaultControls: React.SFC<ImageControlsProps> = (props) => {
  const {
    Renderer,
    handleImageLoaded,
    handleImageUploaded,
    handleChange,
    readOnly,
    focused,
    remove,
  } = props;

  return (
    <div>
      <Renderer {...props} />
      {!readOnly && focused && (
        <BottomToolbar
          icon={props.IconComponent}
          open={props.focused}
          title={props.translations?.pluginName}
          onDelete={remove}
          {...props}
        >
          <div style={{ display: 'flex' }}>
            {props.imageUpload && (
              <React.Fragment>
                {
                  props.searchList != null && props.searchList.map((url: string, index: number) => <img width='25%' alt="" src={url} key={index}
                                                             onClick={() => handleChange(url)} />)
                }
              </React.Fragment>
            )}
          </div>
        </BottomToolbar>
      )}
    </div>
  );
};

export default ImageDefaultControls;

import * as React from 'react';
import { ImageLoaded, ImageUploaded } from '@react-page/ui';
import { ImageProps } from '../types/component';
declare type StateType = {
    imagePreview?: ImageLoaded;
};
declare class Form extends React.Component<ImageProps, StateType> {
    constructor(props: ImageProps);
    handleChange: (src: string) => void;
    handleImageLoaded: (image: ImageLoaded) => void;
    handleImageUploaded: (resp: ImageUploaded) => void;
    render(): JSX.Element;
}
export default Form;
//# sourceMappingURL=index.d.ts.map
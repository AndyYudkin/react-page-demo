import { ImageProps } from './component';

export interface ImageRendererExtraProps {
  searchList?: {thumb: string, full: string}[];
}

export type ImageRendererProps = ImageProps & ImageRendererExtraProps;

import { ImageLoaded, ImageUploaded } from '@react-page/ui';

export interface ImageApi {
  handleImageLoaded: (image: ImageLoaded) => void;
  handleImageUploaded: (image: ImageUploaded) => void;
  handleChange: (src: string) => void;
}

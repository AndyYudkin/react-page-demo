export interface ImageState {
  src: string;
  caption?: string;
  href?: string;
  target?: string;
  rel?: string;
  searchList?: { thumb: string, full: string }[]
}

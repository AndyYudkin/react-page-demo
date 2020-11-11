/// <reference types="react" />
import { ImageUploadType } from '@react-page/ui';
import { ImageRendererProps } from './renderer';
import { ImageControlsProps } from './controls';
import { Translations } from './translations';
export declare type ImageSettings = {
    imageUpload?: ImageUploadType;
    Renderer: React.ComponentType<ImageRendererProps>;
    Controls: React.ComponentType<ImageControlsProps>;
    translations?: Translations;
    IconComponent?: React.ReactNode;
};
//# sourceMappingURL=settings.d.ts.map
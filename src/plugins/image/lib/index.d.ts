import { ContentPluginConfig } from '@react-page/core';
import { ImageSettings } from './types/settings';
import { ImageState } from './types/state';
declare const imagePlugin: (settings?: Partial<ImageSettings>) => ContentPluginConfig<ImageState>;
declare const image: Pick<import("@react-page/core").ContentPluginProps<ImageState>, "text" | "name" | "description" | "lang" | "version" | "Component" | "IconComponent" | "hideInMenu" | "serialize" | "unserialize" | "handleRemoveHotKey" | "handleFocusNextHotKey" | "handleFocusPreviousHotKey" | "handleFocus" | "handleBlur" | "reducer" | "migrations" | "createInitialState" | "allowInlineNeighbours" | "isInlineable">;
export default image;
export { imagePlugin };
//# sourceMappingURL=index.d.ts.map
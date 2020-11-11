"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultSettings = exports.defaultTranslations = void 0;
var React = __importStar(require("react"));
var core_1 = require("@react-page/core");
var Panorama = core_1.lazyLoad(function () { return Promise.resolve().then(function () { return __importStar(require('@material-ui/icons/Panorama')); }); });
exports.defaultTranslations = {
    pluginName: 'Image',
    pluginDescription: 'Loads an image from an url.',
    or: 'OR',
    haveUrl: 'I have a URL',
    imageUrl: 'Image URL',
    hrefPlaceholder: 'http://example.com',
    hrefLabel: 'Link location (url)',
    openNewWindow: 'Open in new window',
    srcPlaceholder: 'http://example.com/image.png',
};
exports.defaultSettings = {
    Controls: function () { return React.createElement(React.Fragment, null, " Controls for this plugin were not provided"); },
    Renderer: function () { return React.createElement(React.Fragment, null, "Renderer; for this plugin was not provided "); },
    translations: exports.defaultTranslations,
    IconComponent: React.createElement(Panorama, null),
};
//# sourceMappingURL=settings.js.map
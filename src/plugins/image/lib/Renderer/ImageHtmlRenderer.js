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
var React = __importStar(require("react"));
var styles_1 = require("../common/styles");
var core_1 = require("@react-page/core");
var ImageIcon = core_1.lazyLoad(function () { return Promise.resolve().then(function () { return __importStar(require('@material-ui/icons/Landscape')); }); });
var ImageHtmlRenderer = function (props) {
    var isEditMode = props.isEditMode, state = props.state;
    var src = state.src;
    var Image = React.createElement("img", { className: "ory-plugins-content-image", alt: "", src: src });
    return src ? (React.createElement("div", null, state.href && !isEditMode ? (React.createElement("a", { href: state.href, target: state.target, rel: state.rel }, Image)) : (Image))) : (React.createElement("div", null,
        React.createElement("div", { className: "ory-plugins-content-image-placeholder" },
            React.createElement(ImageIcon, { style: styles_1.iconStyle }))));
};
exports.default = ImageHtmlRenderer;
//# sourceMappingURL=ImageHtmlRenderer.js.map
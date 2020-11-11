"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var react_1 = require("react");
var ImageIcon = core_1.lazyLoad(function () { return Promise.resolve().then(function () { return __importStar(require('@material-ui/icons/Landscape')); }); });
var ImageHtmlRenderer = /** @class */ (function (_super) {
    __extends(ImageHtmlRenderer, _super);
    function ImageHtmlRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageHtmlRenderer.prototype.render = function () {
        var _a = this.props, isEditMode = _a.isEditMode, state = _a.state;
        var src = state.src;
        return src ? (
        // <div>
        //   {state.href && !isEditMode ? (
        //     <a href={state.href} target={state.target} rel={state.rel}>
        //       {Image}
        //     </a>
        //   ) : (
        //     Image
        //   )}
        // </div>
        React.createElement("div", null,
            React.createElement("img", { className: "ory-plugins-content-image", alt: "", src: src }))) : (React.createElement("div", null,
            React.createElement("div", { className: "ory-plugins-content-image-placeholder" },
                React.createElement(ImageIcon, { style: styles_1.iconStyle }))));
    };
    return ImageHtmlRenderer;
}(react_1.Component));
;
exports.default = ImageHtmlRenderer;
//# sourceMappingURL=ImageHtmlRenderer.js.map
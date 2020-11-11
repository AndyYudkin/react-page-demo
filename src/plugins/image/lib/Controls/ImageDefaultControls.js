"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var ui_1 = require("@react-page/ui");
var React = __importStar(require("react"));
var ImageDefaultControls = function (props) {
    var _a;
    var Renderer = props.Renderer, handleImageLoaded = props.handleImageLoaded, handleImageUploaded = props.handleImageUploaded, handleChange = props.handleChange, readOnly = props.readOnly, focused = props.focused, remove = props.remove;
    return (React.createElement("div", null,
        React.createElement(Renderer, __assign({}, props)),
        !readOnly && focused && (React.createElement(ui_1.BottomToolbar, __assign({ icon: props.IconComponent, open: props.focused, title: (_a = props.translations) === null || _a === void 0 ? void 0 : _a.pluginName, onDelete: remove }, props),
            React.createElement("div", { style: { display: 'flex' } }, props.imageUpload && (React.createElement(React.Fragment, null, props.searchList != null && props.searchList.map(function (item, index) { return React.createElement("img", { width: '25%', alt: "", src: item.thumb, key: index, onClick: function () { return handleChange(item.full); } }); }))))))));
};
exports.default = ImageDefaultControls;
//# sourceMappingURL=ImageDefaultControls.js.map
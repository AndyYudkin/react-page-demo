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
var React = __importStar(require("react"));
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (src) {
            var change = { src: src };
            _this.props.onChange(change);
            return;
            // const target = e.target;
            // if (target instanceof HTMLInputElement) {
            //   const change: Partial<ImageState> = {};
            //
            //   if (target.name === 'target') {
            //     if (target.checked) {
            //       change.target = '_blank';
            //       // noopener is safer but not supported in IE, so noreferrer adds some security
            //       change.rel = 'noreferrer noopener';
            //     } else {
            //       change.target = null;
            //       change.rel = null;
            //     }
            //   } else {
            //     change[target.name] = target.value;
            //   }
            //
            //   this.props.onChange(change);
            //   return;
            // }
        };
        _this.handleImageLoaded = function (image) {
            return _this.setState({ imagePreview: image });
        };
        _this.handleImageUploaded = function (resp) {
            _this.setState({ imagePreview: undefined });
            _this.props.onChange({ src: resp.url });
        };
        _this.state = {};
        return _this;
    }
    Form.prototype.render = function () {
        var _a = this.props, Controls = _a.Controls, Renderer = _a.Renderer, readOnly = _a.readOnly;
        // only render either controls or renderer, because controls also include renderer
        return !readOnly ? (React.createElement(Controls, __assign({}, this.props, { searchList: this.props.state.searchList, handleImageLoaded: this.handleImageLoaded, handleImageUploaded: this.handleImageUploaded, handleChange: this.handleChange }))) : (React.createElement(Renderer, __assign({}, this.props)));
    };
    return Form;
}(React.Component));
exports.default = Form;
//# sourceMappingURL=index.js.map
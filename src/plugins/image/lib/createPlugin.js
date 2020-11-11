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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var index_1 = __importDefault(require("./Component/index"));
var settings_1 = require("./default/settings");
var createPlugin = function (settings) {
    var _a, _b;
    var mergedSettings = __assign(__assign({}, settings_1.defaultSettings), settings);
    return {
        Component: function (props) { return (React.createElement(index_1.default, __assign({}, props, mergedSettings))); },
        name: 'ory/editor/core/content/image',
        version: '0.0.1',
        IconComponent: mergedSettings.IconComponent,
        text: (_a = mergedSettings.translations) === null || _a === void 0 ? void 0 : _a.pluginName,
        isInlineable: true,
        description: (_b = mergedSettings.translations) === null || _b === void 0 ? void 0 : _b.pluginDescription,
        //@ts-ignore
        handleRemoveHotKey: function (_, __) {
            return Promise.reject();
        },
        //@ts-ignore
        handleFocusPreviousHotKey: function (_, __) { return Promise.reject(); },
        //@ts-ignore
        handleFocusNextHotKey: function (_, __) {
            return Promise.reject();
        },
        // We need this because otherwise we lose hotkey focus on elements like spoilers.
        // This could probably be solved in an easier way by listening to window.document?
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        handleFocus: function (props, source, ref) {
            if (!ref) {
                return;
            }
            setTimeout(function () { return ref.focus(); });
        },
    };
};
exports.default = createPlugin;
//# sourceMappingURL=createPlugin.js.map
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
exports.__esModule = true;
var react_1 = require("react");
var web_1 = require("@react-spring/web");
var react_use_gesture_1 = require("react-use-gesture");
var BoxSlide_module_css_1 = require("../style/BoxSlide.module.css");
var left = {
    bg: "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)",
    justifySelf: 'end'
};
var right = {
    bg: "linear-gradient(120deg, #96fbc4 0%, #f9f586 100%)",
    justifySelf: 'start'
};
var Slider = function (_a) {
    var children = _a.children;
    var _b = (0, web_1.useSpring)(function () { return (__assign({ x: 0, scale: 1 }, left)); }), _c = _b[0], x = _c.x, bg = _c.bg, scale = _c.scale, justifySelf = _c.justifySelf, api = _b[1];
    var bind = (0, react_use_gesture_1.useDrag)(function (_a) {
        var active = _a.active, x = _a.movement[0];
        return api.start(__assign(__assign({ x: active ? x : 0, scale: active ? 1.1 : 1 }, (x < 0 ? left : right)), { immediate: function (name) { return active && name === 'x'; } }));
    });
    var avSize = x.to({
        map: Math.abs,
        range: [50, 300],
        output: [0.5, 1],
        extrapolate: 'clamp'
    });
    return (<web_1.animated.div {...bind()} className={BoxSlide_module_css_1["default"].item} style={{ background: bg }}>
      <web_1.animated.div className={BoxSlide_module_css_1["default"].av} style={{ scale: avSize, justifySelf: justifySelf }}/>
      <web_1.animated.div className={BoxSlide_module_css_1["default"].fg} style={{ x: x, scale: scale }}>
        {children}
      </web_1.animated.div>
    </web_1.animated.div>);
};
function BoxSlide() {
    return (<div className={BoxSlide_module_css_1["default"].container}>
      <Slider>Slide</Slider>
    </div>);
}
exports["default"] = BoxSlide;

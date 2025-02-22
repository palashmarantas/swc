function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// @noImplicitAny: true
try {
    throw [
        0,
        1
    ];
} catch (param) {
    var _param = _slicedToArray(param, 2), a = _param[0], b = _param[1];
    a + b;
}
try {
    throw {
        a: 0,
        b: 1
    };
} catch (param1) {
    var a1 = param1.a, b1 = param1.b;
    a1 + b1;
}
try {
    throw [
        {
            x: [
                0
            ],
            z: 1
        }
    ];
} catch (param2) {
    var _param1 = _slicedToArray(param2, 1), ref = _param1[0], _x = _slicedToArray(ref.x, 1), y = _x[0], z = ref.z;
    y + z;
}
// Test of comment ranges. A fix to GH#11755 should update this.
try {} catch (param3) {
    var _param2 = _slicedToArray(param3, 1), /*a*/ a2 = _param2[0];
}

function _extends() {
    return (_extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
    }).apply(this, arguments);
}
const React = require("react");
class B1 extends React.Component {
    render() {
        return React.createElement("div", null, "hi");
    }
}
class B extends React.Component {
    render() {
        return React.createElement(B1, _extends({}, this.props, {
            x: "hi"
        }));
    }
}
export { };

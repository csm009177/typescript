var Component = /** @class */ (function () {
    function Component(element, props, children) {
        this.element = element;
        this.props = props;
        this.children = children;
    }
    Component.prototype.styleToString = function (style) {
        var entries = Object.entries(style);
        var objectValues = entries.map(function (_a) {
            var key = _a[0], value = _a[1];
            return "".concat(key, ": ").concat(value, ";");
        });
        return objectValues.join('');
    };
    Component.prototype.build = function () {
        var tagParts = ["<".concat(this.element)];
        for (var _i = 0, _a = Object.entries(this.props); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            var attributeString = "";
            if (key === 'style' && typeof value === 'object') {
                attributeString = "style=\"".concat(this.styleToString(value), "\"");
            }
            else {
                attributeString = "".concat(key, " = \"").concat(value, "\"");
            }
            tagParts.push(attributeString);
        }
        tagParts.push('>');
        if (this.children) {
            tagParts.push.apply(tagParts, this.children);
        }
        tagParts.push("</".concat(this.element, ">"));
        return tagParts.join('');
    };
    Component.create = function (element, props, children) {
        var component = new Component(element, props, children);
        return component.build();
    };
    return Component;
}());
// 사용예시
var myComponent = Component.create('div', { id: 'example', style: { color: 'red' } }, ['이것은 자바인가 타스인가']);
var root = document.getElementById('root');
root.innerHTML = myComponent;

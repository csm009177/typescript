// 인터페이스의 사전적인 정의는 '약속'이다
// typescript의 interface는 약속이다
function createComponent(element, props, children) {
    var tagParts = ["<".concat(element)];
    var styleToString = function (style) {
        var entries = Object.entries(style);
        var objectValues = entries.map(function (_a) {
            var key = _a[0], value = _a[1];
            return "".concat(key, ":").concat(value, ";");
        });
        var result = objectValues.join('');
        return result;
    };
    for (var _i = 0, _a = Object.entries(props); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        var attributeString = void 0;
        if (key === 'style' && typeof (value) === 'object') {
            attributeString = "style \"".concat(styleToString(value), "\"");
        }
        else {
            attributeString = "".concat(key, "=\"").concat(value, "\"");
        }
        tagParts.push(attributeString);
    }
    tagParts.push('>');
    if (children) {
        tagParts.push.apply(tagParts, children);
    }
    tagParts.push("</".concat(element, ">"));
    var result = tagParts.join('');
    return result;
}
//사용예시
var myComponent = createComponent('div', { id: 'example', style: { color: 'red' } }, ['안녕하세요']);
var root = document.getElementById('root');
root === null || root === void 0 ? void 0 : root.innerHTML = myComponent;

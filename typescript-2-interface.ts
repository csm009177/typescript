interface Props {
  id?:string;
  style?:Partial<CSSStyleDeclaration>;
  [key:string]:any;
}

// 인터페이스의 사전적인 정의는 '약속'이다
// typescript의 interface는 약속이다

function createComponent(element:string, props:Props, children?:string[]): string {
  let tagParts = [`<${element}`];
  const styleToString = (style:Partial<CSSStyleDeclaration>): string => {
    const entries = Object.entries(style);
    const objectValues = entries.map(([key,value])=> `${key}:${value};`);
    const result = objectValues.join('');
    return result
  };

  for (const [key, value] of Object.entries(props)) {
    let attributeString;
    if (key === 'style' && typeof (value)==='object') {
      attributeString = `style "${styleToString(value)}"`;
    } else {
      attributeString = `${key}="${value}"`;
    }
    tagParts.push(attributeString);
  }
  tagParts.push('>');
  
  if(children) {
    tagParts.push(...children);
  }
  tagParts.push(`</${element}>`);

  const result = tagParts.join('');
  return result;
}

//사용예시
const myComponent = createComponent('div', {id:'example', style:{color:'red'}}, ['안녕하세요']);
const root = document.getElementById('root');
if (root !== null) {
  root.innerHTML = myComponent;
}
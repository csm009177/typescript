import FetchExample from './typescript-6-tsx.ts';
// Props 라는 type 선언을 통해
// 반드시 문자열로만 구성된 객체를 전달 받아야 함을 명시합니다

type Props = {
  [key: string]: string;
};

// Promise<HTMLElement> 리턴이 Promise 객체를 반환한다는 의미이며,
// <꺽쇠> 표기는 제네릭 문법으로, '할당' 할 때 결정합니다
// HTMLElement는 따로 타입을 지정하지 않았지만, 기본적으로 제공되는 타입입니다.
// 따라서 함수 fetchElement은 HTMLElement 무언가를 Promise 객체로 핸들링한다는 뜻이며,
// async와 함께 사용한 것을 통해 Promise 객체를 동기적으로 작성된 코드처럼 작동합니다
// fetch() 는 기본적으로 비동기적으로 작동하기 때문에 비동기 상태로 그대로 두면,
// 아래의 HTML component 생성하는 부분보다 먼저 실행될 수 있습니다.(통신상태에 따라)

async function fetchExample(tagName : string, props:Props, children : string, url : string): Promise<HTMLElement> {
  // HTML 요소 생성
  const element = document.createElement(tagName);

  // Props 설정
  for (const key in props) {
    element.setAttribute(key, props[key]);
  }

  //초기 내용 설정
  element.innerHTML = children;

  try {
    // Fetch API를 사용해 데이터 가져오기
    // 위 함수 선언부에서 async 키워드를 사용했기 때문에, fetch()함수는 await 키워드를 사용할 수 있습니다
    const response = await fetch(url);
    if(!response.ok) { // AJAX 통신의 일반적인 객체 구조에서는 ok 속성을 사용 한예
      throw new Error(`통신상태 불량 : ${response.status}`);
    }
    // 위 fetch() await 키워드 때문에 아래 data라는 변수의 chunks Promise 객체가 되며
    // 동기적으로 작성된 코드처럼 작동합니다
    const data = await response.json();

    // 가져온 데이터로 컴포넌트 업데이트
    element.innerHTML = JSON.stringify(data, null, 2);
  } catch (error) { // try 구문이 실패했을 경우는 통신상태 불량일 확률이 상당히 높습니다
    // 실패 시 메시지 업데이트
    element.innerHTML = " 아직 데이터가 수신되지 않았습니다";
  }

  return element;
}

// 사용 예시
// 문서(html)에서 위 코드가 불러와지거나 작성되었다고 가정합니다
const root = document.getElementById('root');

fetchExample('div', {class: 'example'}, '로딩중', 'http://my.server.localhost/directory')
.then((div) => {root.appendChild(div)})
.catch((error) => {console.error('catch구문 error 매개변수 인자가 전달됨 :', error)});
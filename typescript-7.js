function addJs(a,b) {
  if(typeof(a) === "number" && typeof(b) === "number") {
    return a+b;
  }
}

console.log(addJs(1,2)); // 3 정상출력됨
console.log(addJs("a","b")); // undefined 리턴, 오류 발생

// Javascript매번 예제용으로 작성했던 덧셈코드 입니다. Typescript를 사용하기 전 매번 작성했었던 타입체크용 if() 분기처리가 현재는 거추장스러운 일이되는 것 같습니다. if() 실행보다도 더 큰 문제는 바로 의도적으로 에러를 발생시킨 두번째 console.log()부분에 있습니다. 함수 로직상으로는 절대로 실행시키면 안되는 일이지만,가볍게 undefined ‘데이터 타입’을 리턴하고 마치 문제가 없는 것처럼 동작하는 자바스크립트의 고질적인 문제점을 확인 하실 수 있습니다. 코드가 매우 복잡해진다는 가정하에는 이러한 코드가 ‘찾기 어려운 버그’로 작용합니다.

function addTs(a:number, b:number) {
  if(typeof(a)==="number" && typeof(b)=== "number") {
    return a + b;
  }
}
console.log(addTs(1,2)); // 3, 정상 출력됨
console.log(addTs("a", "b"));
// 에디터에서도, 콘솔 출력에서도 어디가 에러가 발생하는 원인인지 알려줌

// 위의 Javascript 코드를 그대로 Typescript 방식으로 이식한 사례입니다. VSCODE는Typescript 언어를 메인으로 사용한다고 할만큼 굉장히 처리가 잘되어 있어, 벌써 에러사인이 콘솔을 확인하기전에 ‘구문오류’를 보여줍니다. 에러가 반가운일이다. 라고 말하는 이유의 결정적인 사례입니다.
// 위의 코드를 ts-node 로 실행하여 값을 받으면 위와 같이 에러가 발생하는 부분이 어디인지 를 ‘정확하게 어디 지점’ 이라는 것을 확연하게 알려줍니다. 이것은 vscode가 아닌 런타임이 라면 어디든 동일하게 받을 수 있으며, 이자체의 ‘가치’를 확인한다면 javascript 의 너무나 과도하게 유연한 에러처리는 개발자에게는 고통이 될 수 밖에 없다는 결론에 이릅니다.
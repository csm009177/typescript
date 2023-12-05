/**
 *
 * @param a number
 * @param b number
 * @returns number
 *
 * @description
 * typescript는 '원하는 타입'을 사용하고 싶다는 javascript 유저의 강력한 니즈에서 시작되었다고 해도 과언이 아니다
 * 아래의 함수 add를 확인하였을 때 a는 number 타입이라는 약속, b도 number 타입만 받겠다는 제작자의 의지(?)를 확인할 수 있고 심지어 리턴 값까지도 : number라는 표기를 통해
 * 해당 함수가 실행되어 완료되면 반환값의 데이터 타입까지도 함수명 옆에 표기하여 어마어마한 가독성을 자랑한다
 * 코드는 길어졌지만, 가독성은 높아지는 현상이 일어나고 있다
 * 매우 큰 코드 베이스를 다루는 경우, 이러한 가독성은 매우 중요하다
 */
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));

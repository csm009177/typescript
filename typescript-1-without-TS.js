/**
 * 
 * 꾸역꾸역 에러처리를 통해 타입 에러를 잡아내는 방법
 */

function add(a,b){
    if(typeof a!=='number' || typeof b !=='number'){
        throw new Error('인자가 숫자가 아닙니다');
    } else {
        return a + b;
    }
}

console.log(add(1,2))
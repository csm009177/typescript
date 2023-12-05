"use strict";
class Person {
    constructor(name) {
        //생성자는 클래스가 인스턴스화될 때 자동으로 실행되는 메소드입니다. 여기서는 name이라는 매개변수를 받아서 클래스의 name 속성을 초기화하는 역할을 합니다.
        this.name = name; //생성자에서 받은 name 매개변수의 값을 클래스의 name 속성에 할당합니다. 이로써 클래스의 인스턴스가 생성될 때마다 name 속성은 생성자에 전달된 값으로 초기화됩니다.
    }
}
// 'Person' 클래스의 인스턴스를 생성하고 이름을 "8"으로 초기화합니다.
const p = new Person("8");
console.log(p);
console.log(typeof (p));
// 'Person' 클래스의 인스턴스를 생성하고 이름을 "9"으로 초기화합니다.
const k = new Person("9");
console.log(k);
console.log(typeof (k));

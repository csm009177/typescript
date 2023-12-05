class animal {
  // manimal 클래스의 내용을 여기에 추가
  
}
class Dog extends animal {
  name: string;

  constructor(name: string) {
    super(); // manimal 클래스의 생성자 호출
    this.name = name;
  }
}

const myDog = new Dog("Buddy");
console.log(myDog)
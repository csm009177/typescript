<<<<<<< HEAD
// 어디를 분류해야 적절하게 요점을 짚을 수 있을까요?
type Props = {
  [key : string] : string;
=======
function addTs(a:number, b:number) {
  if(typeof(a)==="number" && typeof(b)=== "number") {
    return a + b;
  }
>>>>>>> 45f60947a4aa94f2e6fb24f547afa613c081df3f
}
console.log(addTs(1,2)); // 3, 정상 출력됨
console.log(addTs("a", "b"));
// 에디터에서도, 콘솔 출력에서도 어디가 에러가 발생하는 원인인지 알려줌

<<<<<<< HEAD
function createElement(tagName:string, props:Props, ...children: string[]): string {
  const propEntries = Object.entries(props);
  let propString = '';

  for(let [key, value] of propEntries) {
    propString += `${key}= "${value}"`;
  }

  return `<${tagName} ${propString.toString()}> ${children.join('')}</${tagName}>`;
}

type Pokemon = {
  name : string;
  id : number;
}

const pokemonList : Pokemon[] =[
  { name : '피카츄', id : 1 },
  { name : '이상해씨', id : 2 },
  { name : '파이리', id : 3 },
  { name : '꼬부기', id : 4 },
  { name : '버터풀', id : 5 },
];

let battles : number = 0;

function renderPokemons(pokemons : Pokemon[]) : string{
  let pokemonButtonsHtml = '';
  
  for(let pokemon of pokemons) {
    pokemonButtonsHtml += createElement('button', {id:`pokemon-${pokemon.id}`, 'data-pokemon': pokemon.name}, `${pokemon.name}와 배틀하기`);
  }

  return createElement('div', {}, `배틀 횟수: ${battles}`, pokemonButtonsHtml);
}

function setupEventListeners(rootId : string, pokemons: Pokemon[]):void {
  const rootElement = document.getElementById(rootId);

  if (rootElement === null) {
    return;
  }

  for(let pokemon of pokemons) {
    const button = document.getElementById(`pokemon-${pokemon.id}`);

    if (button === null) {
      continue;
    }

    button.addEventListener('click', ()=> handleBattle(pokemon.name));
  }
} 

function handleBattle(pokemonName: string): void {
  console.log(`${pokemonName}와의 배틀이 시작되었습니다!`);
  battles +=1;
  updateUI('root');
}

function updateUI(rootId: string): void {
  const root = document.getElementById(rootId);

  if (root === null){
    return;
  }

  root.innerHTML = renderPokemons(pokemonList);
  setupEventListeners(rootId, pokemonList);
}

updateUI('root');
=======
// 위의 Javascript 코드를 그대로 Typescript 방식으로 이식한 사례입니다. VSCODE는Typescript 언어를 메인으로 사용한다고 할만큼 굉장히 처리가 잘되어 있어, 벌써 에러사인이 콘솔을 확인하기전에 ‘구문오류’를 보여줍니다. 에러가 반가운일이다. 라고 말하는 이유의 결정적인 사례입니다.
// 위의 코드를 ts-node 로 실행하여 값을 받으면 위와 같이 에러가 발생하는 부분이 어디인지 를 ‘정확하게 어디 지점’ 이라는 것을 확연하게 알려줍니다. 이것은 vscode가 아닌 런타임이 라면 어디든 동일하게 받을 수 있으며, 이자체의 ‘가치’를 확인한다면 javascript 의 너무나 과도하게 유연한 에러처리는 개발자에게는 고통이 될 수 밖에 없다는 결론에 이릅니다.
>>>>>>> 45f60947a4aa94f2e6fb24f547afa613c081df3f

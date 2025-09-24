// this 함수를 호출한 객체다
const main = function () {
  console.log(this);
};
const mainBind = main.bind({});
mainBind();

// 화살표 함수는 내부적으로 this가 없어요.
// 자신이 속해 있는 컨텍스트의 this를 빌려옵니다.
const sub = () => console.log(this);
const subBind = sub.bind({});
subBind();

const obj = {
  name: "sucoding",
  main: function () {
    console.log(this);
    const sub = () => console.log(this);
    sub();
  }.bind({ name: "superman" }),
};

obj.main();

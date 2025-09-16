// 1. 리액트의 스타일링 방법

// 1.1 전통적인 스타일링 방법
// 1.1.1 인라인 스타일링
// 1.1.2 외부 스타일 (global 스타일)

// 1.2 CSS Module (*.module.css)
// 1.2.1 ClassNames 패키지
// 1.2.1.1 'classnames', 'classnames/bind' 라이브러리

// 1.3 Tailwind CSS (BootStrap)
// 1.3.1 유틸리티 퍼스트(Utility-First) 방식으로 설계된 CSS 프레임워크
// 1.3.2 BootStrap처럼 미리 만들어진 컴포넌트를 제공하는 대신, 테일윈드는 아주 작은 유틸리티 클래스를 제공

// 1.3.3 유틸리티 퍼스트란?
// 1.3.3.1 작고 단일한 역할만 하는 CSS 클래스를 조합해서 UI를 만드는 방식을 의미
// 1.3.3.2
// .btn-primary { background-color : blue; color: white; padding : 10px;},
// <button class="btn-primary"> 버튼 </button>

// 테일윈드 예제 : <button class="bg-blue-500 text-white p-2.5"

// Tailwind Merge의 사용 이유
// twMerge('px-2 py-1 bg-red hover:bg-dark-red', 'p-3 bg-[#B91C1C]')
// → 'hover:bg-dark-red p-3 bg-[#B91C1C]'

// 원래 기존대로라면 중복 사용이 될 경우 마지막에 선언된 효과로 선언이 됨

// 1.4 CSS-IN-JS

// ! CSS-IN-JSS의 단점
// CSS를 자바스크립트가 생성한다! -> 자바스크립트 런타임에 CSS가 생성된다.
// -> CSS-IN-JS 스타일링을 많이하면 할 수록, 자바스크립트 런타임에 철리가 되는 코드의 양이 많아짐

// 1.4.1 CSS를 자바스크립트 코드 안에서 작성하고 사용하는 방식
// 1.4.2 유명한 CSS-IN-JS
// 1.4.2.1 styled-components
// 1.4.2.1.1 styled-components 개발이 공식 종료 됨 -> 유지보수 로드
// 1.4.2.2 emotion

// 1.4.2.3 vanilla extract
// 1.4.2.3.1 제로-런-타임(zero-run-time)
// 빌드 할 때 CSS를 생성하여 CSS을 받아오는 시간을 줄인다는 방식


// 2. 리액트에서 데이터를 전달하는 방법
// 2.1 컴포넌트 데이터를 전달할 때는 properties(속성)을 이용하여 데이터들을 전달합니다.
// 2.1.1 컴포넌트의 props


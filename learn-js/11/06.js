//객체
// 1.1 객체를 정의하는 방법
// 1.1.1 객체 이터럴
// 1.1.2 Object 생성자 함수
// 1.1.3 (커스텀) 생성자 함수
// 1.1.4 Object.create()

// 1.2 프로퍼티의 접근과 규칙
// 1.2.1 접근 방법
// 1.2.1.1 마침표 연산
// 1.2.1.2 대괄호 연산 => 특별한 경우가 아니면 안씀!

// 1.2.2 조작
// 1.2.2.1 수정 (식별자.속성 = 값)
// 1.2.2.1 추가 (식별자.속성 = 값)
// 1.2.2.1 삭제 (delete)

// 1.3 메서드에서의 this
// 1.3.1 this는 함수를 호출한 객체이다.
// 1.3.2 메서드를 정의하는 방법
// 1.3.2.1 고전적인 방법 ( main : function (){} )
// 1.3.2.2 단축 속성 (main () {})
// 1.3.2.3 생략 가능 ( main : main -> main)
// 1.3.2.4 화살표 함수 () => {}

// 1.4 객체의 순회(반복)
// 1.4.1 for..in 
// 1.4.2 Object.keys() + forEach()
// 1.4.3 Object.entries() + forEach()
// 1.4.4 Object.values() + forEach()

// 1.5 객체의 병합과 복사
// 1.5.1 병합(얕은 병합)
// 1.5.1.1 Object.assign()
// 1.5.1.2 { ...obj1, ...obj2 }

// 1.5.2 복사
// 1.5.2.1 얕은 복사  -> 기본적으로 참조 데이터는 모두 얕은 복사
// 1.5.2.2 깊은 복사
// 1.5.2.2.1 JSON.parse(JSON.stringify(object))
// 1.5.2.2.2 structredClone()

// 1.6 구조분해할당(비구조화할당)
// 1.6.1 객체의 키와 똑같이 해야 한다.
// 1.6.2 alias { user: usreName }

// 1.7 JSON
// 1.7.1 JSON.stringify() -> 원래의 데이터를 JSON 문자열로 변환
// 1.7.2 JSON.parse() -> JSON 문자열을 원래의 데이터로 변환

// 1.8 객체의 속성 설명자
// 1.8.1 Object.defineProperty(); , Object.defineProperties();
// 1.8.1.1 value
// 1.8.1.2 writable => false 수정 불가능, true 가능
// 1.8.1.3 enumerable -> false 열기 기능 속성에 안보임, true 보임
// 1.8.1.4 configurable -> 속성의 삭제 불가

// 1.9 접근자 프로퍼티  (getter / setter)
// 1.9.1 getter, setter

// 1.10 객체의 불변성
// 1.10.1 Object.freeze() <-> Object.isFrozen() // 완전 동결 (동결이란? 막아둔다는 의미)
// 1.10.2 Object.seal() <-> Object.isSealed() // 추가 삭제만 동결 (동결이란? 막아둔다는 의미)
// 1.10.3 Object.preventExtensions() <-> Object.isExtensible() // 추가 동결 (동결이란? 막아둔다는 의미)


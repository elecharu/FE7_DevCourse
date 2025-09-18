export default function User({ userObj: { name, age }, event }: UserProps) {
  return (
    <>
      <h1>User Component</h1>
      <h1>
        내 이름은 {name} 나이는 {age}살 입니다.
      </h1>
      <button style={{ width: "100px", height: "100px" }} onClick={event}>
        클릭 이벤트
      </button>
    </>
  );
}

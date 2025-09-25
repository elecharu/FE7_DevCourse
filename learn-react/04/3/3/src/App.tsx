import elon from "./assets/images/elon.jpg";

export default function App() {
  return (
    <>
      <h1 className="nanum-pen-script-regular ">App Component</h1>
      <h1 className="doldam">돌담 폰트 테스트</h1>

      {/* public 폴더 안에 존재하는 이미지 참조 */}
      <img src="images/elon.jpg" style={{ width: "100%" }}></img>
      <div className="bg"></div>
      <div
        style={{
          width: "100%",
          height: "300px",
          background: 'url("/images/elon.jpg") no-repeat center center',
        }}
      />

      {/* assets 폴더 안에 존재하는 이미지 참조 방법 */}
      {/* 아래의 방법은 개발서버에서는 작동하지만, 실제 배포 환경에서는 참조가 불가능 */}
      <img src="./src/assets/images/elon.jpg"></img>

      {/* src 폴더 안에 존재하는 리소스들을 참조할 때는 import 구문을 사용하여 참조할 것! */}
      <img src={elon} alt="일론"></img>
      <div
        style={{
          width: "100%",
          height: "300px",
          background:
            'url("./src/assets/images/elon.jpg") no-repeat center center',
        }}
      />
      <div className="elon"></div>
    </>
  );
}

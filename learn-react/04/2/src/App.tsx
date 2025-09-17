import Button from "./components/Button";
import Buttons from "./components/Buttons";

import PButton from "./html/Button";
import Input from "./html/Input";
import CheckBox from "./html/CheckBox";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* <h1>App Component</h1> */}
      {/* <Button text={"버튼1"} />
      <Button text={"버튼2"} />
      <Button text={"버튼3"} /> */}

      {/* <Buttons onClick={() => console.log("클릭!")}>등록하기</Buttons> */}

      {/*  연습문제  */}
      <div className="flex gap-4 ml-4 mb-4 mt-4">
        <PButton style="grayButton" onClick={() => console.log("Add")}>
          Add
        </PButton>
        <PButton style="redButton" onClick={() => console.log("Cancel")}>
          Cancel
        </PButton>
        <PButton style="purpleButton" onClick={() => console.log("Success")}>
          Success
        </PButton>
      </div>

      <div className="flex gap-4 ml-4 mb-4">
        <Input style="input">Enter Todo List</Input>
      </div>

      <div className="flex gap-4 ml-4 mb-4">
        <CheckBox style="checkBox" checked={true}>
          I agree with terms and policies.
        </CheckBox>
      </div>
    </div>
  );
}

import { useReducer, useState } from "react";

type FormState = {
  email: string;
  password: string;
};

type FormAction = {
  type: "setEmail" | "setPw";
  payload: string;
};

function formReducer(state: FormState, action: FormAction) {
  switch (action.type) {
    case "setEmail":
      return { ...state, email: action.payload };
    case "setPw":
      return { ...state, password: action.payload };
    default:
      return { ...state };
  }
}

export default function Form() {
  const [formState, formDispatch] = useReducer(formReducer, {
    email: "",
    password: "",
  });

  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="이메일"
          value={formState.email}
          onChange={(e) =>
            formDispatch({ type: "setEmail", payload: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={formState.password}
          onChange={(e) =>
            formDispatch({ type: "setPw", payload: e.target.value })
          }
        />
        <button> 로그인 </button>
      </form>
    </>
  );
}

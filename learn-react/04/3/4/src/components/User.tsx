import { useEffect } from "react";

export default function User(props: any) {
  useEffect(() => {
    console.log(props);
  }, []);

  // useEffect(() => {
  //   fetch("https://ipapi.co/json/")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <>
      <h1>User Component</h1>
    </>
  );
}

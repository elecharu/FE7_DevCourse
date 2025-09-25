import axios from "axios";
import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { axiosInstance } from "../api/axiosInstance";

export default function Axios() {
  // const [posts, setPosts] = useState<Posts[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [error, setError] = useState<string>("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setIsLoading(true);
  //       const { data } = await axios.get("http://localhost:3001/posts");
  //       console.log(data);
  //       setPosts(data);
  //     } catch (e) {
  //       console.error(e);
  //       setError(e instanceof Error ? e.message : "unknown error");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const { data, isLoading, error } = useAxios("posts");
  if (isLoading) return <pre>Loading...</pre>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <ul>
        {Array.isArray(data) && data.map((v) => <li key={v.id}>{v.title}</li>)}
      </ul>
    </>
  );
}

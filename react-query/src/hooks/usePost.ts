import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  userId: "number";
  id: "number";
  title: string;
  body: string;
}

const usePost = () => {
  const fetchPost = () =>
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data);

  return useQuery<Post[], Error>({
    queryKey: ["post"],
    queryFn: fetchPost,
    staleTime: 10 * 1000,
  });
};

export default usePost;

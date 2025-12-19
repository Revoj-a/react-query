import {
  useInfiniteQuery,
  useQuery,
  keepPreviousData,
} from "@tanstack/react-query";
import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostQuery {
  pageSize: number;
}

const usePost = (query: PostQuery) =>
  useInfiniteQuery<Post[], Error>({
    queryKey: ["post", query],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: ((pageParam as number) - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000,
    placeholderData: keepPreviousData,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });

export default usePost;

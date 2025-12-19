import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostQuery {
  pageSize: number;
  page: number;
}

const usePost = (query: PostQuery) => {
  return useInfiniteQuery<Post[], Error>({
    queryKey: ["post", query],
    queryFn: ({ pageParam = 0 }) =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: pageParam * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => allPages.length,
    staleTime: 1 * 60 * 1000,
    placeholderData: (previousData) => previousData,
  });
};

export default usePost;

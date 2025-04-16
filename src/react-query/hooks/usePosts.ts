import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";

export interface Post {
	id: number;
	userId: number;
	title: string;
	body: string;
}

export interface PostQuery {
	pageSize: number;
}

const usePosts = (query: PostQuery) => useInfiniteQuery<Post[], Error>({
	initialData: undefined, initialPageParam: undefined,
	queryKey: ["posts", query],
	queryFn: ({ pageParam = 1 }) => axios
		.get("https://jsonplaceholder.typicode.com/posts", {
			params: {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-expect-error
				_start: (pageParam - 1) * query.pageSize,
				_limit: query.pageSize
			}
		})
		.then((res) => res.data),
	//staleTime: 1 * 60 * 1000
	getNextPageParam: (lastPage, allPages) => {
		return lastPage.length > 0 ? allPages.length + 1 : undefined;
	}
});

export default usePosts;
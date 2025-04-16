import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export interface Post {
	id: number;
	userId: number;
	title: string;
	body: string;
}

export default function usePosts(userId: number | undefined) {
	return useQuery<Post[], Error>({
		queryKey: ["posts", userId, "posts"],
		queryFn: () => axios
			.get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
				params: {
					userId
				}
			})
			.then((res) => res.data),
		staleTime: 1 * 60 * 1000
	});
}
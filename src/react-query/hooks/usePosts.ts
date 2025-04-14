import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export interface Post {
	id: number;
	userId: number;
	title: string;
	body: string;
}

export default function usePosts() {
	const getPosts = () =>
		axios
			.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.data);

	return useQuery<Post[], Error>({
		queryKey: ["posts"],
		queryFn: getPosts
	});
}
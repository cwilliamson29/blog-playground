import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export interface Todo {
	id: number;
	userId: number;
	title: string;
	completed: boolean;
}

export default function useTodos() {
	const getTodos = () =>
		axios
			.get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
			.then((res) => res.data);

	return useQuery<Todo[], Error>({
		queryKey: ["todos"],
		queryFn: getTodos
	});
}
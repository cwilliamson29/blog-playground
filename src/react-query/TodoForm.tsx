import { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "./hooks/useTodos.ts";
import axios from "axios";

function TodoForm() {
	const queryClient = useQueryClient();

	const addTodo = useMutation<Todo, Error, Todo>({
		mutationFn: (todo: Todo) => axios
			.post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
			.then((res) => res.data),
		onMutate: (newTodo) => {
			queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
				newTodo,
				...(todos || [])]);
		},
		onSuccess: (savedTodo, newTodo) => {
			queryClient.setQueryData<Todo[]>(["todos"], (todos) =>
				todos?.map((todo) =>
					todo === newTodo ? savedTodo : todo
				)
			);
		}
		// onError: (error, newTodo) => {
		// }
	});
	const ref = useRef<HTMLInputElement>(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (ref.current && ref.current.value) {
			addTodo.mutate({
				id: 0,
				title: ref.current.value,
				completed: false,
				userId: 1
			});
			ref.current.value = "";
		}

	};
	return (
		<>
			{addTodo.error && <div className="border-red-600 bg-red-300 text-black rounded-md">{addTodo.error.message}</div>}
			<form className="flex justify-center"
				  onSubmit={e => handleSubmit(e)}>
				<div className="w-[500px]">
					<input ref={ref} onChange={() => ref.current} className="w-100 border-b-1 mt-1 mr-4 text-black text-left p-1 bg-gray-500 border-blue-500 border-1 rounded-md" />
				</div>
				<div className="border-b-1 text-black text-left">
					<button type="submit" className="bg-blue-500 text-white font-bold disabled:bg-gray-500" disabled={addTodo.isPending}>
						{addTodo.isPending ? "Adding..." : "Add"}
					</button>
				</div>
			</form>
		</>

	);
}

export default TodoForm;

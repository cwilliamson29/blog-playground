import { useEffect, useState } from "react";
import axios from "axios";

interface ToDo {
	id: number;
	userId: number;
	title: string;
	completed: boolean;
}

function ToDoList() {
	const [todos, setTodos] = useState<ToDo []>([]);
	const [error, setError] = useState("");

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/todos")
			.then((res) => setTodos(res.data))
			.catch(err => setError(err));
	}, []);

	if (error) return <p>{error}</p>;
	console.log(todos[0]);
	return (
		<div>ToDoList</div>
	);
}

export default ToDoList;

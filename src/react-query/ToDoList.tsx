import useTodos from "./hooks/useTodos.ts";


function ToDoList() {
	const { isPending, data, error } = useTodos();

	if (error) return <p>{error.message}</p>;

	if (isPending) return <p>...Loading</p>;

	//console.log(data);
	return (
		<ul>
			{data?.map((todo) => (
				<li key={todo.id}>
					{todo.title}
				</li>
			))}
		</ul>
	);
}

export default ToDoList;

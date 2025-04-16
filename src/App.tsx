import "./App.css";
//import ToDoList from "./react-query/ToDoList.tsx";
import Posts from "./react-query/Posts.tsx";
import TodoForm from "./react-query/TodoForm.tsx";
import ToDoList from "./react-query/ToDoList.tsx";

function App() {


	return (
		<>
			<TodoForm />
			<ToDoList />
			<Posts />
		</>
	);
}

export default App;

import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

interface User {
	id: number;
	name: string;
	email: string;
}
function App() {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(()=>{
		axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
			.then((res) => setUsers(res.data))
	}, [])

	return (
		<ul>
			{users.map((user: User) => (<li key={user.id}>{user.name}</li>))}
		</ul>
	);
}

export default App;

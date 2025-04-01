import "./App.css";
import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";
import StopWatch from "./components/stopWatch.tsx";

interface User {
	id: number;
	name: string;
	email: string;
}

function App() {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const controller = new AbortController();
		axios.get<User[]>("https://jsonplaceholder.typicode.com/users", { signal: controller.signal })
			.then((res) => {
				setUsers(res.data);
				setLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false);
			});
		return () => controller.abort();
	}, []);

	const deleteUser = (user: User) => {
		const originalUsers = [...users];
		setUsers(users.filter((u) => u.id !== user.id));

		axios.delete("https://jsonplaceholder.typicode.com/users/" + user.id)
			.catch((err) => {
				setError(err.message);
				setUsers(originalUsers);
			});
	};
	const addUser = () => {
		const newUser: User = { id: 0, name: "Chris" };

		setUsers([newUser, ...users]);

		axios.post("https://jsonplaceholder.typicode.com/users/", newUser)
			.then(({ data: savedUser }) => {
				setUsers([savedUser, ...users]);
			})
			.catch((err) => {
				setError(err.message);
				setUsers(users);
			});
	};

	return (
		<>
			{error !== "" && <p className="text-red-500 border border-1 border-red-500 p-5 mb-5">{error}</p>}
			{loading && "Loading..."}
			<StopWatch />
			<ul>
				{users.map((user: User) => (
					<div key={user.id} className="flex border border-1 border-gray-700 justify-between">
						<li className="m-auto">
							{user.name}
						</li>
						<button className="bg-gray-900" onClick={() => deleteUser(user)}>Delete</button>
					</div>
				))}
			</ul>
		</>
	);
}

export default App;

import usePosts from "./hooks/usePosts.ts";
import { useState } from "react";

function Posts() {
	const [user, setUser] = useState<number>();
	const { isPending, data, error } = usePosts(user);

	if (error) return <p>{error.message}</p>;

	if (isPending) return <p>...Loading</p>;

	//console.log(data);
	return (
		<div>
			<select className="border-1 border-gray-200" onChange={(e) => setUser(parseInt(e.target.value))} value={user}>
				<option value=""></option>
				<option value="1">User 1</option>
				<option value="2">User 2</option>
				<option value="3">User 3</option>
			</select>
			{data?.map((post) => (
				<div key={post.id} className="bg-amber-200 border-b-1 text-black text-left mb-3 p-1">
					<div className="border-b-1">Title: {post.title}</div>
					<div>{post.body}</div>
				</div>
			))}
		</div>
	);
}

export default Posts;

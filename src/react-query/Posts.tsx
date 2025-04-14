import usePosts from "./hooks/usePosts.ts";

function Posts() {
	const { isPending, data, error } = usePosts();

	if (error) return <p>{error.message}</p>;

	if (isPending) return <p>...Loading</p>;

	//console.log(data);
	return (
		<div>
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

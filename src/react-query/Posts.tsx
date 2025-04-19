import React from "react";
import usePosts from "./hooks/usePosts.ts";

function Posts() {
	const pageSize = 10;
	const { isPending, data, error, fetchNextPage, isFetchingNextPage } = usePosts({ pageSize });

	if (error) return <p>{error.message}</p>;

	if (isPending) return <p>...Loading</p>;

	const btn = "p-3 bg-blue-500 text-white font-bold m-2 disabled:bg-gray-500";
	return (
		<div>
			{data.pages.map((page, i) =>
				<React.Fragment key={i}>
					{page.map((post) => (
						<div key={post.id} className="bg-amber-200 border-b-1 text-black text-left mb-2 p-1">
							<div className="border-b-1">Title: {post.title}</div>
							<div>{post.body}</div>
						</div>
					))}
				</React.Fragment>
			)}

			<button onClick={() => fetchNextPage()} disabled={isFetchingNextPage} className={btn}>{isFetchingNextPage ? "Loading..." : "Load More"}</button>
		</div>
	);
}

export default Posts;

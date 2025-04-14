import StopItWatch from "./stopWatch";

function StopWatch() {

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	const stop = new StopItWatch();

	return (
		<div>
			{stop.duration}
			<button onClick={() => stop.start()}>start</button>
			<button onClick={() => stop.stop()}>start</button>
		</div>
	);
}

export default StopWatch;

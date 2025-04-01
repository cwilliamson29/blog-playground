import StopItWatch from "./stopWatch";

function StopWatch() {

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

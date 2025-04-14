// declare class StopItWatch() {
// 	let startTime, endTime, running, duration = 0;
//
// 	this.start = function() {
// 		if (running) throw new Error("stopwatch is already running");
// 		startTime = new Date();
// 		running = true;
// 	};
// 	this.stop = function() {
// 		if (!running) throw new Error("stopwatch is not running");
// 		endTime = new Date();
// 		running = false;
//
// 		const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
// 		duration += seconds;
// 	};
// 	Object.defineProperties(this, "duration", {
// 		get: function() {
// 			return duration;
// 		}
// 	});
// }
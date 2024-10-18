import { TimerDisplay } from './TimerDisplay';

type SummaryProps = {
	totalTime: number;
	laps: number[];
	onBack: () => void;
};

export const Summary = ({ totalTime, laps, onBack }: SummaryProps) => {
	const averageLapTime = laps.length > 0 ? laps.reduce((acc, curr) => acc + curr, 0) / laps.length : 0;
	const fastestLap = laps.length > 0 ? Math.min(...laps) : 0;
	const slowestLap = laps.length > 0 ? Math.max(...laps) : 0;

	return (
		<div className='stopwatch__summary'>
			<div className='stopwatch__summary-item'>
				Total Time: <TimerDisplay time={totalTime} />
			</div>
			<div className='stopwatch__summary-item'>
				Average Lap: {laps.length > 0 ? <TimerDisplay time={averageLapTime} /> : 'No laps'}
			</div>
			<div className='stopwatch__summary-item'>
				Fastest Lap: {laps.length > 0 ? <TimerDisplay time={fastestLap} /> : 'No laps'}
			</div>
			<div className='stopwatch__summary-item'>
				Slowest Lap: {laps.length > 0 ? <TimerDisplay time={slowestLap} /> : 'No laps'}
			</div>
			<div className='stopwatch__summary-item'>Total Laps: {laps.length}</div>

			<button className='stopwatch__btn stopwatch__btn--back' onClick={onBack}>
				Back to Stopwatch
			</button>
		</div>
	);
};

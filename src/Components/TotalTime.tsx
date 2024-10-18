import { TimerDisplay } from './TimerDisplay';

type TotalTimeProps = {
	totalTime: number;
};

export const TotalTime = ({ totalTime }: TotalTimeProps) => {
	return (
		<div className='stopwatch__time'>
			<h2 className='stopwatch__label'>Total time</h2>
			<TimerDisplay time={totalTime} />
		</div>
	);
};

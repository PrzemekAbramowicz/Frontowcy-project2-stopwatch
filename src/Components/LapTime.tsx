import { TimerDisplay } from "./TimerDisplay";

type LapTimeProps = {
	lapTime: number;
};

export const LapTime = ({ lapTime }: LapTimeProps) => {
	return (
		<div className="stopwatch__time">
			<h2 className="stopwatch__label">Lap time</h2>
			<TimerDisplay time={lapTime} />
		</div>
	);
};

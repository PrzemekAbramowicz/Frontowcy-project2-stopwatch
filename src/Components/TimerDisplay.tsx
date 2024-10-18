type TimerDisplayProps = {
	time: number;
};

export const TimerDisplay = ({ time }: TimerDisplayProps) => {
	const formatTime = (miliseconds: number) => {
		const minutes = Math.floor(miliseconds / 60000);
		const seconds = Math.floor((miliseconds % 60000) / 1000);
		const ms = Math.floor((miliseconds % 1000) / 10);
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}:${ms < 10 ? '0' : ''}${ms}`;
	};

	return <div className="stopwatch__display">{formatTime(time)}</div>;
};

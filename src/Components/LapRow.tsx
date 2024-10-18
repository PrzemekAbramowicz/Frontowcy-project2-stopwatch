import { TimerDisplay } from './TimerDisplay';

type LapRowProps = {
	lapNumber: number;
	lapTime: number;
};

export const LapRow = ({ lapNumber, lapTime }: LapRowProps) => {
	return (
		<tr>
			<td>{lapNumber}</td>
			<td>
				<TimerDisplay time={lapTime} />
			</td>
		</tr>
	);
};

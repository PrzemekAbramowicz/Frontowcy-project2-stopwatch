type LapTableProps = {
	laps: number[];
};

const formatTime = (time: number) => {
	const minutes = Math.floor(time / 60000);
	const seconds = Math.floor((time % 60000) / 1000);
	const ms = Math.floor((time % 1000) / 10);
	return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}:${ms < 10 ? '0' : ''}${ms}`;
};

export const LapTable = ({ laps }: LapTableProps) => {
	return (
		<table className='stopwatch__lap-table'>
			<thead className='stopwatch__lap-table-head'>
				<tr className='stopwatch__lap-table-row'>
					<th className='stopwatch__lap-table-header'>Lap #</th>
					<th className='stopwatch__lap-table-header'>Time</th>
				</tr>
			</thead>
			<tbody className='stopwatch__lap-table-body'>
				{laps.map((lapTime, index) => (
					<tr key={index}>
						<td>{index + 1}</td>
						<td>{formatTime(lapTime)}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

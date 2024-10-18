import { useState, useEffect } from 'react';
import { TotalTime } from './TotalTime';
import { LapTime } from './LapTime';
import { Button } from './Button';
import { LapTable } from './LapTable';
import { Summary } from './Summary';

export const Stopwatch = () => {
	const [isStarted, setIsStarted] = useState(false);
	const [totalTime, setTotalTime] = useState(0);
	const [lapTime, setLapTime] = useState(0);
	const [laps, setLaps] = useState<number[]>([]);
	const [isRunning, setIsRunning] = useState(false);
	const [showSummary, setShowSummary] = useState(false);

	useEffect(() => {
		if (isRunning) {
			const interval = setInterval(() => {
				setTotalTime(prevTime => prevTime + 100);
				setLapTime(prevTime => prevTime + 100);
			}, 100);

			return () => {
				clearInterval(interval);
			};
		}
	}, [isRunning]);

	const handleStart = () => {
		setIsRunning(true);
		setShowSummary(false);
		setIsStarted(true);
	};

	const handleStop = () => {
		setIsRunning(false);
		setShowSummary(true);
	};

	const handleReset = () => {
		setTotalTime(0);
		setLapTime(0);
		setLaps([]);
		setShowSummary(false);
		setIsStarted(false);
		if (!isRunning) handleStart();
	};

	const handleLap = () => {
		if (isRunning) {
			setLaps([...laps, lapTime]);
			setLapTime(0);
		}
	};

	const handleBackToStopwatch = () => {
		setShowSummary(false);
		setTotalTime(0);
		setLapTime(0);
		setLaps([]);
		setIsStarted(false);
		setIsRunning(false);
	};

	return (
		<section className='stopwatch'>
			{showSummary ? (
				<Summary totalTime={totalTime} laps={laps} onBack={handleBackToStopwatch} />
			) : (
				<div className='stopwatch__container'>
					<TotalTime totalTime={totalTime} />
					<LapTime lapTime={lapTime} />
					<div className='stopwatch__btns'>
						<Button label='Start' onClick={handleStart} classname='start' />
						<Button
							label='Stop'
							onClick={handleStop}
							classname='stop'
							disabled={!isStarted && !isRunning}
						/>
						<Button
							label='Reset'
							onClick={handleReset}
							classname='reset'
							disabled={!isStarted && !isRunning}
						/>
						<Button label='Lap' onClick={handleLap} classname='lap' disabled={!isStarted && !isRunning} />
					</div>
					<LapTable laps={laps} />
				</div>
			)}
		</section>
	);
};

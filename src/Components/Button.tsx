type ButtonProps = {
	label: string;
	onClick: () => void;
	classname: string;
	disabled?: boolean;
};

export const Button = ({ label, onClick, classname, disabled }: ButtonProps) => {
	return (
		<button className={`stopwatch__btn stopwatch__btn--${classname}`} onClick={onClick} disabled={disabled}>
			{label}
		</button>
	);
};

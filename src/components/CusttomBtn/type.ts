export interface CustomBtnType {
	value: string;
	type: 'button' | 'submit' | 'reset' | undefined;
	bgColor: string;
	textColor: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	disabled?: boolean;
}

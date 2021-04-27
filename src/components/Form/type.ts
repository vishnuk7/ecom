export interface InputType {
	[k: string]: string;
}

export interface FormInputType {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	label: string;
	name: string | undefined;
	value: string | number | readonly string[] | undefined;
	type: string | undefined;
	required: boolean | undefined;
}

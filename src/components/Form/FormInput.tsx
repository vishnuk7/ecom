import { FormInputType } from './type';

const classes = {
	input: 'border-2 rounded-sm  py-2 bg-gray-300 text-lg',
	formGroup: 'flex flex-col',
};

export const FormInput: React.FC<FormInputType> = ({ handleChange, label, ...otherProps }) => {
	return (
		<div className={classes.formGroup}>
			<label>{label}</label>
			<input className={classes.input} onChange={handleChange} {...otherProps} />
		</div>
	);
};

import { CustomBtnType } from './type';

export const CustomBtn: React.FC<CustomBtnType> = ({ value, type, bgColor, textColor }) => {
	return (
		<button className={`${bgColor} ${textColor} px-7 py-3 mt-6`} type={type}>
			{value}
		</button>
	);
};

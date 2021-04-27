import { CustomBtnType } from './type';

export const CustomBtn: React.FC<CustomBtnType> = ({ value, type, bgColor, textColor, onClick }) => {
	return (
		<button onClick={onClick} className={`${bgColor} ${textColor} px-7 py-3 mt-6`} type={type}>
			{value}
		</button>
	);
};

import { FooterProps } from '../interfaces/interfaceFooter';
import FooterCustom from './FooterCustom';
const LayoutWithFooter = ({ children }: FooterProps) => {
	return (
		<>
			{children}
			<FooterCustom />
		</>
	);
};

export default LayoutWithFooter;

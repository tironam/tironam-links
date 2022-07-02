import { ReactNode } from 'react';
import { IconBtnWrap } from './IconBtn.styles';

type Props = {
	link: string;
	newTab?: string;
	icon: ReactNode;
};

const IconBtn: React.FC<Props> = ({ link, newTab, icon }) => (
	<IconBtnWrap href={link}>{icon}</IconBtnWrap>
);

export default IconBtn;

IconBtn.defaultProps = {
	newTab: '_blank',
};

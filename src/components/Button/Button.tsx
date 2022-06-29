import Wrapper from './Button.styles';

type Props = {
	children: string;
	link: string;
	newTab?: string;
};

const Button: React.FC<Props> = ({ link, children, newTab }) => (
	<Wrapper href={link} target={newTab}>
		{children}
	</Wrapper>
);

export default Button;

Button.defaultProps = {
	newTab: '_blank',
};

import styled from 'styled-components';

const ButtonStyles = styled.a`
	cursor: pointer;
	border-radius: 8px;
	text-align: center;
	font-family: 'Alata', sans-serif;
	color: #fff;
	margin: 16px auto;
	width: 50%;
	height: 36px;
	display: block;
	line-height: 34px;
	border: #fff 4px solid;
	text-decoration: none;
	&:hover {
		height: 40px;
		width: 52%;
		line-height: 36px;
	}
	@media (max-width: 480px) {
		width: 90%;
	}
`;

export default ButtonStyles;

import styled from 'styled-components';

export const ButtonWrap = styled.a`
	cursor: pointer;
	border-radius: 8px;
	text-align: center;
	font-family: 'Alata', sans-serif;
	color: #fff;
	margin: 16px auto;
	width: 50%;
	height: auto;
	display: block;
	line-height: 34px;
	border: #fff 4px solid;
	text-decoration: none;
	&:hover {
		transform: scale(1.1, 1.1);
	}
	@media (max-width: 480px) {
		width: 90%;
		height: auto;
	}
`;

export const BtnWrapper = styled.div`
	margin: 32px 0 100px 0;
`

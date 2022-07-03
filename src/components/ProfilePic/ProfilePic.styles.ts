import styled from 'styled-components';

const PicWrap = styled.img`
	width: '200px';
	border-radius: 110px;
	border: 5px solid #fff;
	display: block;
	margin: 0 auto 32px auto;
	@media (max-width: 480px) {
		width: 125px;
		border-radius: 110px;
	border: 5px solid #fff;
		margin: 0 auto 16px auto;
	}
`;

export default PicWrap;

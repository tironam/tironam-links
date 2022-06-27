import styled from 'styled-components';

const ProfilePic = styled.img`
	width: '200px';
	border-radius: 50px;
	border: 2px solid #fff;
	border-style: none;
	display: block;
	margin: 0 auto 32px auto;
	box-shadow: 10px 10px 0px #fff;
	@media (max-width: 480px) {
		width: 125px;
		border-radius: 32px;
		box-shadow: 8px 8px 0px #fff;
		margin: 0 auto 16px auto;
	}
`;

export default ProfilePic;

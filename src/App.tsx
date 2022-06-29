import React from 'react';
import Header from './components/Header';
import ProfilePic from './components/ProfilePic';
import Title from './components/Title';
import Text from './components/Text';
import picture from './profile.jpg';
import Button from './components/Button/Button';
import IconSection from './components/IconSection';
import IconBtn from './components/IconBtn';
import Footer from './components/Footer';
import './App.css';

import { FaTiktok, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const App = () => {
	let year = new Date().getFullYear();

	return (
		<>
			<Header>@tironam</Header>
			<ProfilePic src={picture} alt='Michael Tirona picture' />
			<Title>Michael Tirona</Title>
			<IconSection>
				<IconBtn href='https://www.tiktok.com/@tironam' target='_blank'>
					<FaTiktok />
				</IconBtn>
				<IconBtn
					href='https://www.instagram.com/tironam'
					target='_blank'
				>
					<FaInstagram />
				</IconBtn>
			</IconSection>
			<Text>Content creator, web developer, and artist</Text>
			<Text>For Business Inquiries:</Text>
			<IconSection>
				<IconBtn href='mailto:tironamichael@gmail.com'>
					<AiOutlineMail />
				</IconBtn>
			</IconSection>
			<Button link='https://tironam.com'>
				Web Development Portfolio
			</Button>
			{/* <Text>My Marvel Resource site:</Text> */}
			<Button link='https://mcuandyou.com'>
				My Marvel Resource site
			</Button>
			<Footer>
				Michael Tirona {year} | Built with TypeScript, React,
				Styled-Components, and React-Icons
			</Footer>
		</>
	);
};

export default App;

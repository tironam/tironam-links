import Header from './components/Header'
import ProfilePic from './components/ProfilePic/ProfilePic'
import Title from './components/Title'
import Text from './components/Text'
import picture from './profile.jpg'
import Button from './components/Button/Button'
import IconBtn from './components/IconBtn/IconBtn'
import Footer from './components/Footer'

import { BtnWrapper } from './components/Button/Button.styles'
import { Fwrapper } from './components/Footer'
import { IconSectionWrap } from './components/IconBtn/IconBtn.styles'

import './App.css'

import { FaTiktok, FaInstagram } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const App = () => {
  let year = new Date().getFullYear()

  return (
    <>
      <div className='wrapper'>
        <Header>@tironam</Header>
        <ProfilePic img={picture} alt='Michael Tirona picture' />
        <Title>Michael Tirona</Title>
        <IconSectionWrap>
          <IconBtn link='https://www.tiktok.com/@tironam' icon={<FaTiktok />} />
          <IconBtn
            link='https://www.instagram.com/tironam'
            icon={<FaInstagram />}
          />
          <IconBtn
            link='mailto:tironamichael@gmail.com'
            icon={<AiOutlineMail />}
          />
        </IconSectionWrap>
        <Text>Content creator, web developer, and artist</Text>
        <BtnWrapper>
          <Button link='https://bit.ly/3iKUN1F'>
            Get your own Ecto-1 1:8 scale model from Fanhome and use promo code
            BUSTERSGHOST
          </Button>
          <Button link='https://tironam.com'>Web Development Portfolio</Button>
          <Button link='https://mcuandyou.com'>My Marvel Resource site</Button>
        </BtnWrapper>
      </div>
      <Fwrapper>
        <Footer>
          Michael Tirona {year} | Built with TypeScript, React,
          Styled-Components, and React-Icons
        </Footer>
      </Fwrapper>
    </>
  )
}

export default App

import { ButtonWrap } from './Button.styles'

type Props = {
  children: string
  link: string
  newTab?: string
}

const Button: React.FC<Props> = ({ link, children, newTab }) => (
  <ButtonWrap href={link} target={newTab}>
    {children}
  </ButtonWrap>
)

export default Button

Button.defaultProps = {
  newTab: '_blank',
}

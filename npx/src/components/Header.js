import Wrapper from './Wrapper'

const Header = ({color, children}) => <Wrapper><h1 style={{color:color}}>{children}</h1></Wrapper>

export default Header
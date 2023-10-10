import { StylesHeader } from './styles'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/cadastro')
  } 

  return (
    <StylesHeader>
        <a href="" className={'tituloLogo'}>Dia a Dia</a>
        <nav className={'nav'}>
            <button onClick={handleClick} className={'linkComeceGratis'}>COMECE GRÁTIS</button>
            <Link to='/login' className={'linkLogin'}>Login</Link>
        </nav>
     </StylesHeader>  
  )
};
export default Header;
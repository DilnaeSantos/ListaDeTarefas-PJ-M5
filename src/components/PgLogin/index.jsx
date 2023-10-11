// import React from 'react'
import { StylesPgLogin } from './styles'
import { useNavigate } from 'react-router-dom'

const PgLogin = () => {
    const navigate = useNavigate()

    const handleClick = () => {
      navigate('/PagTafefas')
    } 
  return (

    <StylesPgLogin>
       <section className={'containerForm'}>
        <h1 className={'h1'}>DIA A DIA</h1>
        <form action="" className={'form'}>
            <label htmlFor="email-ou-usuario" className={'label'}>Email ou Usuario</label>
            <input type="text" name='email-ou-usuario' className={'input'} autoComplete='email' required/>
            <label htmlFor="senha" className={'label'}>Senha</label>
            <input type="password" name='senha' className={'input'} autoComplete='current_password' required/>
            <button onClick={handleClick} className={'button'}>Acessar</button>
        </form>
       </section>
     </StylesPgLogin>  
  )
};
export default PgLogin;
// import React from 'react'
import { StylesPgLogin } from './styles'

const PgLogin = () => {
  return (
    <StylesPgLogin>
        <section>
          <form action="">
            <label htmlFor="email-ou-usuario">Email ou Usuario</label>
            <input type="text" name='email-ou-usuario' required/>

            <label htmlFor="senha">Senha</label>
            <input type="text" name='senha' required/>

            <button>Acessar</button>
          </form>
        </section>
     </StylesPgLogin>  
  )
};
export default PgLogin;
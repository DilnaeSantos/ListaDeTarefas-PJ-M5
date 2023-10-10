// import React from 'react'
import { StylesLandingPage } from './styles'

const LandingPage = () => {
  return (
    <StylesLandingPage>
        <section className={'container'}>
          <div className={'textos'}>
            <h1 className={'titulo1'}>Melhor aplicativo de lista de tarefas</h1>
            <p className={'paragrafo1'}>Conheça o melhor aplicativo de lista de tarefas com definição de lembretes, atribuição de responsabilidade e filtros para controle. Conheça a solução mais completa do mercado e obtenha todos os recursos mais relevantes e úteis necessários para gerenciar tarefas em uma só plataforma.</p>
          </div>  
          <img className={'LP-1'} src="../../../../public/LP-1.png" alt="" />
        </section>
     </StylesLandingPage>  
  )
};
export default LandingPage;
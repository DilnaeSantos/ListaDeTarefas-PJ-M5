import styled from "styled-components";
import back from '/back.jpg'

export const StylesListaTarefas = styled.section`
  height: 100vh;
  background-image: url(${back});
  background-repeat: no-repeat;
  background-size: 100%;

  .criarPesquisar {
    display: flex;
    align-items: center;
  }

  .tituloMT {
    margin: 10% 2% 0% 6%;
  }

  .btnCriar {
    margin: 10% 3% 0% 0%;
    padding: 0.6% 2%;
    background-color: #09b9cd;
    border: none;
    border-radius: 0% 35%;
    transition: 0.2s;
  }

  .btnPesquisa {
    margin: 0% 2%;
    padding: 0.6% 2%;
    background-color: #09b9cd;
    border: none;
    border-radius: 0% 35%;
    transition: 0.2s;
  }

  .containerPesquisa {
    display: flex;
    width: 50%;
    margin: 10% 0% 0% 10%;
  }

  .inputPesquisa {
    width: 150%;
    font-size: 150%;
    padding: 0 5px;
  }

  .criarTarefa {
    margin: 6% 8% 0% 8%;
    display: flex;
    justify-content: center;
    background-color: #0bcee3;
    padding: 2%;
    border-radius: 10px 10px 0 0;
  }

  .inputTitulo {
    padding: 0px 5px;
  }

  .textArea {
    width: 40%;
    height: 40px;
    resize: none;
    padding: 11px 5px;
    margin: 0% 1%;
  }

  .Tarefa {
    margin: 0% 8% 0% 8%;
    background-color: #056e7a;
    padding: 1%; 
    border-radius: 0 0 10px 10px;
    max-height: 40%;
    overflow-y: scroll;
 }

  .descricaoTarefa {
    padding: 0 6px;
    max-width: 100%;
    max-height: 60px;
    overflow-y: scroll;
  }

  .LiTarefa {
    display: flex;
    margin: 0% 2% 1% 2%;
    padding: 1%;
    background-color: #fd3613b9;
    align-items: center;
    justify-content: space-around;
  }

  .divContainerConteudo {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
    color: #0bcee3;
  }

  .concluida {
    background-color: #09ac09;
  }

  .botaoConcluir {
    padding: 0;
  }

  .btnEditar {
    padding: 0.5%;
    background-color: #0bcee3;
    border: none;
    border-radius: 15%;
    transition: 0.2s;
  }

  .btnSalvar {
    padding: 0.5%;
    background-color: #4fe14f;
    border: none;
    border-radius: 15%;
    transition: 0.2s;
  }

  .btnExcluir {
    padding: 0.5%;
    background-color: #ff0000ca;
    border: none;
    border-radius: 15%;
    color: white;
    transition: 0.2s;
  }

  .btnConcluir {
    padding: 0.5%;
    background-color: #5ecc15cf;
    border: none;
    border-radius: 15%;
    transition: 0.2s;
  }

  .btnEditar:hover,
  .btnSalvar:hover,
  .btnExcluir:hover,
  .btnConcluir:hover,
  .btnCriar:hover,
  .btnPesquisa:hover {
    scale: 1.2;
    border-radius: 35% 0%;
  }
  
`
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { StylesListaTarefas } from "./styles";

const ListaTarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [novaDescricao, setNovaDescricao] = useState("");
  const [novaDataVencimento, setNovaDataVencimento] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [tarefaEditando, setTarefaEditando] = useState(null);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchQuery === "") {
      setTarefas(tarefasOriginal);
    } else {
      const tarefasFiltradas = tarefasOriginal.filter((tarefa) =>
        tarefa.titulo.toLowerCase().includes(searchQuery.toLowerCase())
      );

      const tarefaEncontrada = tarefasFiltradas.find((tarefa) =>
        tarefa.titulo.toLowerCase() === searchQuery.toLowerCase()
      );

      if (tarefaEncontrada) {
        tarefasFiltradas.splice(tarefasFiltradas.indexOf(tarefaEncontrada), 1);
        tarefasFiltradas.unshift(tarefaEncontrada);
      }

      setTarefas(tarefasFiltradas.concat(tarefas.filter((tarefa) => tarefa !== tarefaEncontrada)));
    }
  };

  const handleCriarTarefa = () => {
    if (novaTarefa && novaDescricao && novaDataVencimento) {
      const novaTarefaObj = {
        titulo: novaTarefa,
        descricao: novaDescricao,
        dataVencimento: novaDataVencimento,
        concluida: false,
      };

      setTarefas([...tarefas, novaTarefaObj]);

      setNovaTarefa("");
      setNovaDescricao("");
      setNovaDataVencimento("");
    }
  };

  const handleExcluirTarefa = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    setTarefas(novasTarefas);
  };

  const handleEditarTarefa = (index) => {
    setTarefaEditando(index);
    setNovaTarefa(tarefas[index].titulo);
    setNovaDescricao(tarefas[index].descricao);
    setNovaDataVencimento(tarefas[index].dataVencimento);
  };

  const handleSalvarEdicao = (index) => {
    if (novaTarefa && novaDescricao && novaDataVencimento) {
      const novasTarefas = [...tarefas];
      novasTarefas[index] = {
        titulo: novaTarefa,
        descricao: novaDescricao,
        dataVencimento: novaDataVencimento,
        concluida: novasTarefas[index].concluida,
      };
      setTarefas(novasTarefas);
      setTarefaEditando(null);
      setNovaTarefa("");
      setNovaDescricao("");
      setNovaDataVencimento("");
    }
  };

  const handleConcluirTarefa = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].concluida = !novasTarefas[index].concluida;
    setTarefas(novasTarefas);
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      handleCriarTarefa();
    }
  };

  const handleSearchKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchSubmit();
    }
  };

  const tarefasOriginal = [...tarefas];

  return (
    <StylesListaTarefas>
      <section className="criarPesquisar">
        <h2 className="tituloMT">Minhas Tarefas</h2>
        <button
          className="btnCriar"
          onClick={handleCriarTarefa}
          onFocus={handleCriarTarefa}
        >
          {tarefaEditando !== null ? "Criar" : "Criar"}
        </button>
        <div className="containerPesquisa">
          <input
            className="inputPesquisa"
            type="text"
            placeholder="Pesquisar Pelo Título"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyPress={handleSearchKeyPress} // Ative a pesquisa ao pressionar Enter
          />
          <button className="btnPesquisa" onClick={handleSearchSubmit}>Pesquisar</button>
        </div>
      </section>
      <section className="criarTarefa">
        <input
          className="inputTitulo"
          type="text"
          placeholder="Título da Tarefa"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <textarea
          className="textArea"
          placeholder="Descrição da Tarefa"
          value={novaDescricao}
          onChange={(e) => setNovaDescricao(e.target.value)}
        />
        <input
          type="date"
          value={novaDataVencimento}
          onChange={(e) => setNovaDataVencimento(e.target.value)}
          onKeyPress={handleEnterKeyPress} // Criar tarefa ao pressionar Enter no campo de data
        />
      </section>
      <section className="Tarefa">
        <ul>
          {tarefas.map((tarefa, index) => (
            <li
              key={index}
              className={"LiTarefa" + (tarefa.concluida ? " concluida" : "")}
            >
              <div className="divContainerConteudo">
                <p>titulo</p>
                <h3>{tarefa.titulo}</h3>
              </div>
              <div className="divContainerConteudo">
                <p className="pd">Descrição</p> 
              <p className="descricaoTarefa">{tarefa.descricao}</p>
              </div>
              <div className="divContainerConteudo">
                <p>Data de Entrega</p>
                <p>{tarefa.dataVencimento}</p>
              </div>
              {tarefaEditando === index ? (
                <button className="btnSalvar" onClick={() => handleSalvarEdicao(index)}>Salvar</button>
              ) : (
                <button className="btnEditar" onClick={() => handleEditarTarefa(index)}>Editar</button>
              )}
              <button className="btnExcluir" onClick={() => handleExcluirTarefa(index)}>Excluir</button>
              <button className="btnConcluir" onClick={() => handleConcluirTarefa(index)}>{tarefa.concluida ? "Desfazer" : "Concluir"}</button>
            </li>
          ))}
        </ul>
      </section>
    </StylesListaTarefas>
  );
};

export default ListaTarefas;

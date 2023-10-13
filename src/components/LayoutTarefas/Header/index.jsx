// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { StylesHeaderTarefas } from './styles';

const HeaderTarefas = () => {
  const [horas, setHoras] = useState('00');
  const [minutos, setMinutos] = useState('00');

  useEffect(() => {
    const intervalId = setInterval(function time() {
      let dateToday = new Date();
      let hr = dateToday.getHours();
      let min = dateToday.getMinutes();

      if (hr < 10) hr = '0' + hr;
      if (min < 10) min = '0' + min;

      setHoras(hr);
      setMinutos(min);
    }, 1000); // Atualiza a cada segundo

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
  }, []);

  return (
    <StylesHeaderTarefas>
      <h1 className={'titulo'}>DIA A DIA</h1>
      <section className={'relogio-container'} id="relogio-pai">
        <div className={'relogio'}>
          <div>
            <span id="horas">{horas}</span>
          </div>
          <div>:</div> {/* Adicione um separador entre as horas e os minutos */}
          <div>
            <span id="minutos">{minutos}</span>
          </div>
        </div>
      </section>
    </StylesHeaderTarefas>
  );
};

export default HeaderTarefas;

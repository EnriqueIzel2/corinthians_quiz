import React from 'react';
import PropTypes from 'prop-types';

import Widget from '../Widget';

function ResultWidget({ results }) {
  function totalAcertos() {
    const acertos = results.filter((acerto) => acerto).length;

    return acertos;
  }

  return (
    <Widget>
      <Widget.Header>Resultados</Widget.Header>

      <Widget.Content>
        <p>{`Você acertou ${totalAcertos()} questões`}</p>
        <ul>
          {results.map((result, index) => (
            <li key={`Questao__${index + 1}`}>
              {`#${index + 1} Resultado:`}
              {result === true ? ' Acertou' : ' Errou'}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

ResultWidget.propTypes = {
  results: PropTypes.arrayOf(PropTypes.bool).isRequired,
};

export default ResultWidget;

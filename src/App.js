import React, { Component } from 'react';

import Topo from './components/Topo';
import Destaque from './components/Destaque';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Contato from './components/Contato';
import Rodape from './components/Rodape';

class App extends Component {
  render() {
    return (
      <div>
        <Topo />
        <Destaque />
        <Sobre />
        <Servicos />
        <Contato />
        <Rodape />
      </div>
    );
  }
}

export default App;

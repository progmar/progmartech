import React, { Component } from 'react';
import { ToastsContainer, ToastsStore } from 'react-toasts';

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
        <ToastsContainer store={ToastsStore} lightBackground />
      </div>
    );
  }
}

export default App;

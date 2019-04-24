import React, { Component } from 'react';

class Servicos extends Component {
  render() {
    return (
      <section id="o-que-fazemos">
        <div className="container">
          <h2>Desenvolvendo ideais</h2>
          <div className="content">
            <p>A Progmar Technologies, não só fabrica softwares e soluções para seus clientes, mas também, como ajuda a desenvolver ideais. Onde ajudam os seus clientes a buscarem sempre o melhor em todas as áreas que atuam, como em seu trabalho, sua vida, seu círculo social. A Progmar, acredita que desde seu contato com o cliente até além disto, tudo se transformará em ideias, que serão seguidos.</p>
            <p>A Progmar Technologies, acredita que tudo que se faz, gera reação, então porquê, não gerar boas reações, não é mesmo. Venha ser parte da mudança, ajude-nos a criar uma WEB ainda mais inteligente.</p>
          </div>
          <div className="servicos d-flex justify-content-around flex-column flex-md-row">
            <div className="servico flex-fill">Soluções WEB</div>
            <div className="servico flex-fill">Sua marca na Internet</div>
            <div className="servico flex-fill">Aplicações mobile</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Servicos;

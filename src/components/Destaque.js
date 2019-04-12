import React, { Component } from 'react';

class Destaque extends Component {
  render() {
    return (
      <section id="destaque" className="d-flex justify-content-center align-items-center">
        <div className="container">
          <h1 className="tracking-in-expand-fwd">Bem vindo<br />à<br /><i>Progmar Technologies</i></h1>
        </div>
      </section>
    );
  }
}

export default Destaque;

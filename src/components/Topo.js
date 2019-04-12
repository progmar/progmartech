import React, { Component } from 'react';

class Topo extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      collapse: false
    };
  }

  render() {
    const { collapse } = this.state;
    return (
      <nav className="navbar sticky-top navbar-expand-md navbar-light bg-white">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={process.env.PUBLIC_URL + '/img/logo.svg'} alt="Progmar Technologies" />
          </a>
          <button onClick={() => this.setState({ collapse: !collapse })} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded={collapse} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={"collapse navbar-collapse" + ((collapse) ? ' show' : '')} id="menu">
            <div className="navbar-nav ml-auto">
              <a className="nav-item nav-link active" href="#quem-nos-somos">Quem nós somos</a>
              <a className="nav-item nav-link" href="#o-que-fazemos">O que fazemos</a>
              <a className="nav-item nav-link" href="#contato">Contato</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Topo;

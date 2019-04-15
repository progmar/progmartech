import React, { Component } from 'react';

class Rodape extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="d-flex">
            <a href="/">
              <img src={process.env.PUBLIC_URL + '/img/progmar-icon.png'} alt="Progmar Technologies" />
            </a>
            <div className="ml-auto social">
              <a href="https://www.facebook.com/progmartech">
                <img src={process.env.PUBLIC_URL + '/img/facebook.svg'} alt="Progmar Technologies - Facebook" />
              </a>
              <a href="https://www.linkedin.com/company/progmartech">
                <img src={process.env.PUBLIC_URL + '/img/linkedIn.svg'} alt="Progmar Technologies - LinkedIn" />
              </a>
            </div>
          </div>
          <hr />
          <div className="d-flex">
            © Progmar Technologies. Todos os direitos reservados.
            <a className="ml-auto back-to-top" href="#top">
              <img src={process.env.PUBLIC_URL + '/img/back-to-top.svg'} alt="Voltar ao Topo" />
              Voltar ao Topo
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Rodape;

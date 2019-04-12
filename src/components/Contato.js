import React, { Component } from 'react';

class Contato extends Component {
  render() {
    return (
      <section id="contato">
        <div className="container">
          <h2>Converse conosco</h2>
          <div className="content text-center">
            <p>Entre em contato conosco, e bata um papo. Ajude-nos à construir uma WEB ainda mais inteligente.</p>
          </div>
          <form>
            <div className="form-row">
              <div className="form-group col-12 col-md-4">
                <label className="sr-only" htmlFor="inputNome">Nome *</label>
                <input className="form-control" type="text" name="nome" id="inputNome" placeholder="Seu nome *" />
              </div>
              <div className="form-group col-12 col-md-4">
                <label className="sr-only" htmlFor="inputEmail">E-mail *</label>
                <input className="form-control" type="email" name="email" id="inputEmail" placeholder="Seu e-mail *" />
              </div>
              <div className="form-group col-12 col-md-4">
                <label className="sr-only" htmlFor="inputTelefone">Telefone *</label>
                <input className="form-control" type="tel" name="telefone" id="inputTelefone" placeholder="Seu telefone *" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <label className="sr-only" htmlFor="textareaMensagem">Mensagem *</label>
                <textarea className="form-control" name="mensagem" id="textareaMensagem" placeholder="Sua mensagem *"></textarea>
              </div>
            </div>
            <button type="submit" className="btn btn-progmar" disabled>Enviar</button>
          </form>
        </div>
      </section>
    );
  }
}

export default Contato;

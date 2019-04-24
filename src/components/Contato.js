import React, { Component } from 'react';
import { ToastsStore } from 'react-toasts';

class Contato extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      email: '',
      telefone: '',
      mensagem: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit (event) {
    window.emailjs.send(
      'default_service',
      'contato_progmar',
      {
        'nome': this.state.nome,
        'email': this.state.email,
        'telefone': this.state.telefone,
        'mensagem': this.state.mensagem
      }
    ).then(res => {
      ToastsStore.success('Mensagem enviada com sucesso!')

      this.setState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
      });
    }).catch(err => {
      ToastsStore.error('Erro ao enviar mensagem. Tente novamente!')
      
      console.error('Failed to send Contato. Error: ', err)
    });

    event.preventDefault();
  }

  render() {
    return (
      <section id="contato">
        <div className="container">
          <h2>Converse conosco</h2>
          <div className="content text-center">
            <p>Entre em contato conosco, e bata um papo. Ajude-nos à construir uma WEB ainda mais inteligente.</p>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="form-group col-12 col-md-4">
                <label className="sr-only" htmlFor="inputNome">Nome *</label>
                <input className="form-control" type="text" name="nome" id="inputNome" aria-labelledby="Nome" placeholder="Seu nome *" value={this.state.nome} onChange={this.handleChange} required />
              </div>
              <div className="form-group col-12 col-md-4">
                <label className="sr-only" htmlFor="inputEmail">E-mail *</label>
                <input className="form-control" type="email" name="email" id="inputEmail" aria-labelledby="E-mail" placeholder="Seu e-mail *" value={this.state.email} onChange={this.handleChange} required />
              </div>
              <div className="form-group col-12 col-md-4">
                <label className="sr-only" htmlFor="inputTelefone">Telefone *</label>
                <input className="form-control" type="tel" name="telefone" id="inputTelefone" aria-labelledby="Telefone" placeholder="Seu telefone *" value={this.state.telefone} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <label className="sr-only" htmlFor="textareaMensagem">Mensagem *</label>
                <textarea className="form-control" name="mensagem" id="textareaMensagem" aria-labelledby="Mensagem" placeholder="Sua mensagem *" value={this.state.mensagem} onChange={this.handleChange} required></textarea>
              </div>
            </div>
            <button type="submit" className="btn btn-progmar">Enviar</button>
          </form>
        </div>
      </section>
    );
  }
}

export default Contato;

import React, { Component } from 'react';

import Button from './components/Button';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      textoFrase: ''
    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = ['Frase 1', 'Frase 2', 'Frase 3'];
  }

  quebraBiscoito(){
    let state = this.state;
    let number = Math.floor(Math.random() * this.frases.length)

    state.textoFrase = this.frases[number];
    this.setState(state)
  }

  render(){
    return (
      <div>
        <img src={require('./assets/biscoito.png')}/>
        <Button conteudo='Abrir Biscoito' acaoBtn={this.quebraBiscoito}/>
        <h3>{this.state.textoFrase}</h3>
      </div>
    );
  }
}

export default App;

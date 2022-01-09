import React, { Component } from 'react';

import Button from './components/Button';
import Img from './components/Img';
import Frase from './components/Frase';

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

    state.textoFrase = '" ' + this.frases[number] + ' "';
    this.setState(state)
  }

  render(){
    return (
      <div className='container'>
        <Img />
        <Button conteudo='Abrir Biscoito' acaoBtn={this.quebraBiscoito}/>
        <Frase textoFrase={this.state.textoFrase}/>
      </div>
    );
  }
}

export default App;

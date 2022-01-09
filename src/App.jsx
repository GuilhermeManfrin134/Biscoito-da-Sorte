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

    this.frases = [
                    'A vida trará coisas boas se tiver paciência.', 
                    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.', 
                    'Não compense na ira o que lhe falta na razão.',
                    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
                    'A maior de todas as torres começa no solo.',
                    'Não há que ser forte. Há que ser flexível.',
                    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
                    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
                    'A juventude não é uma época da vida, é um estado de espírito.',
                    'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.'
                  ];
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

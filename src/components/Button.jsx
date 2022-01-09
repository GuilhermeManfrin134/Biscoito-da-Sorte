import React, { Component } from 'react';

import './Button.css'

class Button extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn} className='botao'>
                    {this.props.conteudo}
                </button>
            </div>
        )
    }
}

export default Button;
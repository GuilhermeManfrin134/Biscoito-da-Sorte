import React, { Component } from 'react';

class Button extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}>
                    {this.props.conteudo}
                </button>
            </div>
        )
    }
}

export default Button;
import React, { Component, PureComponent } from 'react';

import './Frase.css'

class Frase extends Component{
    render(){
        return(
            <div className='frase'>
                {this.props.textoFrase}
            </div>
        )
    }
}

export default Frase;
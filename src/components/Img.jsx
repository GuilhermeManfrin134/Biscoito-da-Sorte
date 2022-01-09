import React, { Component, PureComponent } from 'react';

import './Img.css'

class Img extends Component{
    render(){
        return(
            <div className='imagem'>
                <img src={require('../assets/biscoito.png')}/>
            </div>
        )
    }
}

export default Img;
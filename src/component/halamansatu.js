import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Dua from './halamandua';


class Satu extends Component {
    constructor(){
        super()
        this.state={
            nama: ""
        }
    }
    
    klik(){
        this.setState({
            nama: this.refs.userInput.value
        })
    }

    render() {
        
        return (
        <div>
            Nama:
        <br/>
        <input type='text' ref="userInput"/>

        <button onClick={() => this.klik()}> Klik </button>

        {/* <Dua id={this.state.nama}/> */}
            
        </div>
        );
    }
}

export default Satu;
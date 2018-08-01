import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';


import Satu from './component/halamansatu';
import Dua from './component/halamandua';



class App extends Component {
  render() {

    return (
      <div>
        <div className="tabmenu">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active"><Link to="/">Login </Link></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"><Link to="/Dua">Welcome</Link></a>
                </li>
            </ul>
        </div>
       
        <div>
          <Route exact path='/' component={Satu}/>
          <Route path='/Dua' component={Dua}/>
          
        </div>

       
      </div>
    );
  }
}

export default App;

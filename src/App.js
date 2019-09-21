import React, {Component} from 'react';
import TempConvert from './components/TempConvert'
import Calculator from './components/Calculator';
import Weather from './components/Weather';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
    }
  }
  
  render() {
    return(
      <div id="main-container">
        <div className="apps">
           <Calculator />
        </div>
        <div className="apps">
           <TempConvert />
        </div>
        <div className="apps">
           <Weather />
        </div>
      </div>
    );
  }
}

export default App;

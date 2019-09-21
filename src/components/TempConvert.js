import React, {Component} from 'react';

class TempConvert extends Component{

    constructor(props){
      super(props);
      this.state = {
        C:'',
        F:'',
        K:''
      }
    }

    getKeyC = (e)=>{
      let key = e.currentTarget.value;
      this.setState({C:key},()=>{
        let c = this.state.C;
        let newF = c==""?"": (9/5) * c + 32;
        let newK =  c==""?"": c + 273.15;

        this.setState({F:newF,K:newK});

      });
    }
    getKeyF = (e)=>{
      let key = e.currentTarget.value;
      this.setState({F:key},()=>{
        let f = this.state.F;
        let newC =  f==""?"": (5/9) * (f - 32);
        let newK =  f==""?"": (f - 32) * 5/9 + 273.15;

        this.setState({C:newC,K:newK});
      });
    }
    getKeyK = (e)=>{
      let key = e.currentTarget.value;
      this.setState({K:key},()=>{
        let k = this.state.K;
        let newC =  k==""?"":  k - 273.15;
        let newF =  k==""?"": (k - 273.15) * 9/5 + 32;

        this.setState({F:newF,C:newC});
      });
    }

  render() {
    return(
        <div id="temp-body">
           <label>
             <span>Celsius</span>
             <input type="number" placeholder="C" value={this.state.C} onChange={this.getKeyC}/>
           </label>
           <label>
              <span>Fahrenheit </span>
              <input type="number" placeholder="F" value={this.state.F} onChange={this.getKeyF}/>
           </label>
           <label>
              <span>Kelvin</span>
             <input type="number" placeholder="K" value={this.state.K} onChange={this.getKeyK}/>
           </label> 
           
        </div>
    );
  }
}

export default TempConvert;

import React, {Component} from 'react';
import Button from './Button'

class Calculator extends Component{

    constructor(props){
      super(props);
      this.state = {
        expression:"0"
      }
    }
    setExpression = (str)=>{
      let exp = this.state.expression.toString();

      if(str=='Clear' || exp=="SyntaxError" || exp=="NaN"){
        this.setState({expression:'0'});
      }
      else if(str=='Del'){
        if(exp.length==1 || exp.length==0){
          this.setState({expression:'0'});
        }
        else
         this.setState({expression: exp.substring(0,exp.length-1 )});
      }
      else if(str=='='){
        try{
          let result=eval(exp);
          this.setState({expression: result});
        }catch(ex){
          this.setState({expression: "SyntaxError"});
        }
      } 
      else{
        if(exp=="0"){
          this.setState({expression:""}, ()=>{ this.setState({expression:this.state.expression+str})});
        }
        else{
          this.setState({expression:this.state.expression+str});
        }
      }

    }

  render() {
    return(

      <div id="calc-body">
        <div>
          <input value={this.state.expression} />
        </div>
        <div className="btn-row">
            <Button btnClass="clear" expressionHandler={this.setExpression}>Clear</Button>
            <Button btnClass="opt" expressionHandler={this.setExpression}>Del</Button>
            <Button btnClass="opt" expressionHandler={this.setExpression}>+</Button>
        </div>
        <div className="btn-row">
            <Button expressionHandler={this.setExpression}>1</Button>
            <Button expressionHandler={this.setExpression}>2</Button>
            <Button expressionHandler={this.setExpression}>3</Button>
            <Button btnClass="opt" expressionHandler={this.setExpression}>-</Button>
        </div>
        <div className="btn-row">
            <Button expressionHandler={this.setExpression}>4</Button>
            <Button expressionHandler={this.setExpression}>5</Button>
            <Button expressionHandler={this.setExpression}>6</Button>
            <Button btnClass="opt" expressionHandler={this.setExpression}>*</Button>
        </div>

        <div className="btn-row">
            <Button expressionHandler={this.setExpression}>7</Button>
            <Button expressionHandler={this.setExpression}>8</Button>
            <Button expressionHandler={this.setExpression}>9</Button>
            <Button btnClass="opt" expressionHandler={this.setExpression}>/</Button>
        </div>
        <div className="btn-row">
            <Button expressionHandler={this.setExpression}>0</Button>
            <Button expressionHandler={this.setExpression}>.</Button>
            <Button btnClass="opt"  expressionHandler={this.setExpression}>%</Button>
            <Button btnClass="opt" expressionHandler={this.setExpression}>=</Button>
        </div>
      </div>
      

    );
  }
}

export default Calculator;

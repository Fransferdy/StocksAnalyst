import React, { Component } from 'react';
import AjaxJsonForm, {NumberInput, SubmitButton,AutoCompleteFetchTextBox} from '../AjaxJsonForm';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';


class AddStock extends Component {

submitCallBack(data){
  //console.log("Response");
  console.log(data.status);
}

yahooDataToOptionList(data)
{
  console.log("Called");
  return data.ResultSet.Result.map((elem)=>{return elem.symbol+" -|- "+elem.name+" -|- "+elem.exchDisp});
}

  render() {
    return (
      <div className="App">
         <h2>Stock Add</h2>

        <AjaxJsonForm formid="myform" path="/api/stock" method="PUT" submitCallBack={this.submitCallBack}>
         <NumberInput name="anumber"/> <br/>
         <AutoCompleteFetchTextBox 
         name="fetchtextbox" 
         dataDomain="http://localhost:3030" 
         paramsTemplate="/api/stockname?query={0}"
         params={[]} 
         getDataFunction={this.yahooDataToOptionList}
         /> <br/>
         <SubmitButton/>
        </AjaxJsonForm>
       
      </div>
    );
  }
} 

export default AddStock ;

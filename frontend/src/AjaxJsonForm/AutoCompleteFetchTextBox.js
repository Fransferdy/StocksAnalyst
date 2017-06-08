
import React, { Component } from 'react';

require('es6-promise').polyfill();
require('isomorphic-fetch');

if (!String.formatAutoComplete) {
    String.prototype.formatAutoComplete = function (args) {
      var strin;
      /*return str.replace(String.prototype.formatAutoComplete.regex, function(item) {
        var intVal = parseInt(item.substring(1, item.length - 1));
        var replace;
        if (intVal >= 0) {
          replace = args[intVal];
        } else if (intVal === -1) {
          replace = "{";
        } else if (intVal === -2) {
          replace = "}";
        } else {
          replace = "";
        }
        return replace;
      });*/

      args.forEach((arg, index)=>{
        strin = this.split(`{${index}}`).join(arg);
      });
      return strin;

    };
  }

class AutoCompleteFetchTextBox extends Component {
  constructor() {
      super();

      this.state = {
        text: '',
        suggestions : []
      };
      this.timer = null;
      this.onChangeText = this.onChangeText.bind(this);
      this.getAutoCompleteOptions = this.getAutoCompleteOptions.bind(this);
    }

   /*
   @dataUrl = "www.google.com"
   @dataRequestParametersTemplate = /?q={0}&p={1}&c={2}
   @dataRequestParameters = ["param1","param2","param3"]
   @getDataFunction = function(RESPONSE JSON r)
                      //process data
                      return [optionValue1,optionValue2...]
   */
  getAutoCompleteOptions(dataDomain,dataPathWithParametersTemplate,dataRequestParameters,getDataFunction){ 
  var requestUrl,queryParam, parameters;

  queryParam = this.input.value;
  parameters = [queryParam];
  parameters.concat(dataRequestParameters);
  requestUrl = dataDomain + dataPathWithParametersTemplate.formatAutoComplete(parameters);

  var ajaxConfig = {
      method: "GET",
      mode: 'no-cors'
    };


  fetch(requestUrl,ajaxConfig)
    .then(r => r.json())
    .then(data => getDataFunction(data))
    .then(data => this.setState({ suggestions:data }));
 }

 onChangeText() {
   //console.log('entrou');
   const { target: { value } } = event;
   this.setState({ text: value });

   
   if (this.timer) {
      clearTimeout(this.timer);
   }
   this.timer = setTimeout(() => { 
     this.getAutoCompleteOptions(this.props.dataDomain,this.props.paramsTemplate,this.props.params,this.props.getDataFunction) 
    }, 
    500);
   
  // this.getAutoCompleteOptions(this.props.dataDomain,this.props.paramsTemplate,this.props.params,this.props.getDataFunction);
 }

  renderFetch(suggestions) {
    return suggestions.map((suggestion, index) => {
        const time = new Date().getTime() + index;
        return <option key={time} value={suggestion} />;
    });
  }

  render() {
    const { state: { text,suggestions } } = this; //extractor
    var languageList = "languageList"+this.props.name;
    return (
      <div> 
        <input
          type="text"
          name={this.props.name}
          ref={(input) => this.input = input}
          placeholder={this.props.placeholder}
          value={text}
          onChange={this.onChangeText}
          list={languageList}
        />
        <datalist id={languageList}>
          {this.renderFetch(suggestions)}
        </datalist>
      </div>
    );
  }

}

export default AutoCompleteFetchTextBox;

//onkeypress={(evt) => {return this.getAutoCompleteOptions(evt,this.props.getDataFunction,this.props.dataURL)}}/>

import React, { Component } from 'react';
import lfc from 'lodash-form-collector'
import PropTypes from 'prop-types';

require('es6-promise').polyfill();
require('isomorphic-fetch');

class AjaxForm extends Component {

  submit(evt,submitCallBack)
  {
    evt.preventDefault();

    const form = document.getElementById(this.props.formid);
    const data = lfc(form);

    var ajaxConfig = {
      method: this.props.method, 
      body: JSON.stringify(data), 
      headers: new Headers({'content-type': 'application/json'})
    };

    console.log(ajaxConfig);

    fetch(this.props.path,ajaxConfig)
    .then(r => r.json())
    .then(data => submitCallBack(data)
    );
    return false;
  }

  render() {
    return ( 
        <form id={this.props.formid} onSubmit={(evt) => {return this.submit(evt,this.props.submitCallBack)}} >
        {this.props.children}
        </form>
    );
  }
} 

AjaxForm.propTypes = {
  formid: PropTypes.string
};

export default AjaxForm;


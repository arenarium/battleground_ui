import React from 'react';
import {connect} from "react-redux"
import {Dropdown, Grid, Container, Form} from 'semantic-ui-react'
import {uploadFormChange, uploadFormSubmit} from '../actions/CodeUpload.js'


function onChange_me(a,b){
  console.log(a);
  console.log(b);
  console.log(b.name);
  console.log(b.value);
}

const FileUploadForm = ({values, onChange, onSubmit}) => {
  console.log('ksdjfhlsdafj');
console.log(values);
return (
  <Form onSubmit={onSubmit}>
    <Form.Input type='text' placeholder='Enter a name for your agent' name='agentName' label='Agent Name' onChange={onChange} />
    <Form.Input type='file'  name='file' label='Choose a file' onChange={onChange}/>
    <Form.Button content='Submit' />
  </Form>
)
}

const mapStateToProps = state => {
  return {
    values: state.codeUpload.values
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange:  (e, target) => {
      onChange_me(e, target)
      dispatch(uploadFormChange(target.name, target.value))
    },
    onSubmit:  () => {dispatch(uploadFormSubmit())},

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FileUploadForm)

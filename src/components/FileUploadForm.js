import React, { Component } from 'react'
import {connect} from "react-redux"
import {Form, Input} from 'semantic-ui-react'
import {uploadFormChange, uploadFormSubmit} from '../actions/CodeUpload.js'

// const file_change = (e) => {
//   var selectedFile = e.files[0]
//   var reader = new FileReader();
//   //reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
//   reader.onload = ((data) => {console.log(data.target.result);} )
//   reader.readAsText(selectedFile);
//   // console.log(selectedFile.name);
//   // console.log(selectedFile.file);
//   // console.log(e)
//   // console.log(e.type)
//   // console.log()
// }

class FileUploadForm extends Component {
  constructor(props) {
    super(props);
    this.fileRef = React.createRef();
  }
render() {
  var {formData, didSubmit, onChange, onSubmit} = this.props
return (
  <Form onSubmit={() => onSubmit(formData)}>
    <Form.Input
      value={formData.gameType}
      type='text'
      placeholder='Choose Game Type'
      name='gameType'
      label='Game Type'
      onChange={ (e) => onChange(e.target)} />

    <Form.Input
      value={formData.agentName}
      type='text'
      placeholder='Enter a name for your agent'
      name='agentName'
      label='Agent Name'
      onChange={ (e) => onChange(e.target)} />

    <Form.Field>
      <label>Choose a File</label>
      <Input type='file' name='file' id='fileInput' ref={this.fileRef} onChange={ (e) => onChange(this.fileRef.current.inputRef)}/>
    </Form.Field>
    <Form.Button active={didSubmit}>Submit</Form.Button>
  </Form>

)
}
}

const mapStateToProps = state => {
  return {
    formData: state.codeUpload.formData,
    didSubmit: state.codeUpload.didSubmit
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange:  (target) => {dispatch(uploadFormChange(target))},
    onSubmit:  (formData) => {dispatch(uploadFormSubmit(formData))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FileUploadForm)
// <Form.Input
//   id='fileInput'
//   type='file'
//   name='file'
//   label='Choose a File'
//   onChange={file_change}/>

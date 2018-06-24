import React, { Component } from 'react'
import {connect} from "react-redux"
import {Form, Input, Message} from 'semantic-ui-react'
import {uploadFormChange, uploadFormSubmit, codeUploadFail} from '../actions/CodeUpload.js'
import GameTypeSelector from './GameTypeSelector'
import {Link} from 'react-router-dom'


class FileUploadForm extends Component {
  constructor(props) {
    super(props);
    this.fileRef = React.createRef();
  }

  formValidation(formData){
    var errors = {}

    if (formData.file === '') {
      errors['file'] = 'You must choose a file.'
    }else{
      errors['file'] = null
    }

    if (formData.agentName.length === 0) {
      errors.agentName = 'You must enter a name for your agent.'
    } else {
      errors.agentName = null
    }

    return errors
  }

  numErrors(errors){
    var num = 0
    for (var key in errors) {
      if (errors.hasOwnProperty(key)) {
        if (errors[key] !== null){
          num +=1
        }
      }
    }
    return num
  }

  submit(formData){
    var errors = this.formValidation(formData)
    // console.log(errors);
    this.props.onError(errors)
    if (this.numErrors(errors) === 0) {
      this.props.onSubmit(formData)
    }
  }

  render() {
    var {formData, didSubmit, errors, onChange} = this.props
    var errorMessages = []
    for (var key in errors) {
      if (errors.hasOwnProperty(key)) {
        if (errors['key'] !== null){
          errorMessages.push(<p key={key}>{errors[key]}</p>)
        }
      }
    }
    return (
      <Form onSubmit={() => this.submit(formData)}
        error={this.numErrors(errors)>0}
        success={this.props.submitStatus}>
        <Form.Field>
          <label>Game Type</label>
          <GameTypeSelector
            value={formData.gameType}
            name='gameType'
            onChange={ (e) => onChange(e.target)}/>
        </Form.Field>

        <Form.Input
          error={errors.agentName!==null}
          value={formData.agentName}
          type='text'
          placeholder='Enter a name for your agent'
          name='agentName'
          label='Agent Name'
          onChange={ (e) => onChange(e.target)} />

        <Form.Field error={errors.file!==null}>
          <label>Choose a File</label>
          <Input type='file' name='file' id='fileInput' ref={this.fileRef} onChange={ (e) => onChange(this.fileRef.current.inputRef)}/>
        </Form.Field>
        <Form.Button active={!didSubmit} disabled={didSubmit} color='blue'>Submit</Form.Button>
        <Message error>
          {errorMessages}
        </Message>
        <Message success>
          Code was uploaded successfully!
          <br/>
          <Link to={'/stats/agent/'+this.props.agentID}>
            See your agent's recent games here.
          </Link>
        </Message>

      </Form>

    )
  }
}

const mapStateToProps = state => {
  return {
    formData: state.codeUpload.formData,
    errors: state.codeUpload.errors,
    didSubmit: state.codeUpload.didSubmit,
    submitStatus: state.codeUpload.success,
    agentID: state.codeUpload.agentID
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange:  (target) => {dispatch(uploadFormChange(target))},
    onSubmit:  (formData) => {dispatch(uploadFormSubmit(formData))},
    onError: (errors) => {dispatch(codeUploadFail(errors))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FileUploadForm)
// <Form.Input
//   id='fileInput'
//   type='file'
//   name='file'
//   label='Choose a File'
//   onChange={file_change}/>

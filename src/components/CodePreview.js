import React from 'react';
import {connect} from "react-redux"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';

const CodePreview = ({code_string}) => {
  var return_value = <SyntaxHighlighter language='python' style={docco}>{code_string}</SyntaxHighlighter>
  return return_value
}

const mapStateToProps = state => {
  return {
    code_string: state.codeUpload.formData.file,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CodePreview)

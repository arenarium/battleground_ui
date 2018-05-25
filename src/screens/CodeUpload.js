import React from 'react';
import {Segment, Container, Header, Divider} from 'semantic-ui-react'
import FileUploadForm from '../components/FileUploadForm'
import CodePreview from '../components/CodePreview'

const CodeUpload =() => (
  <Segment vertical>
    <Container>
      <Header>Join the fun, upload your player code.</Header>
      <Segment>
        <FileUploadForm/>
        <Divider/>
        <CodePreview/>
      </Segment>
    </Container>
  </Segment>
)

export default CodeUpload

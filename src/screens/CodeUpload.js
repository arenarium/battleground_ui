import React from 'react';
import {Segment, Container, Header, Divider} from 'semantic-ui-react'
import FileUploadForm from '../components/FileUploadForm'
import CodePreview from '../components/CodePreview'

const CodeUpload =() => (
  <Segment vertical>
    <Container>
      <Header>Join the fun, upload your player code.</Header>
      <p>Need some help getting started?
        Checkout the <a href='https://github.com/arenarium/battleground_agent_template'>agent templates.</a></p>
      <Segment>
        <FileUploadForm/>
        <Divider/>
        <div>Preview:</div>
        <CodePreview/>
      </Segment>
    </Container>
  </Segment>
)

export default CodeUpload

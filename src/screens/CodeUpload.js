import React from 'react';
import {Segment, Container, Header, Divider, Message} from 'semantic-ui-react'
import FileUploadForm from '../components/FileUploadForm'
import CodePreview from '../components/CodePreview'

const CodeUpload =() => (
  <Segment vertical>
    <Container>
      <Header>
        Join the fun, upload your player code.
      </Header>
      <Message info>
        <Message.Header>
          Need some help getting started?
        </Message.Header>
        <p>
          Dowload the&nbsp;
          <a href='https://github.com/arenarium/battleground_agent_template'>
            Agent Templates,&nbsp;
          </a>
          and check out the&nbsp;
          <a href='https://arenarium.readthedocs.io/'>
            Getting Started Guide.
          </a>
        </p>
      </Message>
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

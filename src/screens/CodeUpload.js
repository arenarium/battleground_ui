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
      <Message>
        <Message.Header>
          Need some help getting started?
        </Message.Header>
        <p>
          The fastest way to get started is to simply upload one of the&nbsp;
          <a target="_blank" rel="noopener noreferrer" href='https://github.com/arenarium/battleground_agent_template'>
            Agent Templates.&nbsp;
          </a>
          <br/>
          Check out the&nbsp;
          <a target="_blank" rel="noopener noreferrer" href='https://arenarium.readthedocs.io/'>
            Getting Started Guide &nbsp;
          </a>
          to learn how to write your own agent.
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

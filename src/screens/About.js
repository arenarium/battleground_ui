import React from 'react'
import {Segment, Container, Header} from 'semantic-ui-react'

const About = () =>(
<div>
  <Segment inverted vertical className='welcome'>
    <Container text className='welcome_message'>
      <Header as='h1' inverted>Build a new world.</Header>
      <p>Play by writing code. Learn AI by playing.</p>
    </Container>
    </Segment>
    <Segment vertical>
    <Container text className='welcome_message'>
      <Header as='h1' inverted>100% Open Source</Header>
      <p>
        Arenarium is 100% open source and you can <a href='https://github.com/arenarium'> find us on github.</a>
      </p>
      <p>
        If you find a problem or have a questions, let us know by filing an issue on github,
        <a href='https://twitter.com/vincentropy'> or find us on twitter.</a>
        </p>
        <p>
        This project is a volunteer effort, and costributions are welcome.
      </p>
    </Container>
  </Segment>
</div>
)

export default About

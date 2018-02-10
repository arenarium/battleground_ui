import React from 'react'
import {Segment, Container, Header, Button} from 'semantic-ui-react'

const About = () =>(

  <Segment inverted vertical className='welcome'>
    <Container text className='welcome_message'>
      <Header as='h1' inverted>Build a new world.</Header>
      <p>Collaborative game-building and computer player battle ground.</p>
    </Container>
    <Container text className='welcome_message'>
      <Header as='h1' inverted>In the beginning...</Header>
      <p>Here is some backstory.</p>
    </Container>
  </Segment>

)

export default About

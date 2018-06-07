import React from 'react'
import {Segment, Container, Header, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const Welcome = () =>(

  <Segment inverted vertical className='welcome'>
    <Container text className='welcome_message'>
      <Header as='h1' inverted>Build,  Deploy,  Win.</Header>
      <p>Collaborative game-building and computer player battle ground.</p>
      <Button as={Link} to="/games">
        Observe Games
      </Button>
      or
      <Button as={Link} to="/upload">
        Join
      </Button>
    </Container>
  </Segment>

)

export default Welcome

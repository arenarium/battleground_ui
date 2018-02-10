import React from 'react'
import {Segment, Container, Header, Button} from 'semantic-ui-react'


const Welcome = () =>(

  <Segment inverted vertical className='welcome'>
    <Container text className='welcome_message'>
      <Header as='h1' inverted>Build,  Deploy,  Win.</Header>
      <p>Collaborative game-building and computer player battle ground.</p>
      <Button>
        Observe Games
      </Button>
      or
      <Button>
        Join
      </Button>
    </Container>
  </Segment>

)

export default Welcome

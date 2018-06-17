import React from 'react'
import {Segment, Container, Header, Button, Card, Image, Icon, Message} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const Welcome = () =>(
  <div>
    <Segment inverted vertical className='welcome'>
      <Container textAlign='center' text className='welcome_message'>
        <Header as='h1' inverted>
        Arenarium
      </Header>
      <p>
          Play by writing code, Learn to code AI.
        </p>
        <br/>
        <Button primary as={Link} to="/games">
          Watch a game
        </Button>
        <span style={{padding:'.5em'}}>
          or
        </span>
        <Button primary as={Link} to="/upload">
          Play
        </Button>
      </Container>
    </Segment>
    <Segment vertical>
      <Container>
        <Card.Group centered stackable itemsPerRow={4}>
          <Card>
            <Image
              centered
              size='medium'
              src='/images/code.jpeg'/>
            <Card.Content>
              <Card.Header>
                Design your Gladiator
              </Card.Header>
              <Card.Description>
                Write python code to build a gladiator.
                You can write and test your code on your local machine and
                test it against others by uploading your code here.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image
              centered
              size='medium'
              src='/images/game_board.jpeg'/>
            <Card.Content>
              <Card.Header>
                Watch your agents play others.
              </Card.Header>
              <Card.Description>
                Arenarium provides a game environment where your code can compete against others.
                You just write the code for your agent, we take care of everything else.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image
              centered
              size='medium'
              src='/images/nerves.jpeg'/>
            <Card.Content>
              <Card.Header>
                Learn to build AI by playing.
              </Card.Header>
              <Card.Description>
                Agents in arenarium have memory and can learn over time.
                The only limit is your imagination.
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
      </Segment>
      <Segment vertical>

      <Container textAlign='center'>
        <Message>
            Arenarium is in active development. Help us improve Arenarium
            <a href='https://github.com/arenarium/battleground_core'> by reporting issues/questions on github.</a>
        </Message>
        <a href='https://github.com/arenarium'>
        <p>Find us on GitHub <Icon name='github'/></p>
        </a>
      </Container>
    </Segment>
  </div>
)

export default Welcome

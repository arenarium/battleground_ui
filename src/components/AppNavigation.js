import React from 'react'
import {Link} from 'react-router-dom'
import { Menu, Container, Segment } from 'semantic-ui-react'

export const AppNavigation = () =>(
<Segment inverted vertical className='welcome'>
  <Menu inverted>
    <Container>
    <Menu.Item as={Link} to={"/"}>
          Battleground
    </Menu.Item>


    <Menu.Item as={Link} to="/games">
          Watch
    </Menu.Item>

    <Menu.Item as={Link} to="/upload">
          Play
    </Menu.Item>

    <Menu.Item as={Link} to="/stats">
          Leader Board
    </Menu.Item>

    <Menu.Item as={Link} to="/about">
          Story
    </Menu.Item>

    </Container>
  </Menu>
</Segment>

);

import React from 'react'
import {Link} from 'react-router-dom'
import { Menu, Segment, Icon} from 'semantic-ui-react'

export const AppNavigation = () =>(
<Segment inverted vertical className='welcome'>
  <Menu inverted>

    <Menu.Item borderless='true' as={Link} to={"/"} position='left'>
      <Icon name='home'/>
      Arenarium

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

  </Menu>
</Segment>

);

import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';

import { Button, Welcome } from '@storybook/react/demo';

import {StateNav} from "../components/StateNav"
import {ArenaState} from "../components/ArenaState"

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('State Navgator', module)
  .add("Default", () => <StateNav stateIndex={5}  length={50}/> )

storiesOf('State Drawing', module)
  .add("ArenaState", () => <ArenaState stateIndex={5}  length={50}/> )

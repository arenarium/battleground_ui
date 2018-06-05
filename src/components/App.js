import React, { Component } from 'react';
import '../styles/App.css';
import Welcome from "../screens/Welcome"
import About from "../screens/About"
import GameViewer from "../screens/GameViewer"
import PlayerStats from "../screens/PlayerStats"
import CodeUpload from "../screens/CodeUpload"
import {AppNavigation} from '../components/AppNavigation'

import {Route} from 'react-router-dom'
import { ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

class App extends Component {

  render() {
    return (
      <div className="App">
        <ConnectedRouter history={history}>
          <div>

            <AppNavigation/>
            <Route exact path="/" component={Welcome}/>
            <Route  path="/about" component={About}/>
            <Route  exact path="/games" component={GameViewer}/>
            <Route  exact path="/stats" component={PlayerStats}/>
            <Route  exact path="/upload" component={CodeUpload}/>
            <Route  path="/games/:gameID/:stateIndex" component={GameViewer}/>
            <Route  path="/stats/:gameType/:owner/:agentName" component={PlayerStats}/>
          </div>
        </ConnectedRouter>
      </div>

    );
  }
}

export default App

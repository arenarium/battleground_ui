import React, { Component } from 'react';
import {connect} from "react-redux"
import '../styles/App.css';
import Welcome from "../screens/Welcome"
import About from "../screens/About"
import GameViewer from "../screens/GameViewer"
import PlayerStats from "../screens/PlayerStats"
import CodeUpload from "../screens/CodeUpload"
import {AppNavigation} from '../components/AppNavigation'

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import {fetchGames, doAutoPlay} from "../actions/GameViewer"

class App extends Component {
  constructor(props){
    super(props)
    this.playing=false
  }

  componentDidMount(){
    this.props.populateGameList("basic_game")
    if (!this.playing){
      this.playing=true
      this.props.doAutoPlay(1500)
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>

            <AppNavigation/>
            <Route exact path="/" component={Welcome}/>
            <Route  path="/about" component={About}/>
            <Route  exact path="/games" component={GameViewer}/>
            <Route  exact path="/stats" component={PlayerStats}/>
            <Route  exact path="/upload" component={CodeUpload}/>
            <Route  path="/games/:gameID/:stateIndex" component={GameViewer}>
              <GameViewer/>
            </Route>
          </div>
        </Router>
      </div>

    );
  }
}

const mapStateToProps = state => {

  return {
    gameID:state.gameID,
    gameArray: state.gameArray
  }
}

const mapDispatchToProps = dispatch => {
  return {
    populateGameList: gameType => {
      dispatch(fetchGames(gameType))
    },
    doAutoPlay: (delay) => {
      dispatch(doAutoPlay(delay))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

import React from 'react';
import {connect} from "react-redux"

import {  Grid,Checkbox, Input} from 'semantic-ui-react';

import {changeAutoPlay, selectTurn} from "../actions/GameViewer"


export const StateNav = ({stateIndex, length, autoPlay, onChangeAutoPlay, onStateSelect})=>{
  return (
    <Grid fluid textAlign='center'>
      <Grid.Row >
        <Grid.Column width={3}>
          <Checkbox
            checked={autoPlay}
            onChange={onChangeAutoPlay}
            style={{marginRight:"2em"}} label="Autoplay"/>
        </Grid.Column>
        <Grid.Column width={10}>

          <Input
            fluid
            min={1}
            max={length}
            onChange={(event)=>{onStateSelect(event.target.value)}}
            type={'range'}
            value={stateIndex}
            />
        </Grid.Column>
        <Grid.Column width={3}>
          <p>{"Turn: "+String(stateIndex)+"/"+String(length)}</p>

        </Grid.Column>

      </Grid.Row>
    </Grid>
  )
}


const mapStateToProps = state => {
  return {
    // gameID:state.gameID,
    stateIndex:state.gameStates.stateIndex,
    length:state.gameStates.stateArray.length-1,
    autoPlay:state.gameStates.autoPlay,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeAutoPlay: ()=> dispatch(changeAutoPlay()),
    onStateSelect: (turnNum) => {
      if (!isNaN(parseInt(turnNum,10))){
        dispatch(selectTurn(parseInt(turnNum,10)))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StateNav)

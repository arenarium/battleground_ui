import React from 'react';
import {connect} from "react-redux"

import {  Grid,Checkbox, Input} from 'semantic-ui-react';

import {changeAutoPlay, changeTextState, selectTurn} from "../actions/GameViewer"


export const StateNav = ({stateIndex, length, autoPlay, textState,
                          onChangeTextState, onChangeAutoPlay, onStateSelect})=>{
  return (
    <Grid fluid="true" textAlign='center'>
      <Grid.Row >
        <Grid.Column width={2}>
          <Checkbox
            checked={autoPlay}
            onChange={onChangeAutoPlay}
            style={{marginRight:"2em"}} label="Autoplay"/>
        </Grid.Column>
        <Grid.Column width={2}>
          <Checkbox
            checked={textState}
            onChange={onChangeTextState}
            style={{marginRight:"2em"}} label="Show Raw State"/>
        </Grid.Column>
        <Grid.Column width={10}>

          <Input
            fluid={true}
            min={1}
            max={length}
            onChange={(event)=>{onStateSelect(event.target.value)}}
            type={'range'}
            value={stateIndex}
            />
        </Grid.Column>
        <Grid.Column width={2}>
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
    onChangeTextState: ()=> dispatch(changeTextState()),
    onChangeAutoPlay: ()=> dispatch(changeAutoPlay()),
    onStateSelect: (turnNum) => {
      if (!isNaN(parseInt(turnNum,10))){
        dispatch(selectTurn(parseInt(turnNum,10)))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StateNav)

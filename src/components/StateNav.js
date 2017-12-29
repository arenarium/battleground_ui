import React from 'react';
import {connect} from "react-redux"

import {  Row, Col,Grid,Pager, Form,FormGroup,ControlLabel,FormControl,Checkbox} from 'react-bootstrap';

import {changeAutoPlay, selectTurn} from "../actions/GameViewer"


export const StateNav = ({stateIndex, length, autoPlay, onChangeAutoPlay, onStateSelect})=>{
  return (
    <Grid fluid>
      <Row >
        <Col xs={4} md={3}>
          <Pager style={{margin:0}}>
            <Pager.Item onClick={()=>onStateSelect(stateIndex-1)}>Previous</Pager.Item>
          </Pager>
        </Col>
        <Col xs={4} md={4}>
          <Form inline style={{textAlign:"center"}}>
            <FormGroup controlId="formBasicText">
              <Checkbox
                checked={autoPlay}
                onChange={onChangeAutoPlay}
                style={{marginRight:"2em"}}>
                Autoplay
              </Checkbox>
              <FormControl
                type="text"
                value={stateIndex}
                placeholder="Enter text"
                onChange={(event)=>{onStateSelect(event.target.value)}}
                style={{width:"5em"}}
                />
              <ControlLabel>/{length}</ControlLabel>
            </FormGroup>
          </Form>
        </Col>
        <Col xs={4} md={3}>
          <Pager style={{margin:0}}>
            <Pager.Item onClick={()=>{onStateSelect(stateIndex+1)}}>Next</Pager.Item>
          </Pager>
        </Col>
      </Row>
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

import React from 'react';
import {connect} from "react-redux"
import { Stage, Layer, Rect, Text, Circle } from 'react-konva';

export const ArenaState = ({gameState})=>{
  return (
    <Stage width={500} height={300}>
       <Layer>
         <Text text={gameState["gameID"]} />
         <Rect   id="Arena"
                 x={40}
                 y={40}
                 width={400}
                 height={200}
                 fillEnabled={false}
                 stroke="#555555"
                 strokeWidth={2}
                 shadowBlur={3}
                 shadowOffset= {{x : 1, y : 1}}
               />
       </Layer>
       <Layer>
         <Circle
           x={70}
           y={70}
           radius={70}
           fill= 'red'
           stroke= 'black'
           />
       </Layer>
      </Stage>

  )
}

ArenaState.defaultProps = {
  gameState: [],
};

const mapStateToProps = state => {
  return {
    gameState:state.gameStates.stateArray[state.gameStates.stateIndex],
  }
}

const mapDispatchToProps = dispatch => {
  return []
  }

export default connect(mapStateToProps, mapDispatchToProps)(ArenaState)

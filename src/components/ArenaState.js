import React from 'react';
import { Stage, Layer, Rect, Circle, Group} from 'react-konva';
import { exampleGameState } from "../data/example_arena_game_state"

let defaultState = JSON.parse(exampleGameState)

let colors = ["red", "green", "blue", "yellow"]

var stageSize = [700, 400]

const Gladiator = ({color, pos}) => {
  return(
    <Group>
      <Circle
        x={pos[0]}
        y={pos[1]}
        radius={10}
        shadowBlur={2}
        fill= {color}
        strokeEnabled= {false}
        />
      <Circle
        x={pos[0]}
        y={pos[1]}
        radius={7}
        fillEnabled= {false}
        stroke= 'white'
        />
    </Group>
  )
}

export const ArenaState = ({gameState= defaultState})=>{
  // console.log(gameState);

  // console.log(gameState);
  var dungeonData = gameState["dungeon"]
  var dungeonSize = dungeonData['size']
  var dungeonWidth = dungeonSize[0][1] - dungeonSize[0][0]
  var dungeonHeight = dungeonSize[1][1] - dungeonSize[1][0]

  var margin = 20
  var stageRatio = stageSize[0]/stageSize[1]
  var dungeonRatio = dungeonWidth/dungeonHeight

  var arenaWidth
  var arenaHeight
  if (stageRatio < dungeonRatio){
    arenaWidth = stageSize[0]
    arenaHeight = stageSize[0] * dungeonHeight / dungeonWidth
  }else{
    arenaWidth = stageSize[1] / dungeonHeight * dungeonWidth
    arenaHeight = stageSize[1]
  }
  arenaWidth = arenaWidth - margin * 2
  arenaHeight = arenaHeight - margin * 2

  var dungeonPosition = [(stageSize[0] - arenaHeight)/2, (stageSize[1] - arenaWidth) / 2]

  dungeonPosition = [margin,margin]

  var gladiatorData = gameState["gladiators"]
  var gladiatorElements = []
  var i = 0

  for (let gladiator of gladiatorData) {
    // position from origin
    var position_x = (gladiator.pos[0] - dungeonSize[0][0]) / dungeonWidth * arenaWidth
    var position_y = (gladiator.pos[1] - dungeonSize[1][0]) / dungeonHeight * arenaHeight
    gladiatorElements.push(
      <Gladiator
        pos={[position_x + dungeonPosition[0], position_y + dungeonPosition[1]]}
        color={colors[i%colors.length]}
        key={i}
        />
    )
    i+=1
  }



  return (
    <Stage width={stageSize[0]}
      height={stageSize[1]}>
      <Layer>
        <Rect
          id="Arena"
          x={dungeonPosition[0]}
          y={dungeonPosition[1]}
          width={arenaWidth}
          height={arenaHeight}
          fill='#FAFAFA'
          stroke="#555555"
          strokeWidth={2}
          shadowBlur={3}
          shadowColor="#777777"
          shadowOffset= {{x : 1, y : 1}}
          />
      </Layer>
      <Layer>
        {gladiatorElements}
      </Layer>
    </Stage>
  )
}

export default ArenaState

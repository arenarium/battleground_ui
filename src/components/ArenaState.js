import React from 'react';
import { Stage, Layer, Rect, Circle, Group, Line} from 'react-konva';
import { exampleGameState } from "../data/example_arena_game_state"

let defaultState = JSON.parse(exampleGameState)

let colors = ["red", "green", "blue", "yellow"]

const stageSize = [700, 400]
const margin = 20

function getScreenCoords(gameGoords, dungeonSize){
  var [arenaWidth, arenaHeight] = getArenaSize(dungeonSize)
  var dungeonWidth = dungeonSize[0][1] - dungeonSize[0][0]
  var dungeonHeight = dungeonSize[1][1] - dungeonSize[1][0]
  var position_x = (gameGoords[0] - dungeonSize[0][0]) / dungeonWidth * arenaWidth
  var position_y = (gameGoords[1] - dungeonSize[1][0]) / dungeonHeight * arenaHeight
  return [position_x + margin, position_y + margin]
}

function getArenaSize(dungeonSize){
  var stageRatio = stageSize[0]/stageSize[1]
  var dungeonWidth = dungeonSize[0][1] - dungeonSize[0][0]
  var dungeonHeight = dungeonSize[1][1] - dungeonSize[1][0]

  var dungeonRatio = dungeonWidth/dungeonHeight

  var arenaWidth
  var arenaHeight
  if (stageRatio < dungeonRatio){
    arenaWidth = stageSize[0] - margin * 2
    arenaHeight = (stageSize[0] - margin * 2) * dungeonHeight / dungeonWidth
  }else{
    arenaWidth = (stageSize[1] - margin * 2) / dungeonHeight * dungeonWidth
    arenaHeight = stageSize[1] - margin * 2
  }

  return [arenaWidth, arenaHeight]
}

function sumArrays(a1, a2){
  let out = []
  for (let i = 0; i < a1.length; i++) {
    out.push(a1[i] + a2[i])
  }
  return out
}

const Move = ({color, origin, target}) =>{
  return (
    <Circle
      x={origin[0]}
      y={origin[1]}
      radius={2}
      shadowBlur={2}
      fill= {'555555'}
      strokeEnabled= {false}
      opacity={.5}
      />
  )
}

const Attack = ({color, origin, target}) =>{
  let [x0, y0] = origin
  let [x1, y1] = target
  return (
    <Group>
      <Line points={[x0, y0, x1, y1]} strokeWidth={2} stroke='red'/>
      <Circle
        x={target[0]}
        y={target[1]}
        radius={15}
        shadowBlur={2}
        fill= {'red'}
        strokeEnabled= {false}
        opacity={.2}
        />
    </Group>
  )
}

const Message = ({gameState}) => {
  // console.log(gameState);
  if ('message' in gameState && gameState.message.length>0){
    let message = gameState["message"][0]
    message = message[1]
    switch(message.type){
      case 'attack':
      let targetPos = gameState.gladiators[message.target].pos
      let origin = getScreenCoords(message.origin, gameState.dungeon.size)
      targetPos = getScreenCoords(targetPos, gameState.dungeon.size)
      return (
        <Attack origin={origin} target={targetPos}/>
      )
      case 'move':
      let move_origin = getScreenCoords(message.origin, gameState.dungeon.size)
      let move_target = getScreenCoords(sumArrays(message.origin, message.target), gameState.dungeon.size)
      return (
        <Move origin={move_origin} target={move_target}/>
      )
      default:
      return null
    }
  }
  return null
}

const Gladiator = ({color, pos, alive}) => {
  let opacity
  if (alive) {
    opacity = 1
  }else {
    opacity = .2
  }
  return(
    <Group>
      <Circle
        x={pos[0]}
        y={pos[1]}
        radius={10}
        shadowBlur={2}
        fill= {color}
        strokeEnabled= {false}
        opacity={opacity}
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

const Grid = ({x, y, numLines, stepSize, arenaSize}) => {
  let gridlines =[]
  let key=0

  for (let i = 1; i < numLines[0]; i++) {
    gridlines.push(
      <Line
        points={ [0, i*stepSize, arenaSize[0] , i*stepSize]}
        stroke="#AAAAAA"
        strokeWidth={1}
        x={x}
        y={y}
        key={key}
        />
    )
    key+=1
  }

  for (let i = 1; i < numLines[1]; i++) {
    gridlines.push(
      <Line
        points={ [i*stepSize, 0, i*stepSize, arenaSize[1]]}
        stroke="#AAAAAA"
        strokeWidth={1}
        x={x}
        y={y}
        key={key}
        />
    )
    key+=1
  }
  return (
    <Layer>
      {gridlines}
    </Layer>

  )
}

export const ArenaState = ({gameState= defaultState})=>{
  // console.log(gameState);

  // console.log(gameState);
  var dungeonData = gameState["dungeon"]
  var dungeonSize = dungeonData['size']
  var dungeonWidth = dungeonSize[0][1] - dungeonSize[0][0]
  var dungeonHeight = dungeonSize[1][1] - dungeonSize[1][0]

  var [arenaWidth, arenaHeight] = getArenaSize(dungeonSize)
  var gladiatorData = gameState["gladiators"]
  var gladiatorElements = []
  var i = 0

  for (let gladiator of gladiatorData) {
    // position from origin
    var [position_x, position_y] = getScreenCoords(gladiator.pos, dungeonSize)
    gladiatorElements.push(
      <Gladiator
        pos={[position_x, position_y]}
        color={colors[i%colors.length]}
        key={i}
        alive={gladiator.cur_hp>0}
        />
    )
    i+=1
  }
  return (
    <Stage width={stageSize[0]} height={stageSize[1]}>
      <Layer>
        <Rect
          x={margin}
          y={margin}
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
      <Grid
        numLines = {[dungeonHeight, dungeonWidth]}
        stepSize = {arenaHeight / (dungeonHeight)}
        x={margin}
        y={margin}
        arenaSize={[arenaWidth, arenaHeight]}
        />
      <Layer>
        {gladiatorElements}
        <Message gameState={gameState}/>
      </Layer>
    </Stage>
  )
}

export default ArenaState

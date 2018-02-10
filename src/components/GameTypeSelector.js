import React from 'react';
import {Dropdown} from 'semantic-ui-react'
import gameTypes from '../data/gameTypes'


export const GameTypeSelector = ({fluid=false, onTypeSelect})=>{

  let typeOptions = []

  for (let key in gameTypes) {
    if (gameTypes.hasOwnProperty(key)) {
      let type = gameTypes[key]
      typeOptions.push(
        {text: type[0], value: type[1]}
      )
    }
  }

  return (
    <Dropdown
      fluid={fluid}
      defaultValue={typeOptions[0]['value']}
      options={typeOptions}
      onChange={(event, selection) => onTypeSelect(selection['value'])}
      />
  )
}

export default GameTypeSelector

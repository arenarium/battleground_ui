import React from 'react';
import {Dropdown} from 'semantic-ui-react'
import gameTypes from '../data/gameTypes'


export const GameTypeSelector = ({fluid=false, value, onChange})=>{

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
      value={value}
      fluid={fluid}
      options={typeOptions}
      onChange={(event, selection) => onChange(selection['value'])}
      />
  )
}

export default GameTypeSelector

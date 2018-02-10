import React from 'react';
import {Segment, Table} from 'semantic-ui-react'

export const PlayerStatsViewer = ({playerStats}) => {
  let listItemArray=[]
  let i=0
  for (let key in playerStats) {
    if (playerStats.hasOwnProperty(key)) {

      let owner = playerStats[key][0]
      let playerName = playerStats[key][1]
      let wins = playerStats[key][2]

      listItemArray.push(
        <Table.Row key={i}>
          <Table.Cell>
            {owner}
          </Table.Cell>
          <Table.Cell>
            {playerName}
          </Table.Cell>
          <Table.Cell>
            {wins}
          </Table.Cell>
        </Table.Row>
      )
      i+=1;
    }
  }

  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Owner</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Win Rate</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {listItemArray}
      </Table.Body>
    </Table>
  )
}

export default PlayerStatsViewer

import React from 'react';
import {Table} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


export const LeaderBoardTable = ({playerStats, onClick}) => {
  // console.log(playerStats);
  let listItemArray=[]
  let i=0
  for (let key in playerStats) {
    if (playerStats.hasOwnProperty(key)) {

      let id = playerStats[key][0]
      let owner = playerStats[key][1]
      let playerName = playerStats[key][2]
      let wins = playerStats[key][3]

      listItemArray.push(
        <Table.Row key={i} onClick={()=>{onClick('/stats/agent/'+id)}}>
          <Table.Cell>
            {owner}
          </Table.Cell>
          <Table.Cell>
            <Link to={'/stats/agent/'+id}>
            {playerName}
            </Link>
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
    <Table celled padded selectable>
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

export default LeaderBoardTable

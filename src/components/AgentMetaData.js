import React from 'react';
import {Card, Icon}  from 'semantic-ui-react'

const AgentMetaData = ({metaData, color=null, health=null, size='normal'}) => {
  if (metaData === undefined){
    metaData = {name:'...'}
  }
  let healthContent = ''
  if (health !== null){
    healthContent = (
      <Card.Description>
        Health: {health}
      </Card.Description>
    )
  }

  let icon =''
  if (color !== null){
    icon = <Icon name='circle' color={color}/>
  }
  
  return(
    <Card color={color}>
      <Card.Content>
        <Card.Header>
          {icon}
          &nbsp;
          {metaData.name}
        </Card.Header>
        {healthContent}
      </Card.Content>
    </Card>
  )
}

export default AgentMetaData

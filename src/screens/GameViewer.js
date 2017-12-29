import React from 'react'
import { Grid, Row,Col,Panel, PageHeader } from 'react-bootstrap';
import GameIndex from '../components/GameIndex'
import GameStateViewer from '../components/GameStateViewer'


 const GameViewer =() => (
  <div className="container">
    <Grid>
      <Row>
        <PageHeader><small>Watch and Learn from ongoing games or replays</small></PageHeader>
      </Row>
      <Row>
        <Col md={3}>
          <Panel>
            <GameIndex/>
          </Panel>
        </Col>
        <Col md={8}>
          <Panel>
            <GameStateViewer/>
          </Panel>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default GameViewer

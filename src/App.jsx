
import { Col, Container, Row } from 'react-bootstrap'
import './App.css'

import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
      <Container fluid className={"full"}>
        <Row className={"nav_container_row"}>
          <Col className='nav_container_col'>
            <NavBar />
          </Col>
        </Row>
        <Row>
          <Col xs={3}>Menu</Col>
          <Col xs={6}>Content</Col>
          <Col xs={3}>Feed</Col>
        </Row>
      </Container>

      
    </>
  )
}

export default App

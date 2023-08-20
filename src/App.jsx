
import { Col, Container, Row } from 'react-bootstrap'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'

import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Menu from './components/Menu/Menu'
import Trending from './components/Feed/Trending/Trending'
import AdBlock from './components/Feed/AdBlock/AdBlock'

function App() {

  return (
    <>
      <Container fluid className={"full"}>
        <Row className={"nav_container_row"}>
          <nav className='nav_container_col'>
            <NavBar />
          </nav>
        </Row>
        <Row>
          <Col xs={3}>
            <Menu />
          </Col>
          <Col xs={6}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/follow' element={<Home />} />
              <Route path='/setting' element={<Home />} />
              <Route path='/discover' element={<Home />} />
              <Route path='/messages' element={<Home />} />
            </Routes>
          </Col>
          <Col xs={3}>
            <Trending />
            <AdBlock />
            <AdBlock />
          </Col>
        </Row>
      </Container>

      
    </>
  )
}

export default App

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Navi from './components/Navi';
import Specials from './components/Specials';
import AboutUs from './components/AboutUs';
import Testimonals from './components/Testimonals';

function App() {
  return (
    <Container fluid>
      <Row className="mt-4">
        <Col>
          <Navi />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Main />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Specials />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Testimonals />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <AboutUs />
        </Col>
      </Row>

      <Row className="mt-4 mb-4">
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
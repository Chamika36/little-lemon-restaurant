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

function App() {
  return (
    <Container>
      <Col>
        <Header />
        <Row><Navi /></Row>
        <Row><Main /></Row>
        <Row><Specials /></Row>
        <Row><Footer /></Row>
      </Col>
    </Container>
  );
}

export default App;

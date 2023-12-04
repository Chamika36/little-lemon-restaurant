import {Container ,Row, Col, Card} from 'react-bootstrap';
import greeksalad from '../assets/greek salad.jpg';
const Testimonals = () => {
  return (
    <div>
      <Container className='bg-secondary'>
        <Row>
            <Row><h1>Testimonals</h1></Row>
            <Row><p>What our customers say about us</p></Row>
          <Row>
            <Col>
              <Card style={{width:'18rem'}}>
                  <Card.Body>
                      
                      <Card.Img src={greeksalad} alt="Greek Salad" roundedCircle/>
                      <Card.Title>Gabriella</Card.Title>
                      <Card.Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda aliquid expedita non fugit qui laudantium facere iure culpa alias esse.</Card.Text>               
                  </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{width:'18rem'}}>
                  <Card.Body>
                      <Card.Img src={greeksalad} alt="Greek Salad" roundedCircle/>
                      <Card.Title>Gabriella</Card.Title>
                      <Card.Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda aliquid expedita non fugit qui laudantium facere iure culpa alias esse.</Card.Text>               
                  </Card.Body>
              </Card>
            </Col>

            <Col>
            <Card style={{width:'18rem'}}>
                  <Card.Body>
                      <Card.Img src={greeksalad} alt="Greek Salad" roundedCircle/>
                      <Card.Title>Gabriella</Card.Title>
                      <Card.Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda aliquid expedita non fugit qui laudantium facere iure culpa alias esse.</Card.Text>               
                  </Card.Body>
              </Card>
            </Col>

            <Col>
            <Card style={{width:'18rem'}}>
                  <Card.Body>
                      <Card.Img src={greeksalad} alt="Greek Salad" roundedCircle/>
                      <Card.Title>Gabriella</Card.Title>
                      <Card.Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda aliquid expedita non fugit qui laudantium facere iure culpa alias esse.</Card.Text>               
                  </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonals;
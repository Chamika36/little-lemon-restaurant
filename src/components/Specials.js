import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import greeksalad from '../assets/greek salad.jpg';
import { Col, Container, Row } from 'react-bootstrap';

const Specials = () => {
    return (
        <div>
            <Container>
                <Row>
                <Col><h1>Specials</h1></Col>
                <Col><Button>Online Menu</Button></Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md={4}>
                        <Card style={{width:'18rem'}}>
                            <Card.Img src={greeksalad} alt="Greek Salad"/>
                            <Card.Body>
                                <Card.Title>Greek Salad</Card.Title>
                                <Card.Text>The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.</Card.Text>
                                <Button>Order a delivery</Button>                   
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card style={{width:'18rem'}}>
                            <Card.Img src={greeksalad} alt="Greek Salad"/>
                            <Card.Body>
                                <Card.Title>Greek Salad</Card.Title>
                                <Card.Text>The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.</Card.Text>
                                <Button>Order a delivery</Button>                   
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card style={{width:'18rem'}}>
                            <Card.Img src={greeksalad} alt="Greek Salad"/>
                            <Card.Body>
                                <Card.Title>Greek Salad</Card.Title>
                                <Card.Text>The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.</Card.Text>
                                <Button>Order a delivery</Button>                   
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Specials;

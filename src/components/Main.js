import { Container, Row, Col, Button, Image } from "react-bootstrap";
import home from '../assets/restauranfood.jpg';

const Main = () => {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Button>Reserve Table</Button>
                </Col>

                <Col md={6}>
                    <Image width={400} src={home} alt="hello"/>
                </Col>
            </Row>
        </Container>
    );
}

export default Main;
import { Container, Row , Col, Image} from "react-bootstrap";
import about from "../assets/Mario and Adrian A.jpg";
import about2 from "../assets/Mario and Adrian b.jpg";

const AboutUs = () => {
  return (
    <Container>
        <Row>
            <Col>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non, nisi ut odit ex neque reprehenderit accusantium optio ratione eius temporibus veritatis maiores, architecto fugiat saepe suscipit totam cupiditate ullam beatae accusamus soluta libero quas! Itaque vel aut laborum aliquid ullam iste omnis beatae, incidunt quis! Nihil nobis eaque officia minus iure soluta eum, voluptate odio tenetur ratione molestias illo quasi harum blanditiis, vero, autem excepturi totam unde perferendis odit optio neque. Eligendi nam aliquid quos vitae eveniet aliquam accusantium.</p>
            </Col>
            <Col>
                <Image width={400} height={400} src={about} alt="hello"/>
                <Image width={400} height={400} src={about2} alt="hello"/>
            </Col>
        </Row>
    </Container>
  );
};

export default AboutUs;
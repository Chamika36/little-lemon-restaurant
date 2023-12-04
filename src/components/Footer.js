import { Col ,Row , Container} from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <Container>
            <Row>
                <Col>
                <h4>
                    Little
                    <br />
                    Lemon
                </h4>
                <ul>
                    <li>
                    {" "}
                    <Link to="/">Home</Link>{" "}
                    </li>
                    <li>
                    {" "}
                    <Link to="/">Menu</Link>{" "}
                    </li>
                    <li>
                    {" "}
                    <Link to="/bookings">Reservations</Link>{" "}
                    </li>
                    <li>
                    {" "}
                    <Link to="/">Order Online</Link>{" "}
                    </li>
                    <li>
                    {" "}
                    <Link to="/">Login</Link>{" "}
                    </li>
                </ul>
            </Col>
            <Col>
                <h4>Contact</h4>
                <ul>
                    <li>
                    <address>
                        Little Lemon <br />
                        331 E Chicago <br />
                        LaSalle Street Chicago,
                        <br />
                        Illinois 60602 <br />
                        USA
                    </address>
                    </li>
                    <li>
                    {" "}
                    <a href="tel:+551199999999" target="_blank" rel="external">
                        +55 11 9999-9999
                    </a>{" "}
                    </li>
                    <li>
                    {" "}
                    <a
                        href="mailto:contact@littlelemon.com"
                        target="_blank"
                        rel="external"
                    >
                        contact@littlelemon.com
                    </a>{" "}
                    </li>
                </ul>
            </Col>
            <Col>
                <h4>Social Media</h4>
                <ul>
                    <li>
                    {" "}
                    <a
                        href="https://www.facebook.com/littlelemon"
                        target="_blank"
                        rel="external"
                    >
                        Facebook
                    </a>{" "}
                    </li>
                    <li>
                    {" "}
                    <a
                        href="https://www.instagram.com/littlelemon"
                        target="_blank"
                        rel="external"
                    >
                        Instagram
                    </a>{" "}
                    </li>
                    <li>
                    {" "}
                    <a
                        href="https://twitter.com/littlelemon"
                        target="_blank"
                        rel="external"
                    >
                        Twitter
                    </a>{" "}
                    </li>
                </ul>
            </Col>
                <span>Developed by Chamika Madhushan</span>
                <p>© 2023 Little Lemon. All rights reserved.</p>
            </Row>
        </Container>
        </footer>
    );
}

export default Footer;
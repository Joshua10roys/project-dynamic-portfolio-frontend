import { Button, Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Navbar_({ login, printOnClick, show, setShow }) {

    return (
        <>
            {/* navbar */}
            <Navbar id="navbar" bg="light" expand="lg" sticky="top" className="mx-auto" style={{ maxWidth: "1920px" }}>
                <Container fluid>

                    <Navbar.Brand href="#home" className="fw-bold ps-3">Dynamic Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />

                    <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end"
                        style={{ minWidth: '20vw', maxWidth: '55vw' }}>
                        <Offcanvas.Header closeButton></Offcanvas.Header>
                        <Offcanvas.Body>

                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#about" className="fw-bold">About</Nav.Link>
                                <Nav.Link href="#education" className="fw-bold">Education</Nav.Link>
                                <Nav.Link href="#skills" className="fw-bold">Skills</Nav.Link>
                                <Nav.Link href="#experiance" className="fw-bold">Experiance</Nav.Link>
                                <Nav.Link href="#contactMe" className="fw-bold">Contact Me</Nav.Link>
                                <Nav.Link onClick={printOnClick} className="fw-bold">Print</Nav.Link>
                                {
                                    login
                                        ?
                                        <>
                                            <Button variant="success" className="fw-bold loginbtn">Admin</Button>
                                            <Button variant="danger" className="fw-bold loginbtn"
                                            >Logout</Button>
                                        </>
                                        :
                                        <Button variant="primary" className="fw-bold loginbtn"
                                            onClick={() => setShow(!show)}>Login</Button>
                                }
                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                </Container>
            </Navbar>
        </>
    )
}
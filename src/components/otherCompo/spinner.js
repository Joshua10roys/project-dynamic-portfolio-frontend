import { Container, Spinner } from "react-bootstrap";

export default function Spinner1() {

    return (
        <Container fluid className="vh-100 d-flex justify-content-center align-items-center bg-dark text-white">
            <Spinner animation="border" role="status"></Spinner>
            <span className="mt-2 ps-2 h2">Loading...</span>
        </Container>
    )
}
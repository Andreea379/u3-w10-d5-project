import { Container, Navbar } from "react-bootstrap";
import { CloudyFill } from "react-bootstrap-icons";

const TopBar = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" className="">
          <CloudyFill className="fs-1 mx-3" />
          <p className="pt-3 d-inline-block">Meteo</p>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default TopBar;

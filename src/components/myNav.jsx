import { Navbar, Nav } from "react-bootstrap"

const MyNav = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#">Strive Books</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#">abc</Nav.Link>
        <Nav.Link href="#">abc</Nav.Link>
        <Nav.Link href="#">abc</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default MyNav

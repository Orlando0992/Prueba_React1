import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/img/logo.png';

function NavScrollExample() {
    return (
        <Navbar style={{ backgroundColor: 'yellow' }} data-bs-theme="light">
            <Container >
            <Navbar.Brand href="#home">
                        <img
                            src={logo} 
                            alt="Logo" 
                            height={40} 
                        />
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Inicio</Nav.Link>
                        <Nav.Link href="#action1">Pelicula</Nav.Link>
                        <NavDropdown title="Temporadas" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3"
                            >Temporada 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action4"
                            >Temporada 2
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4"
                            >Temporada 3
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4"
                            >Temporada 4
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Más...
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;
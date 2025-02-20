import "./MyNavBar.css"
import { Container, Nav, Navbar, NavbarCollapse} from 'react-bootstrap';
import MyAvatar from "../MyAvatar/MyAvatar";
import MyThemeSwitcher from "../MyThemeSwitcher/MyThemeSwitcher";


function MyNavBar() {
    return(
        <>
    <Navbar data-bs-theme="dark" fixed="top" id="stickynav" bg="dark">
        <Container>
          <Navbar.Brand>Formador de Currículo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="editar">Editar</Nav.Link>
            <Nav.Link href="exibir">Exibir</Nav.Link>
            <NavbarCollapse><Nav.Link href="#" disabled>Modo:</Nav.Link> <MyThemeSwitcher /></NavbarCollapse>
          </Nav>
          <NavbarCollapse className="justify-content-end">
            <MyAvatar />
          </NavbarCollapse>
        </Container>
      </Navbar>
        </>
    );
}

export default MyNavBar;
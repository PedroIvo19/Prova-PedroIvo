import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; // Importando Link do react-router-dom

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark"> {/* Use o prop variant para definir o tema */}
      <Container>
        <Navbar.Brand as={Link} to="/">Doce Mel</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/cadastroprodutos">Cadastro de Produtos</Nav.Link>
          <Nav.Link as={Link} to="/produtos">Produtos</Nav.Link> {/* Corrija o link aqui também */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;

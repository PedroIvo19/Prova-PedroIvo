import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return (
    <div>
           <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Supermercado</Navbar.Brand>
          <Nav className="me-auto">
           
            <Nav.Link href="/CadastroProdutos">Cadastro de Produtos</Nav.Link>
            <Nav.Link href="#pricing">Produtos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
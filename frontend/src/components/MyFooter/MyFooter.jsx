import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function MyFooter() {
  return (
    <>
      <Navbar expand="lg" className="mt-auto bg-body-tertiary navbar-expand" style={{width:"100%"}}>
        <Container>
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text>
              Desenvolvido por: Pedro Oliveira - © 2025 Todos os direitos reservados.
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyFooter
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import api from "../../services/Api/Api";
import AvatarDisplay from "../AvatarDisplay/AvatarDisplay";
import { BsWhatsapp } from "react-icons/bs";
import { useWhatsapp } from "../../utils/Whatsapp";

function IdentificacaoDisplay({}) {
  const{ isChecked } = useWhatsapp();
  const [dados, setDados] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/identificacao");
        if (response.data.length > 0) {
          setDados(response.data[0]); 
        }
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    }
    fetchData();
  }, []);


  if (!dados) {
    return (
      <Container className="mt-4 text-center">
        <h5 className="text-muted">Nenhuma identificação disponível.</h5>
      </Container>
    );
  }

  return (
    <Container className="mt-4 d-flex justify-content-center">
      <Card className="shadow-sm p-5" style={{ width: "90%", maxWidth: "1000px", borderRadius: "15px" }}>
        <AvatarDisplay />
        <h3 className="text-center mb-4">Identificação</h3>
        <Row>
          <Col md={6}><strong>Nome:</strong> {dados.nome}</Col>
          <Col md={6}><strong>Telefone:</strong> <span style={{marginRight:"5px"}}>{dados.telefone}</span> {isChecked && (<BsWhatsapp color="green" size={30} />)}</Col>
        </Row>
        <Row className="mt-3">
          <h5 className="mb-2">Endereço</h5>
          <Col md={6}><strong>Rua:</strong> {dados.rua}, {dados.numero}</Col>
          <Col md={6}><strong>Bairro:</strong> {dados.bairro}</Col>
        </Row>
        <Row className="mt-2">
          <Col md={6}><strong>Cidade:</strong> {dados.cidade}</Col>
          <Col md={6}><strong>UF:</strong> {dados.uf}</Col>
        </Row>
        <Row className="mt-2">
        <Col md={6}><strong>CEP:</strong> {dados.cep}</Col>
        </Row>
      </Card>
    </Container>
  );
}

export default IdentificacaoDisplay;

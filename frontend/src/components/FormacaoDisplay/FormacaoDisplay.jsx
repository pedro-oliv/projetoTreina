import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import api from "../../services/Api/Api";

function FormacaoDisplay() {
  const [formacoes, setFormacoes] = useState({
    graduacao: [],
    posgraduacao: [],
    tecnico: [],
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: graduacaoData } = await api.get("/formacao/graduacao");
        const { data: posGraduacaoData } = await api.get("/formacao/posgraduacao");
        const { data: tecnicoData } = await api.get("/formacao/tecnico");

        setFormacoes({
          graduacao: graduacaoData || [],
          posgraduacao: posGraduacaoData || [],
          tecnico: tecnicoData || [],
        });
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <Container className="mt-4 d-flex justify-content-center">
      <Card className="shadow-lg p-4" style={{ width: "90%", maxWidth: "1000px", borderRadius: "15px" }}>
        <h3 className="text-center mb-4">Formação Acadêmica</h3>

        <div className="mb-2">
          <h5 className="mb-3">Graduação</h5>
          {formacoes.graduacao.length > 0 ? (
            formacoes.graduacao.map((formacao, index) => (
              <Card key={`grad-${index}`} className="p-3 mb-3">
                <Row>
                  <Col md={3}><strong>Ano:</strong> {formacao.ano}</Col>
                  <Col md={4}><strong>Curso:</strong> {formacao.curso}</Col>
                  <Col md={5}><strong>Instituição:</strong> {formacao.ie}</Col>
                </Row>
              </Card>
            ))
          ) : (
            <p className="text-muted">Nenhuma graduação cadastrada.</p>
          )}
        </div>

        <div className="mb-2">
          <h5 className="mb-3">Pós-Graduação</h5>
          {formacoes.posgraduacao.length > 0 ? (
            formacoes.posgraduacao.map((formacao, index) => (
              <Card key={`pos-${index}`} className="p-3 mb-3">
                <Row>
                  <Col md={2}><strong>Ano:</strong> {formacao.ano}</Col>
                  <Col md={4}><strong>Curso:</strong> {formacao.curso}</Col>
                  <Col md={3}><strong>Instituição:</strong> {formacao.ie}</Col>
                  <Col md={3}><strong>Título:</strong> {formacao.titulo}</Col>
                </Row>
              </Card>
            ))
          ) : (
            <p className="text-muted">Nenhuma pós-graduação cadastrada.</p>
          )}
        </div>

        <div>
          <h5 className="mb-3">Técnico</h5>
          {formacoes.tecnico.length > 0 ? (
            formacoes.tecnico.map((formacao, index) => (
              <Card key={`tec-${index}`} className="p-3 mb-3">
                <Row>
                  <Col md={3}><strong>Ano:</strong> {formacao.ano}</Col>
                  <Col md={4}><strong>Curso:</strong> {formacao.curso}</Col>
                  <Col md={5}><strong>Instituição:</strong> {formacao.ie}</Col>
                </Row>
              </Card>
            ))
          ) : (
            <p className="text-muted">Nenhuma formação técnica cadastrada.</p>
          )}
        </div>
      </Card>
    </Container>
  );
}

export default FormacaoDisplay;

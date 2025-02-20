import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import api from "../../services/Api/Api";

function ExperienciaDisplay() {
  const [experiencias, setExperiencias] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await api.get("/experiencia");
        
        const sortedData = data.sort((a, b) => parseInt(a.inicio) - parseInt(b.inicio));
        setExperiencias(sortedData || []);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <Container className="mt-4 d-flex justify-content-center">
      <Card className="shadow-lg p-4" style={{ width: "90%", maxWidth: "1000px", borderRadius: "15px" }}>
        <h3 className="text-center mb-4">Experiência Profissional</h3>

        {experiencias.length > 0 ? (
          experiencias.map((exp, index) => (
            <Card key={index} className="p-3 mb-3">
              <Row>
                <Col md={3}><strong>Empresa:</strong> {exp.empresa}</Col>
                <Col md={2}><strong>Início:</strong> {exp.inicio}</Col>
                <Col md={2}><strong>Fim:</strong> {exp.fim || "Atual"}</Col>
                <Col md={5}><strong>Função:</strong> {exp.funcao}</Col>
              </Row>
            </Card>
          ))
        ) : (
          <p className="text-muted text-center">Nenhuma experiência cadastrada.</p>
        )}
      </Card>
    </Container>
  );
}

export default ExperienciaDisplay;

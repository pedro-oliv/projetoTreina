import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import api from "../../services/Api/Api";

function InfoAdicDisplay() {
  const [dados, setDados] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/informacaoadicional");
        if (response.data.length > 0) {
          setDados(response.data[0]);
        }
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <Container className="mt-4 d-flex justify-content-center">
    <Card className="shadow-sm p-5" style={{ width: "90%", maxWidth: "1000px", borderRadius: "15px" }}>
      <h3 style={{textAlign:"center"}}>Informações Adicionais</h3>
      <Row>
        <Col>
          <ul className="mt-2" style={{ listStyle: "none", padding: 0 }}>
            {dados.email && (
              <li className="mb-2">
                <FaEnvelope /> {dados.email}
              </li>
            )}
            {dados.github && (
              <li className="mb-2">
                <FaGithub /> <a href={dados.github.startsWith("http") ? dados.github : `https://${dados.github}`} target="_blank" rel="noopener noreferrer">{dados.github}</a>
              </li>
            )}
            {dados.instagram && (
              <li className="mb-2">
                <FaInstagram /> <a href={dados.instagram.startsWith("http") ? dados.instagram : `https://${dados.instagram}`} target="_blank" rel="noopener noreferrer">{dados.instagram}</a>
              </li>
            )}
            {dados.linkedin && (
              <li className="mb-2">
                <FaLinkedin /> <a href={dados.linkedin.startsWith("http") ? dados.linkedin : `https://${dados.linkedin}`} target="_blank" rel="noopener noreferrer">{dados.linkedin}</a>
              </li>
            )}
          </ul>
        </Col>
      </Row>
      </Card>
    </Container>
  );
}

export default InfoAdicDisplay;
import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import api from '../../services/Api/Api'
import WhatsappCheckbox from "../WhatsappCheckbox/WhatsappCheckbox";

function Identificacao() {
  const [dados, setDados] = useState({
    nome: "",
    telefone: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    uf: "",
  });

  const [id, setId] = useState(null); 

  useEffect(() => {

    async function fetchData() {
      try {
        const response = await api.get("/identificacao");
        if (response.data.length > 0) {
          setDados(response.data[0]); 
          setId(response.data[0].idIdent); 
        }
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    }
    fetchData();
  }, []);

  const handleChange = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      if (id) {
        await api.put(`/identificacao/${id}`, dados);
        alert("Dados atualizados com sucesso!");
      } else {
        const response = await api.post("/identificacao", dados);
        setId(response.data.idIdent); 
        alert("Dados salvos com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao salvar:", error);
      alert("Erro ao salvar os dados.");
    }
  };

  const handleDelete = async () => {
    if (!id) {
      alert("Nenhum dado para deletar!");
      return;
    }

    try {
      await api.delete(`/identificacao/${id}`);
      setDados({
        nome: "",
        telefone: "",
        rua: "",
        numero: "",
        bairro: "",
        cidade: "",
        uf: "",
      });
      setId(null);
      alert("Dados deletados com sucesso!");
    } catch (error) {
      console.error("Erro ao deletar:", error);
      alert("Erro ao deletar os dados.");
    }

    
  };

  return (
    <Container className="mb-3">
      <h3>Identificação</h3>

      <Form>
        <Row className="mb-3">
          <Col md={8}>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu nome"
                name="nome"
                value={dados.nome}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group controlId="formTelefone">
              <Form.Label>Telefone</Form.Label>
              <div className="d-flex align-items-center">
              <Form.Control
                type="tel"
                placeholder="Digite seu telefone"
                name="telefone"
                value={dados.telefone}
                onChange={handleChange}
              />
              </div>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
          <WhatsappCheckbox />
          </Col>
        </Row>


        <Row className="mt-3">
          <h5>Endereço</h5>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formRua">
            <Form.Label>Rua</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite sua rua"
              name="rua"
              value={dados.rua}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formNumero">
            <Form.Label>Número</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o número"
              name="numero"
              value={dados.numero}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formBairro">
            <Form.Label>Bairro</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite seu bairro"
              name="bairro"
              value={dados.bairro}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formCidade">
            <Form.Label>Cidade</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite sua cidade"
              name="cidade"
              value={dados.cidade}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formUf">
            <Form.Label>UF</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite sua UF"
              name="uf"
              value={dados.uf}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <div className="mt-4" style={{ textAlign: "center" }}>
          <Button variant="success" onClick={handleSave}>
            Salvar
          </Button>
          <Button variant="danger" onClick={handleDelete} style={{marginLeft:"14px"}}>
            Deletar
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Identificacao;

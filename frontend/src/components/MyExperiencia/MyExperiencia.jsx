import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import api from "../../services/Api/Api";

function MyExperiencia() {
  const [experiencias, setExperiencias] = useState([]);

  const carregarDados = async () => {
    try {
      const { data: experienciaData} = await api.get("/experiencia");

      setExperiencias(experienciaData || []);
    } catch (erro) {
      console.error("Erro ao carregar dados:", erro);
    }
  };

  useEffect(() => {
    carregarDados();
  }, []);

  const changeForm = (index, e) => {
    const newExperiencias = [...experiencias];
    newExperiencias[index][e.target.name] = e.target.value;
    setExperiencias(newExperiencias);
  };

  const addExperiencia = () => {
    setExperiencias([...experiencias, { empresa: "", inicio: "", fim: "", funcao: "" }]);
  };

  const removeExperiencia = (index, idExp) => {
    const newExperiencias = [...experiencias];
    newExperiencias.splice(index, 1);
    setExperiencias(newExperiencias);

    api.delete(`/experiencia/${idExp}`)
    .then(() => {
      alert("Experiencia deletada com sucesso!");
    })
    .catch((error) => {
      console.error("Erro ao deletar:", error);
      alert("Erro ao deletar a formação.");
    });
  };

  const saveForm = async () => {
    try{
      for(const experiencia of experiencias){
        if(experiencia.idExp){
          await api.put(`/experiencia/${experiencia.idExp}`, experiencia);
        } else {
          await api.post("/experiencia", experiencia)
        }
      }
      alert("Formações salvas com sucesso!");
    } catch(error){
      console.error("Erro ao salvar:", error);
      alert("Erro ao salvar as informações")
    }
  };

  return (
    <Container className="mb-3">
      <h3>Experiência</h3>

      {experiencias.map((experiencia, index) => (
        <Form key={index} className="mb-3">
          <Row>
            <Col md={3}>
              <Form.Group controlId={`empresa-${index}`}>
                <Form.Label>Empresa</Form.Label>
                <Form.Control type="text"
                  name="empresa"
                  value={experiencia.empresa}
                  onChange={(e) => changeForm(index, e)}
                  placeholder="Nome da empresa"
                />
              </Form.Group>
            </Col>

            <Col md={2}>
              <Form.Group controlId={`inicio-${index}`}>
                <Form.Label>Início</Form.Label>
                <Form.Control
                  type="text"
                  name="inicio"
                  value={experiencia.inicio}
                  onChange={(e) => changeForm(index, e)}
                  placeholder="Ano"
                />
              </Form.Group>
            </Col>

            <Col md={2}>
              <Form.Group controlId={`fim-${index}`}>
                <Form.Label>Fim</Form.Label>
                <Form.Control
                  type="text"
                  name="fim"
                  value={experiencia.fim}
                  onChange={(e) => changeForm(index, e)}
                  placeholder="Ano"
                />
              </Form.Group>
            </Col>

            <Col md={3}>
              <Form.Group controlId={`funcao-${index}`}>
                <Form.Label>Função</Form.Label>
                <Form.Control
                  type="text"
                  name="funcao"
                  value={experiencia.funcao}
                  onChange={(e) => changeForm(index, e)}
                  placeholder="Cargo/Função"
                />
              </Form.Group>
            </Col>

            <Col md={2} className="d-flex align-items-end">
              <Button variant="danger" onClick={() => removeExperiencia(index, experiencia.idExp)} style={{ marginLeft: "10px" }}>
                Deletar
              </Button>
            </Col>
          </Row>
        </Form>
      ))}

      <Button variant="primary" onClick={addExperiencia} className="mt-2">
        Adicionar Experiência
      </Button>

      <div className="mt-4" style={{textAlign: "center"}}>
        <Button variant="success" onClick={saveForm}>
          Salvar
        </Button>
      </div>
    </Container>
  );
}

export default MyExperiencia;

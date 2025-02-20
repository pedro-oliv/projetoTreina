import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import api from "../../services/Api/Api";

function MyFormacao() {
  const [formacoes, setFormacoes] = useState({
    graduacao: [{ ano: "", curso: "", ie: "", titulo: "" }],
    posgraduacao: [{ ano: "", curso: "", ie: "", titulo: "" }],
    tecnico: [{ ano: "", curso: "", ie: "", titulo: "" }],
  });

  const carregarDados = async () => {
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
  };

  useEffect(() => {
    carregarDados();
  }, []);

  const changeForm = (tipo, index, e) => {
    const newFormacoes = { ...formacoes };
    newFormacoes[tipo][index][e.target.name] = e.target.value;
    setFormacoes(newFormacoes);
  };

  const addForm = (tipo) => {
    const newFormacoes = { ...formacoes };
    newFormacoes[tipo].push({ ano: "", curso: "", ie: "", titulo: "" });
    setFormacoes(newFormacoes);
  };

  const removeForm = (tipo, index, idForm) => {
    const newFormacoes = { ...formacoes };
    newFormacoes[tipo].splice(index, 1);
    setFormacoes(newFormacoes);

    api.delete(`/formacao/${tipo}/${idForm}`)
    .then(() => {
      alert("Formação deletada com sucesso!");
    })
    .catch((erro) => {
      console.error("Erro ao deletar:", erro);
      alert("Erro ao deletar a formação.");
    });
  };

  const saveForm = async () => {
    try {
      for(const graduacao of formacoes.graduacao){
        if (graduacao.idForm){
          await api.put(`/formacao/graduacao/${graduacao.idForm}`, graduacao);
        } else {
          await api.post("/formacao/graduacao", graduacao);
        }
      }

      for(const posGrad of formacoes.posgraduacao){
        if(posGrad.idForm){
          await api.put(`/formacao/posgraduacao/${posGrad.idForm}`, posGrad)
        } else {
          await api.post("/formacao/posgraduacao", posGrad);
        }
      }

      for(const tecnico of formacoes.tecnico){
        if(tecnico.idForm){
          await api.put(`/formacao/tecnico/${tecnico.idForm}`, tecnico);
        } else {
          await api.post("/formacao/tecnico", tecnico);
        }
      }
      alert("Formações salvas com sucesso!");
    } catch(error){
      console.error("Erro ao salvar:", error);
      alert("Erro ao salvar as informações.");
    }
  };

  return (
    <Container className="mt-4">
      <h3>Formação</h3>
      <br />
      <div>
        <h5>Graduação</h5>
        {formacoes.graduacao.map((formacao, index) => (
          <Form key={`grad-${index}`} className="mb-3">
            <Row>
              <Col md={2}>
                <Form.Group controlId={`ano-${index}`}>
                  <Form.Label>Ano</Form.Label>
                  <Form.Control
                    type="text"
                    name="ano"
                    value={formacao.ano}
                    onChange={(e) => changeForm("graduacao", index, e)}
                    placeholder="Ano"/>
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group controlId={`curso-${index}`}>
                  <Form.Label>Curso</Form.Label>
                  <Form.Control
                    type="text"
                    name="curso"
                    value={formacao.curso}
                    onChange={(e) => changeForm("graduacao", index, e)}
                    placeholder="Curso"/>
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group controlId={`instituicao-${index}`}>
                  <Form.Label>Instituição</Form.Label>
                  <Form.Control
                    type="text"
                    name="ie"
                    value={formacao.ie}
                    onChange={(e) => changeForm("graduacao", index, e)}
                    placeholder="Instituição"/>
                </Form.Group>
              </Col>

              <Col md={1} className="d-flex align-items-end">
                <Button variant="danger" onClick={() => removeForm("graduacao", index, formacao.idForm)} style={{ marginLeft: "10px" }}>
                  Deletar
                </Button>
              </Col>
            </Row>
          </Form>
        ))}

        <Button variant="primary" onClick={() => addForm("graduacao")}>
          Adicionar Graduação
        </Button>
      </div>

      <div className="mt-4">
        <h5>Pós Graduação</h5>
        {formacoes.posgraduacao.map((formacao, index) => (
          <Form key={`pos-${index}`} className="mb-3">
            <Row>
              <Col md={2}>
                <Form.Group controlId={`ano-pos-${index}`}>
                  <Form.Label>Ano</Form.Label>
                  <Form.Control
                    type="text"
                    name="ano"
                    value={formacao.ano}
                    onChange={(e) => changeForm("posgraduacao", index, e)}
                    placeholder="Ano"
                  />
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group controlId={`curso-pos-${index}`}>
                  <Form.Label>Curso</Form.Label>
                  <Form.Control
                    type="text"
                    name="curso"
                    value={formacao.curso}
                    onChange={(e) => changeForm("posgraduacao", index, e)}
                    placeholder="Curso"
                  />
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group controlId={`instituicao-pos-${index}`}>
                  <Form.Label>Instituição</Form.Label>
                  <Form.Control
                    type="text"
                    name="ie"
                    value={formacao.ie}
                    onChange={(e) => changeForm("posgraduacao", index, e)}
                    placeholder="Instituição"
                  />
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group controlId={`titulo-pos-${index}`}>
                  <Form.Label>Título</Form.Label>
                  <Form.Select
                    name="titulo"
                    value={formacao.titulo}
                    onChange={(e) => changeForm("posgraduacao", index, e)}
                  >
                    <option value="">Selecione o título</option>
                    <option value="Mestre">Mestre</option>
                    <option value="Doutor">Doutor</option>
                    <option value="Especialista">Especialista</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={1} className="d-flex align-items-end">
                <Button variant="danger" onClick={() => removeForm("posgraduacao", index, formacao.idForm)} style={{marginLeft: "10px"}}>
                  Deletar
                </Button>
              </Col>
            </Row>
          </Form>
        ))}

        <Button variant="primary" onClick={() => addForm("posgraduacao")}>
          Adicionar Pós Graduação
        </Button>
      </div>

      <div className="mt-4">
        <h5>Técnico</h5>
        {formacoes.tecnico.map((formacao, index) => (
          <Form key={`tec-${index}`} className="mb-3">
            <Row>
              <Col md={2}>
                <Form.Group controlId={`ano-tec-${index}`}>
                  <Form.Label>Ano</Form.Label>
                  <Form.Control
                    type="text"
                    name="ano"
                    value={formacao.ano}
                    onChange={(e) => changeForm("tecnico", index, e)}
                    placeholder="Ano"
                  />
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group controlId={`curso-tec-${index}`}>
                  <Form.Label>Curso</Form.Label>
                  <Form.Control
                    type="text"
                    name="curso"
                    value={formacao.curso}
                    onChange={(e) => changeForm("tecnico", index, e)}
                    placeholder="Curso"
                  />
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group controlId={`instituicao-tec-${index}`}>
                  <Form.Label>Instituição</Form.Label>
                  <Form.Control
                    type="text"
                    name="ie"
                    value={formacao.ie}
                    onChange={(e) => changeForm("tecnico", index, e)}
                    placeholder="Instituição"
                  />
                </Form.Group>
              </Col>

              <Col md={1} className="d-flex align-items-end">
                <Button variant="danger" onClick={() => removeForm("tecnico", index, formacao.idForm)} style={{ marginLeft: "10px" }}>
                  Deletar
                </Button>
              </Col>
            </Row>
          </Form>
        ))}

        <Button variant="primary" onClick={() => addForm("tecnico")}>
          Adicionar Técnico
        </Button>
      </div>

      <div className="mt-4" style={{textAlign: "center"}}>
        <Button variant="success" onClick={saveForm} >
          Salvar
        </Button>
      </div>
    </Container>
  );
}

export default MyFormacao;


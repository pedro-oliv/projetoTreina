import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import api from "../../services/Api/Api";

function MyInfoAdic(){
    const [dados, setDados] = useState({
        email: "",
        github: "",
        instagram: "",
        linkedin: ""   
    });

    const [id, setId] = useState(null);

    useEffect(() => {
        async function fetchData(){
            try{
                const response = await api.get("/informacaoadicional");
                if(response.data.length > 0){
                    setDados(response.data[0]);
                    setId(response.data[0].idInfo)
                }
            } catch (error) {
                console.error("Erro ao carregar dados:", error);
            }
        }
        fetchData();
    }, []);

    const handleChange = (e) => {
        setDados({...dados, [e.target.name]: e.target.value});
    };

    const handleSave = async () => {
        try {
            if(id) {
                await api.put(`/informacaoadicional/${id}`, dados);
                alert("Dados atualizados com sucesso!");
            } else {
                const response = await api.post("/informacaoadicional", dados);
                setId(response.data.idInfo);
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
          await api.delete(`/informacaoadicional/${id}`);
          setDados({
            email: "",
            github: "",
            instagram: "",
            linkedin: "",
          });
          setId(null);
          alert("Dados deletados com sucesso!");
        } catch (error) {
          console.error("Erro ao deletar:", error);
          alert("Erro ao deletar os dados.");
        }
    }

    return(
        <>
        <Container className="mb-3">
        <h3>Informação adicional</h3>
        <Form>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formEmail">
                <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu email" name="email" value={dados.email} onChange={handleChange} />
                </Form.Group>
            </Row>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGithub">
                <Form.Label>Github</Form.Label>
                    <Form.Control type="text" placeholder="Coloque o link do seu Github" name="github" value={dados.github} onChange={handleChange}/>
                </Form.Group>
            </Row>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formInstagram">
                <Form.Label>Instagram</Form.Label>
                    <Form.Control type="text" placeholder="Coloque o link do seu Instagram" name="instagram" value={dados.instagram} onChange={handleChange}/>
                </Form.Group>
            </Row>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formLinkedin">
                <Form.Label>LinkedIn</Form.Label>
                    <Form.Control type="text" placeholder="Coloque o link do seu LinkedIn" name="linkedin" value={dados.linkedin} onChange={handleChange}/>
                </Form.Group>
            </Row>

        <div className="mt-4" style={{textAlign: "center"}}>
            <Button variant="success" onClick={handleSave} >
                Salvar
            </Button>
            <Button variant="danger" onClick={handleDelete} style={{marginLeft:"14px"}}>
                Deletar
            </Button>
        </div>
        </Form>
        </Container>
        </>
    )
}

export default MyInfoAdic
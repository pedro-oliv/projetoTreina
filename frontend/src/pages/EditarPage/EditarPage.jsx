import { Container } from "react-bootstrap";
import MyIdentificacao from "../../components/MyIdentificacao/MyIndentificacao";
import MyFormacao from "../../components/MyFormacao/MyFormacao";
import MyExperiencia from "../../components/MyExperiencia/MyExperiencia";
import MyInfoAdic from "../../components/MyInfoAdic/MyInfoAdic";
import { WhatsappProvider } from "../../utils/Whatsapp";


function EditarPage() {
    return(
        <>
        <Container className="mb-4"><WhatsappProvider><MyIdentificacao></MyIdentificacao></WhatsappProvider></Container>
        <Container className="mb-4"><MyFormacao /></Container>
        <Container className="mb-4"><MyExperiencia /></Container>
        <Container className="mb-4"><MyInfoAdic /></Container>
        </>
    )
}

export default EditarPage
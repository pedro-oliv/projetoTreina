import IdentificacaoDisplay from "../../components/IdentificacaoDisplay/IdentificacaoDisplay";
import FormacaoDisplay from "../../components/FormacaoDisplay/FormacaoDisplay";
import ExperienciaDisplay from "../../components/ExperienciaDisplay/ExperienciaDisplay";
import InfoAdicDisplay from "../../components/InfoAdicDisplay/InfoAdicDisplay";
import { WhatsappProvider } from "../../utils/Whatsapp";

function ExibirPage(){
    return(
        <>
        <WhatsappProvider><IdentificacaoDisplay /></WhatsappProvider>
        <FormacaoDisplay />
        <ExperienciaDisplay />
        <InfoAdicDisplay />
        </>
    );
}

export default ExibirPage
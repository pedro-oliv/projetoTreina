import React from "react";
import { Form } from "react-bootstrap";
import { useWhatsapp } from "../../utils/Whatsapp";

function WhatsappCheckbox() {
  const { isChecked, setIsChecked } = useWhatsapp();

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked); 
  };

  return (
    <Form.Check
      type="checkbox"
      id="whatsappCheckbox"
      label="Telefone tem Whatsapp?"
      onChange={handleCheckboxChange} 
      checked={isChecked}
    />
  );
}

export default WhatsappCheckbox;

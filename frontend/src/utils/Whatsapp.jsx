import React, { createContext, useState, useEffect, useContext } from "react";

const WhatsappContext = createContext();


export const WhatsappProvider = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const storedValue = sessionStorage.getItem("whatsappChecked");
    if (storedValue === "true") {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, []);

  const setWhatsappChecked = (checked) => {
    setIsChecked(checked);
    sessionStorage.setItem("whatsappChecked", checked ? "true" : "false");
  };

  return (
    <WhatsappContext.Provider value={{ isChecked, setIsChecked: setWhatsappChecked }}>
      {children}
    </WhatsappContext.Provider>
  );
};

export const useWhatsapp = () => {
  return useContext(WhatsappContext);
};

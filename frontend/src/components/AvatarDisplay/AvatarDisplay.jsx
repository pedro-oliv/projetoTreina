import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import "./AvatarDisplay.css";
import defaultAvatar from "../../assets/avatar-default.512x512.png"

function AvatarDisplay() {
  const [image, setImage] = useState(sessionStorage.getItem("profileImage") || defaultAvatar);

  useEffect(() => {
    const updateImage = () => {
      setImage(sessionStorage.getItem("profileImage") || defaultAvatar);
    };

    window.addEventListener("storage", updateImage);
    return () => window.removeEventListener("storage", updateImage);
  }, []);

  return (
    <div className="avatar-display-container">
      <Image id="imagem" src={image} roundedCircle height={150} width={150} />
    </div>
  );
}

export default AvatarDisplay;

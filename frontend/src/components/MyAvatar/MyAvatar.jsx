import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { FaCamera } from "react-icons/fa";
import "./MyAvatar.css";
import defaultAvatar from "../../assets/avatar-default.512x512.png"

function MyAvatar() {
  const [image, setImage] = useState(sessionStorage.getItem("profileImage") || defaultAvatar);
  const [hover, setHover] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        sessionStorage.setItem("profileImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className="avatar-container"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image id="imagem" src={image} roundedCircle height={65} width={65} />
      
      {hover && (
        <div className="avatar-overlay" onClick={() => document.getElementById("fileInput").click()}>
          <FaCamera className="camera-icon" />
        </div>
      )}

      <input type="file" id="fileInput" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} />
    </div>
  );
}

export default MyAvatar;

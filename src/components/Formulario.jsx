import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import mapa from './assets/img/mapa.png'; 
import { TbPhone } from "react-icons/tb";
import { TbMail } from "react-icons/tb";
import { TbMapPinFilled } from "react-icons/tb";

// se usa email js tiene una apikey y keys para recibir y mandar, se necesita crear una cuenta.
const Formulario = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e9r56s9", //service id
        "template_9gwvpcm", //template id
        form.current, 
        "qWAiYePUBr6xWMKCa" //api key
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
    <div>
      <form ref={form} onSubmit={sendEmail}>
      <h1> Contactanos </h1>
        <input type="text" name="user_name" placeholder="Nombre" />
        <input type="email" name="user_email" placeholder="Email" />
        <textarea name="message" placeholder="Mensaje" />
        <input type="submit" value="Mensaje" />
      </form>
      </div>
      <img src={mapa} alt=""></img>

      <div className="contenedor">
      <div className="recuadro">
        <i className="fas fa-phone-alt"></i>
        <p> <TbPhone/> Telefono: <br></br>  <br></br> +52 55 6550 8871  </p>

      </div>
      <div className="recuadro">
        <i className="fas fa-envelope"></i>
        <p><TbMail/> Correo:  <br></br>  <br></br> soluciones@3denergy.mx</p>
      </div>
      <div className="recuadro">
        <i className="fas fa-map-marker-alt"></i>
        <p> <TbMapPinFilled/> Ubicación:  <br></br>  <br></br> Matagalpa 1072, CDMX</p>
      </div>
    </div>
    </StyledContactForm>
  );
};

export default Formulario;

// Styles
const StyledContactForm = styled.div`
    max-width:auto;
    display:inline-block;
    margin-top:110px;
    font-size:20px;
  
  div{
    margin-left: 30px;
    float: left;
    width: auto;
  }
  form {
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 20px;
  padding-right: 20px;
  padding-left: 20px;
  margin: 0 auto;
  align-items: center;
    background-color:white;
    h1{
        font-size: 24px;
        color: #52786E;
        font-weight:bold;
    }
    input {
      margin-right:20px ;
      font-size:16px;
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: black;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      font-size:16px;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    input[type="submit"] {
        margin-left: 160px;
        width: 150px;
      margin-top: 2rem;
      cursor: pointer;
      font-size:14px;
      background: #53786E;
      color: white;
      border: none;
    }
  }
  img{

        float: right;
        margin-left:200px;
        width:600px;
        margin-right:100px;
        margin-top: 30px;
    }
  .contenedor {
    margin-left: 100px ;
    width: 1300px;
    display: flex;
    justify-content: space-between;
    border: 1px solid rgb(220, 220, 220) ;
}

.recuadro {
  border: 1px solid #52786E ;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 33%;
  background-color: white;
}

.recuadro i {
  font-size: 24px;
  margin-bottom: 8px;
}

p{ 
  color: #53786E;
  font-size:25;
}
`;
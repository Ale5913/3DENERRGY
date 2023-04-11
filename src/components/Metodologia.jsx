import React from 'react'
import styled from 'styled-components'
import image from './figura.png'
import organigrama from './assets/img/Organigrama.png'
import responsive from './assets/img/organi-responsive.png'
import { useState, useEffect } from 'react';


function Metodologia(){
    const [esPantallaGrande, setEsPantallaGrande] = useState(window.innerWidth > 768);

    //Cambie el tipo de imagen dependiendo el tamaño de la pantalla
    
    useEffect(() => {
      const handleResize = () => {
        setEsPantallaGrande(window.innerWidth > 768);
      }
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }, []);

    return (
        <>
        <Container>
        <img src={image} alt="">
        </img>
        <h1>
            Metodología
        </h1>
        <div>
        Nuestra    principal    directriz    es    construir     soluciones    que entreguen    resultados  
        óptimos    que     permitan    capitalizar recursos  para  nuestros   clientes  
        y  sus  redes  de  trabajo. 
        </div>
        <div>
        Para cumplir  con  este  compromiso  3D  Energy  ha   desarrollado 
        la  metodología 3D pro, condensando en 4 etapas las  experiencias obtenidas 
        en nuestra trayectoria de más de 15 años implementando soluciones  integrales.
        </div>
        <img src={organigrama} alt="Imagen grande" id="imagen-grande" className={esPantallaGrande ? "imagen-grande" : "imagen-oculta"} > 
        </img>
        <img src={responsive} alt="Imagen pequeña" id="imagen-pequeña" className={esPantallaGrande ? "imagen-oculta" : "imagen-pequeña"}>
        </img>
        </Container>
        </>
    )
}

export default Metodologia

const Container = styled.section`
    max-width:auto;
    display:inline-block;
    margin-top:110px;
    font-size:20px;
    background-color: white;
    h1{
        font-size: 48px;
        color: #52786E;
        margin-left:180px;
        font-weight:bold;
        margin-top:50px;
    }
    div{
        background-color: white;
        vertical-align: middle;
        font-size: 16px;
        margin-top:30px;
        margin-left:100px;
        max-width:600px;
        padding-left:80px;
        margin-bottom:-2px;
    }
    img{
        background-color: white;
        float: right;
        margin-left:200px;
        width:400px;
        margin-right:100px;
        margin-top: 30px;
    }
    .imagen-grande {
    background-color: white;
    width: 1200px;
    height: auto;
    }

    .imagen-pequeña {
    background-color: white;
    width: 400px;
    height: auto;
    float: left;
    margin-left:60px;
    }

    .imagen-oculta {
    display: none;
    }
    @media (max-width: 768px) {
  h1{
    font-size: 2rem;
    margin-left: 20;
  }
  
  div{
    max-width: 100%;
    padding-left: 5%;
    margin-left: 0;
  }
  
  img{
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
}
  
`
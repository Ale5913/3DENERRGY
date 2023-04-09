import React from 'react'
import styled from 'styled-components' //usar csss personalizado en cada componente
import image from './logo.png';

function Inicio() {
    return(
        <>
           <StyledContainer>
           <img src={image} alt="" />
           <div>
           3D Energy es una empresa que impulsa integralmente la innovación,
            unificando el desarrollo de emprendedores, investigadores, científicos, 
            tecnólogos y proveedores de servicios hacia esquemas de negocios sustentables
           </div>
            </StyledContainer> 
        </>
    )
}

export default Inicio

const StyledContainer= styled.section `
    max-width:1200px;
    display:inline-block;
    margin-top:100px;
    font-size:20px;
    background-color: #E0E0E0;
    img{
        float: left;
        margin-left:200px;
        width:400px;
        margin-right:100px;
        margin-bottom:200px;
    }
    div{
        vertical-align: middle;
        font-weight:bold;
        margin-top:50px;
        margin-left:100px;
        max-width:1000px;
        padding-left:80px;
    }
`
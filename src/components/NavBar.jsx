import React, {useState} from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton' //Visual paa celular
import image from './logo.png';
function NavBar() {

  const[clicked,setClicked]= useState(false)
  //funcion para click en el icono de hamburguesa
  const handleClick= () => {
    //cuadno sea true lo pase a false
    setClicked(!clicked)
  }
  return (
    <>
    <NavContainer>
        <img src={image} alt="" />
        <div className={`links ${clicked ? 'active' : ''}`}>
        {/* <Link to="/Inicio">Inicio </Link>
        <Link to="/Metodologia">Metodologia </Link>
        <Link to="/Desempenio">Desempeño </Link>
        <Link to="/Proyectos">Proyectos </Link>
        <Link to="/Formulario">Contactanos </Link> */}
         <a href='/Inicio'>Inicio</a>
        <a href='/Metodologia'>Metodologia</a>
        <a href='/Desempeno'>Desempeño</a>
        <a href='/Proyecto'>Proyectos</a>
        <a href='/Contacto'>Contacto</a> 
        </div>
        <div className='burguer' >
        <BurguerButton clicked={clicked} handleClick={handleClick}/>
        </div>      
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
    </NavContainer>
    </>
  )
}

export default NavBar

// CSS

const NavContainer = styled.nav`
  img{
    width: 90px;
    margin-left:100px;
    margin-right:40px;
  }
  h2{
    color: #52786E ; 
    font-weight: 400;
    span{
      font-weight:bold;
      display:flex;
    }
  }
    padding: .4rem;
    background-color: #E0E0E0;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    
    a{
      color:#52786E;
      text-decoration: none;
      margin-right: 10rem;
      font-size:2rem;
    }
    Link{
      color:#52786E;
      text-decoration: none;
      margin-right: 10rem;
      font-size:2rem;
    }
    .links{
      position: absolute;
      top: -700px;
      left: -2000px;
      margin-left:auto;
      margin-right:auto;
      text-align: center;
      a{
        color:#333;
        font-size:2rem;
        display:block;
      }
      @media(min-width:768px){
        position: initial;
      
        a{
        color:white;
        font-size:2rem;
        display:inline;
      }
      }
    }
    .links.active{
      width:100%;
      display: block;
      position: absolute;
      margin-left:auto;
      margin-right:auto;
      top: 30%;
      left:0;
      right:0;
      text-align: center;
      a{
        color:#000000;
      }
    }
    .burguer{
      @media(min-width:768px){
        display: none;
      }
    }

  `
const BgDiv = styled.div`
  background-color: #52786E;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
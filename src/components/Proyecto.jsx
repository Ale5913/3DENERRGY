import React from 'react'
import styled from 'styled-components'
import img1 from './assets/img/3D Energy - Corporativa 1.jpg'
import img2 from './assets/img/3D Energy - Corporativa 2.jpg'
import img3 from './assets/img/3D Energy - Corporativa 3.jpg'
import img4 from './assets/img/3D Energy - Corporativa 4.jpg'
import img5 from './assets/img/3D Energy - Corporativa 2022.jpg'
function Proyecto () {
    return(
        <>
        <Container>
            <h1>
            NUESTROS PROYECTOS
            </h1>
            <div>
            NUESTRA EXPERIENCIA EN PROYECTOS
            </div> 
            <h2>
                Cogeneración
            </h2>
            <img src={img1} alt=''></img>
            <h3>Esquemas </h3>
            <img className='tres' src={img3} alt=''></img>
            <h4>Motogenerador</h4>
            <h4>Turbina de vapor</h4>
            <h4>Biomasa</h4>
            <h4>Turbina de gas</h4>
            <img className='dos' src={img2} alt=''></img>
            <h5> Sistemas <br></br> Termicos</h5>
            <div className='b'>
            <img className='cinco' src={img4} alt=''></img>
            <img className='seis' src={img5} alt=''></img>
            </div>
        </Container>
    </>
    )
}

export default Proyecto

const Container = styled.section`
    max-width:auto;
    display:inline-block;
    margin-top:110px;
    font-size:20px;
    background-color: white;
    h1{
        width: auto;
        font-size: 48px;
        color: #52786E;
        font-weight:bold;
        margin-top:50px;
        text-align:center;
    }
    div{
        background-color:white;
        font-size: 28px;
        font-weight:none;
        color: black;       
        text-align:center;
    }
    div.b{
        background-color: white;
    }
    h2{
        display: inline-block;
        color: #52786E;
        font-size: 93px;
        margin-left: 60px;
    }
    h3{
        display: inline-block;
        color: #3D3D3D;
        font-size: 50px;
        margin-left: 60px;
    }
    h4{
        margin-right:100px;
        color: #3D3D3D;
        font-size: 24px;
        margin-left: 100px;
    }
    h5{
        color: #52786E;
        font-size: 93px;
        background-color: white;
        margin-top: 100px;
        margin-left: 800px;
    }
    img{
        background-color: white;
        float: right;
        margin-left:200px;
        width:400px;
        margin-right:100px;
         margin-top: 30px;
    }

    img.dos{
        background-color: white;
        width:500px;
        position: absolute;
        margin-left: 50px;

    }
    img.tres{
        background-color: white;
        float: right;
        margin-left:200px;
        width:800px;
        margin-right:100px;
        margin-top: 100px;
    }
    img.cuatro{
        background-color: white;
        float: left;
        margin-left:200px;
        width:400px;
        margin-right:100px;
         margin-top: 30px;
    }
    div.b{
        margin-left: 70px;
        display: inline-block;
        background-color: white;
    }
    img.cinco{
        float: left;
        margin: 3px;
        padding: 3px;
    }
    img.seis{
        width: 700px;
    }

    @media screen and (max-width: 768px) {
  h1 {
    font-size: 5vw;
    margin-top: 10vw;
    text-align: start;
    margin-left: 5%;
  }

  div {
    font-size: 5vw;
    margin-top: 10vw;
    margin-left: 5%;
    text-align: start;
  }

  h2 {
    font-size: 10vw;
    margin-left: 5vw;
  }

  h3 {
    font-size: 15vw;
    margin-left: 5vw;
  }

  h4 {
    font-size: 6vw;
    margin-left: 5vw;
    margin-right: 5vw;
  }

  h5 {
    font-size: 15vw;
    margin-top: 20vw;
    margin-left: 10vw;
  }

  img {
    width: 70%;
    margin: 5vw;
    margin-left: 5%;
    float: left;
  }

  img.dos {
    width: 90%;
    margin-left: 5%;
    position: relative;
  }

  img.tres {
    width: 78%;
    margin-left: 10%;
    margin-top: 10vw;
  }

  img.cuatro {
    width: 80%;
    margin: 5vw;
    margin-left: 5%;
  }

  div.b {
    margin-left: 5vw;
  }

  img.cinco {
    width: 30%;
    margin: 2vw;
    margin-left: 5%;
  }
  img.seis{
        width: 300px;
        margin-left: 5%;
    }
}

`
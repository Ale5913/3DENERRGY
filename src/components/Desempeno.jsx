import React from 'react'
import styled from 'styled-components'
import { FaMapMarkerAlt } from "react-icons/fa";

function Desempeno () {
    return(
        <>
        <Container>
            <h1>
                Desempeño
            </h1>
            <div>
            Predesarrollo de 683 MW
            </div>
            <div className='titulos'>
                <div>Ciclos <br></br>combinados</div>
                <div>Eolico</div>
                <div>Ciclos <br></br>combinados</div>
                <div>Ciclos <br></br> combinados</div>
            </div>
            <div className='ciculocontainer'>
            <div className="circulo">
            <h2>550MW</h2>
            </div>
            <div className="circulo">
            <h2>550MW</h2>
            </div>       
            <div className="circulo">
            <h2>550MW</h2>
            </div>            
            <div className="circulo">
            <h2>550MW</h2>
            </div>
            </div>
            <div className="titulos">
            <div className="locaciones"><FaMapMarkerAlt/>Guanajuato <br></br> <br></br>  
            <FaMapMarkerAlt/>Estado de México 
            <br></br> <br></br> <FaMapMarkerAlt/>Baja California
             </div> 
            <div className="locaciones"><FaMapMarkerAlt/>Baja California </div>
            <div className="locaciones"><FaMapMarkerAlt/>Guanajuato
            <br></br> <br></br> <FaMapMarkerAlt/>Baja California
            <br></br> <br></br> <FaMapMarkerAlt/>Puebla </div>
            <div className="locaciones"><FaMapMarkerAlt/>Estado de México </div>
            </div>
            <button className="green-button"> Conocer más</button>
            
        </Container>
    </>
    )
}

export default Desempeno

const Container = styled.section`
    max-width:auto;
    font-size:20px;
    background-color: #E0E0E0;
    h1{
        font-size: 48px;
        color: #52786E;
        font-weight:bold;
        margin-top:50px;
        text-align:center;
    }
    div{
        font-size: 28px;
        font-weight:none;
        color: #52786E;       
        text-align:center;
    }
    div.titulos{     
        display: flex;
        align-items: center;
        justify-content: space-between; 
        font-weight:bold;
        padding: .4rem;
        margin-left:60px;
        margin-right:60px;
    }
    div.locaciones{
        font-size:24px;
        color: #3D3D3D;
        font-weight:bold;
        display: inline-block;
        text-align:justify;
    }
    .circulo {
    display: flex;
    align-items: center;
    justify-content: space-between; 
    width: 120px;
    height: 120px;
	border-radius: 50%;
	background: #52786E;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
    padding:3%
}
.ciculocontainer{
        display: flex;
        align-items: center;
        justify-content: space-between; 
        font-weight:bold;
        padding: .4rem;
        margin-left:50px;
        margin-right:50px;
}

.circulo > h2 {
	color: white;
	font-size:56;
	font-weight: bold;
}
.green-button {
  display: block;
  margin: 50px auto;
  background-color:#52786E ;
  color: white;
  font-weight:bold;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  font-size:27px;
  cursor: pointer;
}
@media screen and (max-width: 768px) {
    h1 {
        font-size: 36px;
        margin-top: 30px;
    }

    div {
        font-size: 20px;
    }
    div.locaciones{
        font-size: 12px;
    }
    div.titulos {
        margin-left: 30px;
        margin-right: 30px;
    }

    .circulo {
        width: 80px;
        height: 80px;
    }

    .ciculocontainer {
        margin-left: 30px;
        margin-right: 30px;
    }

    .green-button {
        font-size: 20px;
        padding: 8px 16px;
        margin: 30px auto;
    }
}

`
import React from "react";
import styled from "styled-components";


// configuración visual de las slides del carousel 

function Slide({ image, title, description, buttonText }) {
  return (
    <Container>
        <div className="card">
      <img src={image} alt={title} />
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button>{buttonText}</button>
      </div>
    </div>
    </Container>
  );
}

export default Slide;

const Container = styled.section`
width: all;
background-color: white;
.card{
  display: flex;
  align-items: center;
  width: 1300px;
  margin-left:100px;
  padding: 19px;
  position: relative;
  box-shadow: 0 2px 3px 0 rgba(0,0,0,0.25);
  border-top: 6px solid #D8D8D8;
  transition: all 0.3s ease-in-out;
  z-index: 1;
  }


.slick-dots li button:before {
  content: " ";
  background: #D8D8D8;
  opacity: 1;
  height: 4px;
  width: 40px;
}

.slick-dots li.slick-active button:before {
  content: " ";
  background: #0080AD;
  opacity: 1;
  height: 4px;
  width: 40px;
}
.slide {
  display: flex;
  align-items: center;
}

.card .content {
  width: 50%;
  padding: 0 20px;
}

.card h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.card p {
  font-size: 18px;
  margin-bottom: 20px;
}

.card button {
  font-size: 18px;
  padding: 10px 20px;
  background-color: #3333
}
@media only screen and (max-width: 768px) {
  .card {
    flex-direction: column;
    align-items: flex-start;
    padding: 19px 10px;
  }

  .card .content {
    width: 60%;
    margin-top: 20px;
    text-align: start;
  }

  .card h2 {
    font-size: 20px;
    text-align: start;
  }

  .card p {
    font-size: 16px;
    margin-bottom: 10px;
    text-align: start;
  }

  .card button {
    font-size: 16px;
    padding: 10px 15px;
  }
  .img{
    width: 60%;
  }
}
`
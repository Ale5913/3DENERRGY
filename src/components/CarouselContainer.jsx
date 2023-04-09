import React from "react";
import Slider from "react-slick"; //libreria para la creacion de carrousel
import Slide from "./Slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselContainer() {

  //jala la configuracion de Slides.jsx
  const slides = [
    {
      image: "https://via.placeholder.com/600x400",
      title: "Título de la diapositiva 1",
      description: "Descripción de la diapositiva 1",
      buttonText: "Botón 1",
    },
    {
      image: "https://via.placeholder.com/600x400",
      title: "Título de la diapositiva 2",
      description: "Descripción de la diapositiva 2",
      buttonText: "Botón 2",
    },
    {
      image: "https://via.placeholder.com/600x400",
      title: "Título de la diapositiva 3",
      description: "Descripción de la diapositiva 3",
      buttonText: "Botón 3",
    },
  ];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <Slide key={index} {...slide} />
      ))}
    </Slider>
  );
}

export default CarouselContainer;


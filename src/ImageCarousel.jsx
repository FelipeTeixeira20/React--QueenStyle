import React from 'react';
import Swiper from 'swiper/bundle';

import 'swiper/swiper-bundle.css';
import './ImageCarousel.css';
import './App.css'

class ImageCarousel extends React.Component {
  componentDidMount() {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 5000, // Tempo em milissegundos (8 segundos)
        disableOnInteraction: false, // O carrossel continuará mesmo se o usuário interagir com ele
      },
    });
  }

  render() {
    const { images } = this.props;

    return (
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {images.map((image, index) => (
                <div className="swiper-slide" key={index}>
                  <img src={image} alt={`Image ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
    );
  }
}

export default ImageCarousel;

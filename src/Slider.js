import React, { useState, useEffect } from 'react';
import './Slider.css'; // Importe um arquivo CSS para estilizar o slider

const images = [
  'https://img.freepik.com/fotos-gratis/retrato-do-modelo-de-sorriso-bonito-do-homem-de-negocios-lumbersexual-do-moderno-a-moda-homem-vestido-com-roupas-de-jaqueta-jeans_158538-1743.jpg',
  'https://cf.shopee.com.br/file/sg-11134201-22100-p8n90wh31xiv5c',
]; // Substitua com os URLs das suas imagens

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);

      // Após 8 segundos, avançar para a próxima imagem
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
        setShowImage(true);
      }, 1000);
    }, 8000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="slider">
      {showImage && (
        <img
          src={images[currentIndex]}
          alt={`Imagem ${currentIndex + 1}`}
          className="slider-image"
        />
      )}
    </div>
  );
};

export default Slider;

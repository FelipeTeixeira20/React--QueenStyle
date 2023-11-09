import React, { useState, useEffect } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css"; // Importe os estilos do Font Awesome
import ImageCarousel from "./ImageCarousel";

function App() {
  const images = [
    "image/Homens.png",
    "image/Mulheres.png",
    "image/mulheres2.png",
  ];
  return (
    <div>
      <header className="cabecalho-principal-QUEENSTYLE">
        <img
          className="img-QUEENSTYLE-cabecalho-principal"
          src="image/QUEENSTYLE.png"
          alt="QUEENSTYLE"
        />
      </header>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="#">Feminino</a>
          </li>
          <li className="navbar-item">
            <a href="#">Masculino</a>
          </li>
          <li className="navbar-item">
            <a href="#">Infantil</a>
          </li>
          <li className="navbar-item">
            <a href="#">Promoção</a>
          </li>
        </ul>
        <div className="no-bullet">
          <li className="navbar-item search-icon">
            <input type="text" placeholder="Pesquisar..." />
            <i className="fa fa-search"></i>
            <i className="fa fa-heart"></i>
            <i className="fa fa-user"></i>
            <i className="fa fa-brazilian-real-sign"></i>
          </li>
        </div>
      </nav>
      <div className="Slider">
        <ImageCarousel images={images} />
      </div>
      <div className="aplicativo">
        <div className="column">
          <button className="button">Coleções</button>
          <button className="button">Coleções</button>
        </div>
        <div className="column">
          <button className="button">Coleções</button>
          <button className="button">Coleções</button>
        </div>
        <div className="columnD">
          <button className="buttonD">Destaques</button>
        </div>
      </div>
    </div>
  );
}

export default App;

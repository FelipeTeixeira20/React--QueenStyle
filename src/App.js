import React, { useState, useEffect } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css"; // Importe os estilos do Font Awesome
import ImageCarousel from "./ImageCarousel";

const produtos = [
  {
    id: 1,
    nome: "Camiseta Floral",
    descricao: "Uma linda camiseta com estampa floral.",
    preco: 39.99,
    imagem: "image/estampaflorida.jpg",
  },
  {
    id: 2,
    nome: "Calça Jeans",
    descricao: "Calça jeans confortável e estilosa.",
    preco: 59.99,
    imagem: "image/calcajeans.jpeg",
  },
  {
    id: 3,
    nome: "Calça Jeans",
    descricao: "Calça jeans confortável e estilosa.",
    preco: 59.99,
    imagem: "image/calcajeans.jpeg",
  },
  {
    id: 4,
    nome: "Calça Jeans",
    descricao: "Calça jeans confortável e estilosa.",
    preco: 59.99,
    imagem: "image/calcajeans.jpeg",
  },
  {
    id: 5,
    nome: "Calça Jeans",
    descricao: "Calça jeans confortável e estilosa.",
    preco: 59.99,
    imagem: "image/calcajeans.jpeg",
  },
  {
    id: 6,
    nome: "Calça Jeans",
    descricao: "Calça jeans confortável e estilosa.",
    preco: 59.99,
    imagem: "image/calcajeans.jpeg",
  },
  {
    id: 7,
    nome: "Calça Jeans",
    descricao: "Calça jeans confortável e estilosa.",
    preco: 59.99,
    imagem: "image/calcajeans.jpeg",
  },
    
];

const Produto = ({ produto }) => (
  <div className="produto">
    <img src={produto.imagem} alt={produto.nome} />
    <h3>{produto.nome}</h3>
    <p>{produto.descricao}</p>
    <p>Preço: R$ {produto.preco.toFixed(2)}</p>
    <button>Adicionar ao Carrinho</button>
  </div>
);

const Loja = () => (
  <div className="loja">
    <div className="produtos">
      {produtos.map((produto) => (
        <Produto key={produto.id} produto={produto} />
      ))}
    </div>
  </div>
);

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
            <a href="#" data-text="Feminino">
              Feminino
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" data-text="Masculino">
              Masculino
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" data-text="Infantil">
              Infantil
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" data-text="Promocao">
              Promoção
            </a>
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
      <div>
        <Loja />
      </div>
    </div>
  );
}

export default App;

/* eslint-disable max-len */
import React from 'react';
import PhotoSmiling from '../images/personal-pictures/photo-smiling.png';
import PhotoLecture from '../images/personal-pictures/photo-lecture.jpeg';
import Header from '../components/Header';
import '../styles/pages/Home.css';

function Home() {
  return (
    <div className="home-div">
      <Header />
      <section className="intro-section">
        <div className="intro-text">
          <h1>
            Te ajudo a colocar suas finanças
            {' '}
            <spam className="text-highlight">pessoais e empresariais</spam>
            {' '}
            em ordem...
          </h1>
          <h2>... e você já vai começar a ver a diferença em menos de 30 dias</h2>
        </div>
        <img src={ PhotoSmiling } alt="foto Michelle Abritta" />
      </section>
      <section className="about-section">
        <h2>Sobre mim</h2>
        <div className="about-section-content-div">
          <img alt="Michelle Abritta palestrando" src={ PhotoLecture } />
          <div className="about-section-content-text-div">
            <p>
              Eu sempre gostei de ajudar empreendedoras no início de suas empresas e, como sou uma empreendedora desde muito nova, sei da importância da organização financeira.
            </p>
            <p>
              Por isso, cursei Administração e, após mais de 25 anos de experiência na gestão da minha própria empresa e prestando consultoria financeira para outras pessoas, desenvolvi um método simples e eficaz para ajudar empreendedoras como você no começo da jornada.
            </p>
          </div>
        </div>
      </section>
      <section className="services-list">
        <div className="service-div">
          <img src="https://img.icons8.com/pastel-glyph/64/null/analytics.png" alt="icone BPO" />
          <h2>BPO - Business Process Outsourcing</h2>
          <p>Gestão financeira para empresas, garantindo os fluxos operacionais com eficência, te proporcionando tranquilidade para focar naquilo que importa: o crescimento do seu negócio.</p>
        </div>
        <div className="service-div">
          <img src="https://img.icons8.com/pastel-glyph/64/null/personal-growth--v1.png" alt="icone treinamento de gestão financeira para MEI" />
          <h2>Treinamento para Microempreendedores</h2>
          <p>
            Ensino microempreendedores a fazerem a gestão financeira do seu próprio negócio.
          </p>
          <p>
            Usando um método simples e descomplicado, o empreendedor vai organizar suas finanças de uma maneira rápida, para ter mais tempo para focar no que importa.
          </p>
          <button type="button">Saiba mais</button>
        </div>
        <div className="service-div">
          <img src="https://img.icons8.com/pastel-glyph/64/null/stocks-growth.png" alt="icone assessoria empresarial financeira" />
          <h2>Assessoria empresarial e financeira</h2>
          <p>Ajudo você a organizar a sua empresa.</p>
          <p>Seja na estruturação de processos e formalização, seja na gestão das finanças da sua empresa.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;

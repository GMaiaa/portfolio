import React from "react";
import "./index.css";
import Photo from "../../utils/me.jpg";
import Logo from "../../utils/Logo.png";
import Undraw from "../../utils/undraw.svg"
const Porfolio = () => {
  return (
    <div>
      <div id="header">
        <nav>
          <img src={Logo} alt="" />
          <ul>
            <li>
              <a href=""> Sobre </a>
            </li>
            <li>
              <a href=""> Skills </a>
            </li>
            <li>
              <a href=""> Laboratório </a>
            </li>
            <li>
              <a href=""> Contato </a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="aboutCv">
        <div id="aboutCvContent">
          <div>
          <h2>Desenvolvedor FullStack</h2>
          <h1>Gabriel Maia</h1>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa
            gentis num é.Quem manda na minha terra sou euzis!Viva Forevis aptent
            taciti sociosqu ad litora torquent.Sapien in monti palavris qui num
            significa nadis i pareci latim.
          </p>
          <button>Baixar Currículo</button>
          </div>
          <img src={Undraw} alt="" />

        </div>
      </div>
      <div id="aboutMe">
        <img src={Photo} alt="" />
        <h1>Sobre</h1>
        <h2>Conheça um pouco mais sobre mim</h2>
        <p>
          Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna
          nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.Não sou
          faixa preta cumpadi, sou preto inteiris, inteiris.Nullam volutpat
          risus nec leo commodo, ut interdum diam laoreet. Sed non consequat
          odio.Aenean aliquam molestie leo, vitae iaculis nisl. Praesent
          malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate
          dapibus.Quem manda na minha terra sou euzis!Atirei o pau no gatis, per
          gatis num morreus.Paisis, filhis, espiritis santis. Nullam volutpat
          risus nec leo commodo, ut interdum diam laoreet. Sed non consequat
          odio.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis,
          aguis e fermentis.Paisis, filhis, espiritis santis.Aenean aliquam
          molestie leo, vitae iaculis nisl.
        </p>
      </div>
    </div>
  );
};

export default Porfolio;

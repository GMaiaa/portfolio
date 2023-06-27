import React from "react";
import "./index.css";
import Photo from "../../utils/me.jpg";
import Logo from "../../utils/Logo.png";
import Undraw from "../../utils/undraw.svg";
import { MdEmail } from "react-icons/md";
import { AiOutlineGithub, AiFillLinkedin, AiFillHtml5 } from "react-icons/ai";
import { SiSquare, SiMysql } from "react-icons/si";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoJava,
  BiLogoCPlusPlus,
} from "react-icons/bi";
import "animate.css";
import { Link } from "react-router-dom";
import Skill , { SkillProps } from "../../components/skills";

const Porfolio = () => {
  const skills: SkillProps[] = [
    {
      icon: <AiFillHtml5 color="#e34c26" />,
      title: "HTML",
      color: "#e34c26",
      percentage: "80%",
    },
    {
      icon: <BiLogoCss3 color="#264de4" />,
      title: "CSS",
      color: "#264de4",
      percentage: "80%",
    },
    {
      icon: <BiLogoJavascript color="#F0DB4F" />,
      title: "JavaScript",
      color: "#F0DB4F",
      percentage: "70%",
    },
    {
      icon: <BiLogoJava color="#f89820" />,
      title: "Java",
      color: "#f89820",
      percentage: "50%",
    },
    {
      icon: <BiLogoCPlusPlus color="#044F88" />,
      title: "C++",
      color: "#044F88",
      percentage: "50%",
    },
    {
      icon: <SiMysql color="#00758F" />,
      title: "MySQL",
      color: "#00758F",
      percentage: "40%",
    },
  ];
  return (
    <div id="body">
      <div id="header">
        <nav>
          <img src={Logo} alt="" />
          <ul>
            <li>
              <a href="#aboutMe"> Sobre </a>
            </li>
            <li>
              <a href="#skills"> Skills </a>
            </li>
            <li>
              <a href="#dadaa"> Laboratório </a>
            </li>
            <li>
              <a href="#dadad"> Contato </a>
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
              Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé,
              boa gentis num é.Quem manda na minha terra sou euzis!Viva Forevis
              aptent taciti sociosqu ad litora torquent.Sapien in monti palavris
              qui num significa nadis i pareci latim.
            </p>
            <button>Baixar Currículo</button>
          </div>
          <img src={Undraw} alt="" />
        </div>
      </div>
      <div id="aboutMe">
        <div id="aboutMeContent">
          <div>
            <img src={Photo} alt="" />
            <div id="socialMediasBtt">
              <Link
                to="#"
                onClick={(e) => {
                  window.location.href = "mailto:gabrielmaiaa22@gmail.com";
                  e.preventDefault();
                }}
              >
                <button>
                  <MdEmail />
                </button>
              </Link>
              <Link to="https://github.com/GMaiaa">
                <button>
                  <AiOutlineGithub />
                </button>
              </Link>
              <Link to="https://www.linkedin.com/in/gabrielmaiasoares/">
                <button>
                  <AiFillLinkedin />
                </button>
              </Link>
            </div>
          </div>
          <div id="aboutMeText">
            <div id="about">
              <SiSquare />
              <h1>Sobre</h1>
            </div>
            <h2>Conheça um pouco mais sobre mim</h2>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna
              nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.Não
              sou faixa preta cumpadi, sou preto inteiris, inteiris.Nullam
              volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non
              consequat odio.Aenean aliquam molestie leo, vitae iaculis nisl.
              Praesent malesuada urna nisi, quis volutpat erat hendrerit non.
              Nam vulputate dapibus.Quem manda na minha terra sou euzis!Atirei o
              pau no gatis, per gatis num morreus.Paisis, filhis, espiritis
              santis. Nullam volutpat risus nec leo commodo, ut interdum diam
              laoreet. Sed non consequat odio.Suco de cevadiss, é um leite
              divinis, qui tem lupuliz, matis, aguis e fermentis.Paisis, filhis,
              espiritis santis.Aenean aliquam molestie leo, vitae iaculis nisl.
            </p>
          </div>
        </div>
      </div>

      <div id="skills">
        <div id="skillsTitle">
          <SiSquare />
          <h1> Skills </h1>
        </div>
        <div id="skillContent">
          {skills.map((skill) => {
            return (
              <Skill
                icon={skill.icon}
                title={skill.title}
                color={skill.color}
                percentage={skill.percentage}
              />
            );
          })}
        </div>
      </div>

      <div id="lab">
        <div id="labTitle">
          <SiSquare />
          <h1> Laboratório </h1>
        </div>
      </div>
    </div>
  );
};

export default Porfolio;

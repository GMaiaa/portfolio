import React from "react";
import "./index.css";
import Photo from "../../utils/me.jpg";
import Logo from "../../utils/Logo.png";
import Undraw from "../../utils/undraw.svg";
import { MdEmail } from "react-icons/md";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineLinkedin,
  AiFillHtml5,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import { SiSquare, SiMysql } from "react-icons/si";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoJava,
  BiLogoCPlusPlus,
  BiLogoReact,
} from "react-icons/bi";
import "animate.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Skill, { SkillProps } from "../../components/skills";
import LabCard, { cardProps } from "../../components/labCards";

const Porfolio = () => {
  const navRef = useRef<HTMLDivElement>(null);

  const showNavBar = () => {
    const ref = navRef.current;
    ref?.classList.toggle("reponsiveNav");
  };

  const cards: cardProps[] = [
    {
      image:
        "https://media.discordapp.net/attachments/564238411280416773/1123328874013532210/image.png",
      title: "FastSale PDV - P.I FATEC 2º Semestre",
      desc: "Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis.",
      languages: ["React", "Firebase"],
      adress: "https://github.com/GMaiaa/ProjetoPDV",
    },
    {
      image:
        "https://media.discordapp.net/attachments/564238411280416773/1123392736326852688/image.png?width=1397&height=676",
      title: "GitHub Favorites",
      desc: "Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis.",
      languages: ["HTML", "CSS", "JavaScript"],
      adress: "https://github.com/GMaiaa/Rocketseat/tree/main/GitHub-Favorites",
    },
    {
      image:
        "https://media.discordapp.net/attachments/773238453684011018/1123395707970256916/image.png?width=1391&height=676",
      title: "Jogo da adivinhação",
      desc: "Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis.",
      languages: ["HTML", "CSS", "JavaS"],
      adress:
        "https://github.com/GMaiaa/Rocketseat/tree/main/JS/jogo-adivinhacao",
    },
  ];
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
    {
      icon: <BiLogoReact color="#61DBFB" />,
      title: "React",
      color: "#61DBFB",
      percentage: "30%",
    },
  ];
  return (
    <div id="body">
      <div id="header">
        <img src={Logo} alt="" />
        <nav ref={navRef}>
          <ul>
            <li>
              <a href="#aboutMe"> Sobre </a>
            </li>
            <li>
              <a href="#skills"> Skills </a>
            </li>
            <li>
              <a href="#lab"> Laboratório </a>
            </li>
            <li>
              <a href="#contact"> Contato </a>
            </li>
          </ul>
          <button className="navBtn navCloseBtn" onClick={showNavBar}>
            <FaTimes />
          </button>
        </nav>
        <button className="navBtn" onClick={showNavBar}>
          <FaBars />
        </button>
      </div>
      <div id="aboutCv">
        <div id="aboutCvContent">
          <div>
            <h2>Desenvolvedor FullStack</h2>
            <h1>Gabriel Maia</h1>
            <p>
              Olá! Meu nome é Gabriel Maia Soares, tenho 19 anos e estou
              entusiasmado em compartilhar um pouco sobre mim. Meu objetivo
              profissional é conseguir meu primeiro emprego em um ambiente que
              me permita evoluir constantemente.
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
              Sou uma pessoa comprometida e motivada, sempre em busca de
              desafios que me permitam crescer tanto pessoal quanto
              profissionalmente. Tenho facilidade em trabalhar em equipe e sou
              aberto a diferentes perspectivas. <br />
              Atualmente estou cursando Desenvolvimento de Software
              Multiplataforma na FATEC, onde tenho a oportunidade de adquirir
              conhecimentos sólidos e práticos na área de tecnologia. Estou
              animado com a possibilidade de aplicar essas habilidades em um
              contexto profissional, contribuindo com minha dedicação,
              criatividade e vontade de aprender.
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
        <div id="labContent">
          {cards.map((card) => {
            return (
              <LabCard
                image={card.image}
                title={card.title}
                desc={card.desc}
                languages={card.languages}
                adress={card.adress}
              />
            );
          })}
        </div>
      </div>

      <div id="contact">
        <div id="contactTitle">
          <SiSquare />
          <h1> Contato </h1>
        </div>
        <div id="contactContent">
          <div id="aboutContact">
            <p>
              Se você gostou do meu trabalho e deseja entrar em contato para
              discutir oportunidades de colaboração, por favor, sinta-se à
              vontade para utilizar as informações de contato abaixo.
            </p>
          </div>
          <div id="myMedias">
            <div className="medias">
              <p>
                <AiOutlineWhatsApp
                  style={{ color: "var(--blue)", fontSize: "2rem" }}
                />
                11 95158-0560
              </p>
              <p>
                <AiOutlineMail
                  style={{ color: "var(--blue)", fontSize: "2rem" }}
                />
                gabrielmaiaa22@gmail.com
              </p>
            </div>
            <div className="medias">
              <p>
                {" "}
                <AiOutlineGithub
                  style={{ color: "var(--blue)", fontSize: "2rem" }}
                />
                github.com/GMaiaa
              </p>
              <p>
                <AiOutlineLinkedin
                  style={{ color: "var(--blue)", fontSize: "2rem" }}
                />{" "}
                linkedin.com/in/gabrielmaiasoares/
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <p>© 2023 - Developed by Gabriel Maia</p>
        <div id="footerBar"></div>
      </div>
    </div>
  );
};

export default Porfolio;

import React, { useState } from "react";
import "./index.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export interface cardProps {
  image: string;
  title: string;
  desc: string;
  languages: string[];
  adress: string;
}

const LabCard = ({ image, title, desc, languages, adress}: cardProps) => {
  const [specsIsShow, setSpecsIsShow] = useState(false);
  const [contentIsShow, setContentIsShow] = useState(true);
  return (
    <div
      id="card"
      onMouseEnter={() => {
        setSpecsIsShow(true);
        setContentIsShow(false);
      }}
      onMouseLeave={() => {
        setSpecsIsShow(false);
        setContentIsShow(true);
      }}
    >
      {contentIsShow && (
        <motion.div
          id="cardContent"
          initial={{ opacity: 0.01 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.07 }}
        >
          <img src={image} alt="" />
          <h1>{title}</h1>
          <p>{desc}</p>
        </motion.div>
      )}
      {specsIsShow && (
        <motion.div
          id="cardContentSpecs"
          initial={{ opacity: 0.01 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.07 }}
        >
          <h1>{title}</h1>
          <p>{desc}</p>
          <div id="specs">
            {languages.map((language) => {
              return (
                <div id="tecSpecs">
                  <p>{language}</p>
                </div>
              );
            })}
          </div>
          <Link to={adress}>
          <button> Acessar </button>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default LabCard;

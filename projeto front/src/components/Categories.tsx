import { useState } from "react";

import tecnologiaImg from "../assets/tecnologia.png";
import supermercadoImg from "../assets/supermecado.png";
import bebidasImg from "../assets/bebidas.png";
import ferramentasImg from "../assets/ferramentas.png";
import saudeImg from "../assets/saúde.png";
import esportesImg from "../assets/esportes.png";
import modaImg from "../assets/moda.png";

interface Category {
  icon: string | any;
  label: string;
}

const CATEGORIES: Category[] = [
  { icon: tecnologiaImg,   label: "Tecnologia" },
  { icon: supermercadoImg, label: "Supermercado" },
  { icon: bebidasImg,      label: "Bebidas" },
  { icon: ferramentasImg,  label: "Ferramentas" },
  { icon: saudeImg,        label: "Saúde" },
  { icon: esportesImg,     label: "Esportes e Fitness" },
  { icon: modaImg,         label: "Moda" },
];

export default function Categories() {
  const [active, setActive] = useState<number>(0);

  return (
    <div className="categories-section">
      <div className="categories-grid">
        {CATEGORIES.map((cat, i) => (
          <div
            key={cat.label}
            className={`category-item${active === i ? " active" : ""}`}
            onClick={() => setActive(i)}
          >
            <div className="category-icon">
              <img src={cat.icon} alt={cat.label} />
            </div>
            <span>{cat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
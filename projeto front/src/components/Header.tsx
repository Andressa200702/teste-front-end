import { useState } from "react";

const NAV_LINKS: string[] = [
  "TODAS CATEGORIAS", "SUPERMERCADO", "LIVROS", "MODA",
  "LANÇAMENTOS", "OFERTAS DO DIA", "ASSINATURA",
];

export default function Header() {
  const [activeNav, setActiveNav] = useState<number>(5);

  return (
    <>
      <div className="top-bar">
        <span>🛡️ Compra <strong className="highlight">100% segura</strong></span>
        <span>🚚 Frete <strong className="yellow">grátis</strong> acima de R$ 200</span>
        <span>💳 <strong className="highlight">Parcele</strong> suas compras</span>
      </div>

      <header className="main-header">
        <div className="logo">
          <div className="logo-badge">ec</div>
          <span className="logo-text">onverse</span>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="O que você está buscando?" />
          <button>🔍</button>
        </div>

        <div className="header-icons">
          <span title="Vitrine">🪟</span>
          <span title="Favoritos">♡</span>
          <span title="Minha conta">👤</span>
          <span title="Carrinho">🛒</span>
        </div>
      </header>

      <nav className="nav-bar">
        {NAV_LINKS.map((link, i) => (
          <a key={link} href="#"
            className={activeNav === i ? "active" : ""}
            onClick={(e) => { e.preventDefault(); setActiveNav(i); }}
          >
            {link}
          </a>
        ))}
      </nav>
    </>
  );
}
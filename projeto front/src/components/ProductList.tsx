import { useState } from "react";
import ProductCard from "./ProductCard";

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface ProductListProps {
  title: string;
  subtitle?: string;
  showTabs?: boolean;
}

const TABS: string[] = ["CELULAR", "ACESSÓRIOS", "TABLETS", "NOTEBOOKS", "TVS", "VER TODOS"];
const PER_PAGE = 4;

// Dados da API colados diretamente (evita erro de CORS no localhost)
const PRODUCTS: Product[] = [
  { productName: "Iphone 11 PRO MAX BRANCO 1", descriptionShort: "Iphone 11 PRO MAX BRANCO 1", photo: "", price: 1500 },
  { productName: "IPHONE 13 MINI 1", descriptionShort: "IPHONE 13 MINI 1", photo: "", price: 9000 },
  { productName: "Iphone 11 PRO MAX BRANCO 2", descriptionShort: "Iphone 11 PRO MAX BRANCO 2", photo: "", price: 1499 },
  { productName: "IPHONE 13 MINI 2", descriptionShort: "IPHONE 13 MINI 2", photo: "", price: 12000 },
  { productName: "Iphone 11 PRO MAX BRANCO 3", descriptionShort: "Iphone 11 PRO MAX BRANCO 3", photo: "", price: 4550 },
  { productName: "IPHONE 13 MINI 3", descriptionShort: "IPHONE 13 MINI 3", photo: "", price: 38000 },
  { productName: "Iphone 11 PRO MAX BRANCO 4", descriptionShort: "Iphone 11 PRO MAX BRANCO 4", photo: "", price: 2200 },
  { productName: "IPHONE 13 MINI 4", descriptionShort: "IPHONE 13 MINI 4", photo: "", price: 520 },
  { productName: "Iphone 11 PRO MAX BRANCO 5", descriptionShort: "Iphone 11 PRO MAX BRANCO 5", photo: "", price: 1499 },
  { productName: "IPHONE 13 MINI 5", descriptionShort: "IPHONE 13 MINI 5", photo: "", price: 3500 },
];

export default function ProductList({ title, subtitle, showTabs = false }: ProductListProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [page, setPage] = useState<number>(0);

  const totalPages = Math.ceil(PRODUCTS.length / PER_PAGE);
  const visible = PRODUCTS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="product-list-section">
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}

      {showTabs && (
        <div className="tabs">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              className={`tab-btn${activeTab === i ? " active" : ""}`}
              onClick={() => setActiveTab(i)}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      <div className="carousel-wrapper">
        {page > 0 && (
          <button className="carousel-arrow left" onClick={() => setPage(page - 1)}>‹</button>
        )}
        <div className="product-grid">
          {visible.map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>
        {page < totalPages - 1 && (
          <button className="carousel-arrow right" onClick={() => setPage(page + 1)}>›</button>
        )}
      </div>
    </section>
  );
}
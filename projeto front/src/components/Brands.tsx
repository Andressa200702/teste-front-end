interface Brand {
  id: number;
  name: string;
}

const BRANDS: Brand[] = [
  { id: 1, name: "econverse" },
  { id: 2, name: "econverse" },
  { id: 3, name: "econverse" },
  { id: 4, name: "econverse" },
  { id: 5, name: "econverse" },
];

export default function Brands() {
  return (
    <section className="brands-section">
      <h2 className="section-title">Navegue por marcas</h2>
      <div className="brands-row">
        {BRANDS.map((brand) => (
          <div key={brand.id} className="brand-circle">
            <div className="brand-logo">
            <div className="brand-badge">ec</div>
            <span className="brand-rest">onverse</span>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
}
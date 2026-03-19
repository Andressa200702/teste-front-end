import parceirosImg from "../assets/parceiros.jpg";

interface Partner {
  id: number;
  title: string;
  description: string;
}

const PARTNERS: Partner[] = [
  { id: 1, title: "Parceiros", description: "Lorem ipsum dolor sit amet, consectetur." },
  { id: 2, title: "Parceiros", description: "Lorem ipsum dolor sit amet, consectetur." },
];

export default function Partners() {
  return (
    <section className="partners-section">
      <div className="partners-grid">
        {PARTNERS.map((partner) => (
          <div key={partner.id} className="partner-card">
            <img src={parceirosImg} alt={partner.title} />
            <div className="partner-overlay">
              <h3>{partner.title}</h3>
              <p>{partner.description}</p>
              <button className="btn-yellow-sm">CONFIRA</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
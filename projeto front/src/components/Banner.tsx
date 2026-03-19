import bannerImg from "../assets/promoção.jpg";

export default function Banner() {
  return (
    <div className="banner">
      <img className="banner-bg" src={bannerImg} alt="Promoção Black Friday" />
      <div className="banner-content">
        <h1>Venha conhecer nossas promoções</h1>
        <p className="banner-discount">
          <strong>50% Off</strong> nos produtos
        </p>
        <button className="btn-yellow">Ver produto</button>
      </div>
    </div>
  );
}
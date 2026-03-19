import iphoneImg from "../assets/iphone.webp";

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = product.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const installment = (product.price / 2).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="product-card">
      <img src={iphoneImg} alt={product.productName} />
      <div className="product-card-body">
        <p className="product-name">{product.descriptionShort}</p>
        <div className="price-new">{formattedPrice}</div>
        <div className="price-installment">ou 2x de {installment} sem juros</div>
        <div className="free-ship">Frete grátis</div>
        <button className="btn-buy">COMPRAR</button>
      </div>
    </div>
  );
}
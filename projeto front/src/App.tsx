import Header      from "./components/Header";
import Banner      from "./components/Banner";
import Categories  from "./components/Categories";
import ProductList from "./components/ProductList";
import Partners    from "./components/Partners";
import Brands      from "./components/Brands";
import Newsletter  from "./components/Newsletter";
import Footer      from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <Banner />
      <Categories />

      {/* 1ª listagem — com abas de categoria */}
      <ProductList title="Produtos relacionados" showTabs={true} />

      <Partners />

      {/* 2ª listagem */}
      <ProductList title="Produtos relacionados" subtitle="Ver todos" />

      <Brands />

      {/* 3ª listagem */}
      <ProductList title="Produtos relacionados" subtitle="Ver todos" />

      <Newsletter />
      <Footer />
    </>
  );
}
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">
            <div className="footer-logo-badge">ec</div>
            <span>onverse</span>
          </div>
          <p className="footer-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="social-icons">
            <div className="social-icon" title="Instagram">📸</div>
            <div className="social-icon" title="Facebook">👍</div>
            <div className="social-icon" title="LinkedIn">💼</div>
          </div>
        </div>

        <div className="footer-col">
          <h4>Institucional</h4>
          <a href="#">Sobre Nós</a>
          <a href="#">Movimento</a>
          <a href="#">Trabalhe conosco</a>
        </div>

        <div className="footer-col">
          <h4>Ajuda</h4>
          <a href="#">Suporte</a>
          <a href="#">Fale Conosco</a>
          <a href="#">Perguntas Frequentes</a>
        </div>

        <div className="footer-col">
          <h4>Termos</h4>
          <a href="#">Termos e Condições</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Troca e Devolução</a>
        </div>
      </div>

      <div className="footer-bottom">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </footer>
  );
}
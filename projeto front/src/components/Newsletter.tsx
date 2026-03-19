import { useState } from "react";

export default function Newsletter() {
  const [name, setName]     = useState<string>("");
  const [email, setEmail]   = useState<string>("");
  const [agreed, setAgreed] = useState<boolean>(false);

  function handleSubmit(): void {
    if (!name || !email || !agreed) {
      alert("Preencha todos os campos e aceite os termos.");
      return;
    }
    alert(`Inscrição realizada para ${email}!`);
  }

  return (
    <section className="newsletter">
      <div className="newsletter-text">
        <h2>Inscreva-se na nossa newsletter</h2>
        <p>
          Assine a nossa newsletter e receba as novidades e conteúdos exclusivos
          da Econverse.
        </p>
      </div>

      <div className="newsletter-form">
        <div className="newsletter-inputs">
          <input
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn-yellow" onClick={handleSubmit}>
            INSCREVER
          </button>
        </div>

        <label className="newsletter-check">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          Aceito os termos e condições
        </label>
      </div>
    </section>
  );
}
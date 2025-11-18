
import React, { useState, useEffect } from "react";

export default function PixModal({ paymentData, onClose }) {
  const [status, setStatus] = useState("pending");
  const [loading, setLoading] = useState(false);

  async function checkPayment() {
    if (!paymentData?.paymentId) return;
    setLoading(true);
    const r = await fetch(`/api/check-pix?txId=${paymentData.paymentId}`);
    const data = await r.json();
    setLoading(false);
    if (data.status === "paid") {
      setStatus("paid");
      setTimeout(() => {
        window.location.href = "/premium";
      }, 800);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => checkPayment(), 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Finalize seu pagamento</h2>

        {status === "paid" ? (
          <div className="paid-box">Pagamento confirmado! Redirecionando...</div>
        ) : (
          <>
            <h3>{paymentData?.pix?.amountText || "Seu plano"}</h3>
            <p>Código PIX:</p>
            <textarea readOnly value={paymentData?.pix?.payload || ""}></textarea>

            <button
              onClick={() =>
                navigator.clipboard.writeText(paymentData?.pix?.payload || "")
              }
            >
              Copiar código PIX
            </button>

            <button onClick={checkPayment}>
              {loading ? "Verificando..." : "Já paguei – Verificar"}
            </button>

            <p className="auto">✓ Verificação automática ativa</p>
          </>
        )}

        <button className="close" onClick={onClose}>X</button>
      </div>
    </div>
  );
}
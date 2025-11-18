
import React from "react";

export default function PixLoadingModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Finalize seu pagamento</h2>
        <p>Gerando código PIX...</p>
        <div className="loader"></div>
        <p>✓ 100% Seguro • ✓ PIX Instantâneo</p>
      </div>
    </div>
  );
}
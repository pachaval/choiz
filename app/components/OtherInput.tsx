import React from "react";

import { useFormStore } from "../stores/useFormStore";

const OtherInput: React.FC = () => {
  const { setManualReason, manualReason } = useFormStore();

  return (
    <div className="w-full max-w-sm mt-4">
      <p className="font-subheader mb-2 mt-3">Cuéntanos cuál es el problema</p>

      <textarea
        onChange={(e) => setManualReason(e.target.value)}
        placeholder="Inserta tu respuesta aquí"
        className="other-input"
        value={manualReason}
      />
    </div>
  );
};

export default OtherInput;

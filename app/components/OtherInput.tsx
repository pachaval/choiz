import { useFormStore } from "../hooks/useFormStore";

const OtherInput = () => {
  const { setManualReason, manualReason } = useFormStore();

  return (
    <div className="w-full max-w-sm mt-4">
      <p className="font-subheader mb-2 mt-3">Cuéntanos cuál es el problema</p>

      <textarea
        placeholder="Inserta tu respuesta aquí"
        value={manualReason}
        onChange={(e) => setManualReason(e.target.value)}
        className="w-full border p-4 rounded-lg min-h-[15vh] font-subheader outline-none focus:ring-0"
      />
    </div>
  );
};

export default OtherInput;

import Button from "@/components/Button";

export default function CardCTA() {
  return (
    <div className="relative w-[95%] md:w-[80%] flex flex-col md:flex-row my-12 self-center items-center justify-around gap-5 p-5 bg-primary min-h-50 rounded-4xl overflow-hidden shadow-2xl">
      <div className="absolute -right-5 -bottom-7.5 w-55 h-55 rounded-full bg-primary-hover" />

      <div className="flex flex-col gap-5 relative">
        <h3 className="text-3xl md:text-5xl font-bold text-center">
          Pronto para circular?
        </h3>
        <p className="text-lg">
          Solicite seu CondMove agora mesmo via WhatsApp ou App.
        </p>
      </div>

      <Button
        text="Acessar Aplicativo"
        style="secondary"
        scale
        customStyles="py-5 px-12 relative"
      />
    </div>
  );
}

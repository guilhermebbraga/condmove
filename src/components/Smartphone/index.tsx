import { FaLocationDot } from "react-icons/fa6";
import Button from "../Button";

export default function Smartphone() {
  return (
    <div className="relative w-fit h-fit p-2 bg-gray-800 rounded-2xl border border-border-custom overflow-hidden">
      <div
        className="
            w-70 h-120 md:w-80 md:h-145 bg-neutral-900/50 rounded-xl aspect-[9/16]]
            flex flex-col justify-center gap-5 p-5"
      >
        <div className="w-20 h-20 text-3xl rounded-full bg-primary grid place-items-center text-secondary duration-700 animate-bounce self-center">
          <FaLocationDot />
        </div>

        <div className="w-[80%] h-5 rounded-md bg-gray-600" />
        <div className="w-[90%] h-5 rounded-md bg-gray-600" />

        <Button text="Solicitar carro" style="primary" customStyles="w-full h-12"/>

      </div>
    </div>
  );
}

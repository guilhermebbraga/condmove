import Button from "../Button";

import { FiSmartphone } from "react-icons/fi";
import Smartphone from "../Smartphone";


export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-gray-900 overflow-hidden md:min-h-screen pt-24 pb-12 w-full flex items-center flex-col md:flex-row gap-12 md:gap-0 px-7.5 md:px-12"
    >
      <div className="absolute right-0 h-full w-1/2 bg-primary/20 rounded-full blur-[100px]" />

      <div className="md:w-[60%] md:h-[80%] flex flex-col gap-5">
        <h1 className="text-4xl md:text-5xl text-gray-50 font-medium">
          Seu transporte <br />
          <span className="text-primary">
            dentro do condominio <br />
          </span>
          com um toque.
        </h1>

        <p className="md:text-lg text-gray-400 md:max-w-[70%]">
          Chega de caminhadas longas com sacolas ou sob o sol. O CondMove
          oferece conforto, segurança e agilidade para moradores circularem em
          todas as áreas internas.
        </p>

        <div className="flex gap-5 h-12">

            <Button text="Baixar o App" style="primary" icon={<FiSmartphone/>} scale/>

            <Button text="Saiba mais" style="bordered"/>
            
        </div>
        
      </div>

      <div className="md:flex-1 md:h-[90%] flex justify-center">

        <Smartphone/>
        
      </div>
    </section>
  );
}

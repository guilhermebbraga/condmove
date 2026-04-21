import { FaBagShopping } from "react-icons/fa6";
import CardCTA from "../CardCTA";
import SectionTitle from "../SectionTitle";

export default function Highlights() {
  return (
    <section id="highlights" className="p-7.5 my-5 flex flex-col">
      
      <SectionTitle title="Por que nos escolher" subtitle="Conforto para o seu dia a dia"/>

      <ul className="flex flex-col md:flex-row gap-5 ">
        {Array.from({ length: 3 }).map((highlight, index) => (
          <li key={index} className="shadow-2xl p-5 rounded-3xl">
            <div className="w-12 h-12 text-xl grid place-items-center bg-primary text-secondary rounded-lg">
              <FaBagShopping />
            </div>

            <h3 className="text-lg text-secondary font-bold mt-5 mb-2.5">Transporte de Compras</h3>

            <p className="text-neutral-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et unde
              fugiat corporis!
            </p>
          </li>
        ))}
      </ul>

        <CardCTA/>
      
    </section>
  );
}

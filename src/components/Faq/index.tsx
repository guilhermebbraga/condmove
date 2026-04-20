import Accordion from "../Accordion";
import SectionTitle from "../SectionTitle";

export default function Faq() {
  return (
    <section className="p-7.5 my-5 flex min-h-[20vh] flex-col">

        <SectionTitle title="Tire suas dúvidas" subtitle="FAQ" />

        <Accordion/>
        
    </section>
  )
}
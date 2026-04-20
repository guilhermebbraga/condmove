import { FaCar } from "react-icons/fa";

export default function Logo() {
  return (
    <div className="flex items-end font-medium text-neutral-200 gap-2">

        <div className="bg-primary text-2xl rounded-md text-secondary w-10 h-10 grid place-items-center">

            <FaCar/>
            
        </div>

        <p className="text-3xl">Cond<span className="font-bold text-primary">Move</span> </p>
        
    </div>
  )
}

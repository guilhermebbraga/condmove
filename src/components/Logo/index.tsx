import { FaCar } from "react-icons/fa";

interface LogoProps {
  small?: boolean;
}

export default function Logo({ small }: LogoProps) {
  return (
    <div className="flex items-end font-medium text-neutral-200 gap-2">
      <div className={`
          bg-primary  rounded-md text-secondary grid place-items-center
          ${small? "w-8 h-8": "w-10 h-10 text-2xl"}`}>
        <FaCar />
      </div>

      <p className={`${small ? "text-xl" : "text-3xl"}`}>
        Cond<span className="font-bold text-primary">Move</span>{" "}
      </p>
    </div>
  );
}

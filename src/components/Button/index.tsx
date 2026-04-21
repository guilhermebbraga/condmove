"use client"

interface ButtonProps {
  text?: string;
  style?: "default" | "bordered" | "primary" | "secondary";
  icon?: React.ReactNode;
  reverse?: boolean;
  customStyles?: string;
  scale?: boolean;
  radius?: number;
  onClick?: () => void;
}

const buttonVariants: {
  default: string;
  bordered: string;
  primary: string;
  secondary: string;
} = {
  default: "bg-neutral-300 text-neutral-800 hover:bg-neutral-400",
  bordered:
    "bg-transparent border border-border-custom text-white hover:bg-white/15",
  primary: "bg-primary text-black hover:bg-primary-hover",
  secondary:
    "bg-secondary text-neutral-100 font-medium hover:bg-secondary-hover",
};

export default function Button({
  text,
  style = "default",
  icon: Icon,
  reverse,
  customStyles,
  scale,
  radius = 12,
  onClick,
}: ButtonProps) {
  const baseStyle =
    "flex items-center justify-center gap-1.5 cursor-pointer px-5 w-fit min-h-7.5";

  return (
    <button
      onClick={onClick}
      style={{ borderRadius: `${radius}px` }}
      className={`${baseStyle} ${buttonVariants[style]} ${reverse && "flex-row-reverse"} ${customStyles} ${scale && "hover:scale-105"}`}
    >
      {Icon && Icon}
      {text && <span>{text}</span>}
    </button>
  );
}

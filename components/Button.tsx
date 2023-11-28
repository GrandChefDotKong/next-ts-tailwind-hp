import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit',
  title: string,
  icon?: string,
  variant: 'btn_dark_green' | 'btn_green' | 'btn_white'
}

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="blod-16 whitespace-wrap cursor-pointer">{ title }</label>
    </button>
  )
}

export default Button;
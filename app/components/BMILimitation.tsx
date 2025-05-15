import Image from "next/image";
import { CardProps } from "../libs/types";

export default function BMILimitation({
  image,
  title = "BMI Limitation",
  description = "BMI limitation descripion goes here...",
}: CardProps) {
  return (
    <div className="card-shadow flex h-full flex-col gap-200 rounded-[1rem] bg-white p-300 md:p-400">
      <div className="flex items-center gap-200">
        <Image src={image} alt="" width={32} height={32} />
        <h3 className="text-preset-4">{title}</h3>
      </div>

      <p>{description}</p>
    </div>
  );
}

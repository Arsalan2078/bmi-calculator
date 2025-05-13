import Image from "next/image";

interface HealthTipProps {
  image: string;
  title: string;
  description: string;
}

export default function HealthTip({
  image,
  title = "Health Tip",
  description = "Health tip descripion goes here...",
}: HealthTipProps) {
  return (
    <div className="flex flex-col gap-400 md:flex-row md:gap-500 xl:flex-col xl:gap-600">
      <Image src={image} alt="" width={64} height={64} />

      <div className="flex flex-col gap-300">
        <h3 className="text-preset-3 text-blue-900">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

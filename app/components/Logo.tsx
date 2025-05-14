import Image from "next/image";
import logo from "@/public/logo.svg";

export default function Logo() {
  return (
    <Image
      src={logo}
      alt="logo"
      className="aspect-square w-[2.5rem] xl:w-[4rem]"
    />
  );
}

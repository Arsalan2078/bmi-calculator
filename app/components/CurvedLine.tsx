import curvedLineRight from "@/public/pattern-curved-line-right.svg";
import curvedLineLeft from "@/public/pattern-curved-line-left.svg";

import Image, { ImageProps } from "next/image";

interface CurvedLineProps extends Omit<ImageProps, "src" | "alt"> {
  direction: "left" | "right";
}

export default function CurvedLine({ direction, ...props }: CurvedLineProps) {
  let src = "";

  switch (direction) {
    case "right":
      src = curvedLineRight;
      break;
    case "left":
      src = curvedLineLeft;
      break;
  }

  return <Image src={src} alt="" {...props} />;
}

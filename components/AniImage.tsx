import { useEffect, useState } from "react";
import { useTheme } from "./context/ThemeProvider";
import Image, { StaticImageData } from "next/image";
import playing from "@/components/ui/palying_football.png";
import musashi1 from "@/components/ui/samurai_black.png";
import tanjiro from "@/components/ui/chibi_tanjiro_f.png";
import { motion } from "framer-motion";
interface ImageConfig {
  src: StaticImageData;
  classes: string;
  w: number;
  b: number;
}
export const AniImage = () => {
  const { theme } = useTheme();
  const [img, setImg] = useState<ImageConfig>({
    src: playing,
    classes: "absolute bottom-2 right-96",
    w: 400,
    b: 400,
  });

  useEffect(() => {
    switch (theme) {
      case "sakura":
        setImg({
          src: playing,
          classes: "absolute bottom-2 right-96",
          w: 400,
          b: 400,
        });
        break;
      case "green":
        setImg({
          src: tanjiro,
          classes: "absolute bottom-0 right-[501px]",
          w: 400,
          b: 400,
        });
        break;
      case "black":
        setImg({
          src: musashi1,
          classes: "absolute bottom-2 right-72",
          w: 400,
          b: 400,
        });

        break;
      default:
        break;
    }
  }, [theme]);

  return (
    <motion.div
      key={theme}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className={img.classes}
    >
      <Image src={img.src} alt="Theme Image" width={img.w} height={img.b} />
    </motion.div>
  );
};

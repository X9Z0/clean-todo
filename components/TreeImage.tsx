"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import branch from "@/components/ui/sakura_branch.png";
import blackTree from "@/components/ui/black_tree3-no-bg -r2.png";
import { useTheme } from "./context/ThemeProvider";
import boyTree from "@/components/ui/boy_tree_no_bg.png";
export const TreeImage = () => {
  const { theme } = useTheme();
  const [imageConfig, setImageConfig] = useState<{
    src: StaticImageData;
    classes: string;
    w: number;
    b: number;
  }>({
    src: branch,
    classes: "absolute right-0 top-4",
    w: 500,
    b: 500,
  });

  useEffect(() => {
    switch (theme) {
      case "sakura":
        setImageConfig({
          src: branch,
          classes: "absolute right-0 top-4",
          w: 500,
          b: 500,
        });
        break;
      case "green":
        setImageConfig({
          src: boyTree, //
          classes: "absolute right-0 top-4",
          w: 800,
          b: 800,
        });
        break;
      case "black":
        setImageConfig({
          src: blackTree,
          classes: "absolute right-0 top-4",
          w: 500,
          b: 500,
        });
        break;
      default:
        setImageConfig({
          src: branch,
          classes: "absolute right-0 top-4",
          w: 500,
          b: 500,
        });
        break;
    }
  }, [theme]);

  return (
    <motion.div
      initial={{ opacity: 0, x: "100vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1.0,
        ease: "easeInOut",
      }}
      className={`${imageConfig.classes}`}
    >
      <Image
        src={imageConfig.src}
        alt={`${theme} theme tree`}
        width={imageConfig.w}
        height={imageConfig.b}
        priority
      />
    </motion.div>
  );
};

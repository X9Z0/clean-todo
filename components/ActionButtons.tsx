import { Edit, Flower, Leaf, MoonStar, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { useTodos } from "./context";
import { motion } from "framer-motion";
import { useTheme } from "./context/ThemeProvider";

export const ActionButtons = () => {
  const { deleteTodo, todos } = useTodos();
  const { theme, setTheme } = useTheme();
  const themeChangeHandler = () => {
    if (theme === "sakura") {
      setTheme("green");
      document.documentElement.classList.remove("theme-sakura");
      document.documentElement.classList.add("theme-green");
    } else if (theme === "green") {
      setTheme("black");
      document.documentElement.classList.remove("theme-green");
      document.documentElement.classList.add("theme-black");
    } else if (theme === "black") {
      setTheme("sakura");
      document.documentElement.classList.remove("theme-black");
      document.documentElement.classList.add("theme-sakura");
    }
  };
  const getThemeIcon = () => {
    switch (theme) {
      case "sakura":
        return <Flower size={29} className="Textn" />;
      case "green":
        return <Leaf size={29} className="Textn" />;
      case "black":
        return <MoonStar size={29} className="Textn" />;
      default:
        return <Flower size={29} className="Textn" />;
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="flex flex-col p-4 gap-4"
    >
      <Button
        className="flex justify-center items-center ActionButton h-12 w-12"
        size={"icon"}
        onClick={themeChangeHandler}
      >
        {getThemeIcon()}
      </Button>
      <Button
        className="flex justify-center items-center ActionButton h-12 w-12"
        size={"icon"}
        onClick={() => {
          todos
            .filter((todo) => todo.status === true)
            .forEach((todo) => deleteTodo(todo.id));
        }}
      >
        <Trash size={29} className="Textn" />
      </Button>
    </motion.div>
  );
};

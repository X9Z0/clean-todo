import { Todo, useTodos } from "./context/todocontext";
import { Dot } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { motion } from "framer-motion";

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptas optio repellat qui officiis vero veritatis eveniet, explicabo ex perspiciatis architecto, reiciendis, perferendis odio nobis unde. Dolorum illum magni dolorem?
export const DisplayTodo = ({ todo }: { todo: Todo }) => {
  const { toggleComplete } = useTodos();
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="w-full text-left flex justify-between items-center rounded-lg"
    >
      <div className=" p-2 flex items-center">
        <Dot />
        <div className="w-full max-w-md">
          <p
            className={`break-words break-all ${todo.status ? "line-through" : ""}`}
          >
            {todo.title}
          </p>
        </div>
      </div>
      <Checkbox
        checked={todo.status}
        onCheckedChange={() => {
          toggleComplete(todo.id);
        }}
        className="Inputn size-5 mr-8 ml-auto"
      />
    </motion.div>
  );
};

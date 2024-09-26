import { Edit, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { useTodos } from "./context";

export const ActionButtons = () => {
  const { deleteTodo, todos } = useTodos();
  return (
    <div className="flex flex-col p-4 gap-4">
      <Button
        className="flex justify-center items-center bg-[#f0d9d1] hover:bg-[#e2c1b8] h-12 w-12"
        size={"icon"}
      >
        <Edit size={29} className="text-[#a66466]" />
      </Button>
      <Button
        className="flex justify-center items-center bg-[#f0d9d1] hover:bg-[#e2c1b8] h-12 w-12"
        size={"icon"}
        onClick={() => {
          todos
            .filter((todo) => todo.status === true)
            .forEach((todo) => deleteTodo(todo.id));
        }}
      >
        <Trash size={29} className="text-[#a66466]" />
      </Button>
    </div>
  );
};

import { useContext, createContext } from "react";

export interface Todo {
  id: number;
  title: string;
  status: boolean;
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo, id: number) => void;
  deleteTodo: (id: number) => void;
  toggleComplete: (id: number) => void;
}

// we have made the deafult value to undefined so that the context can only be used under the Provider
export const TodoContext = createContext<TodoContextType | undefined>(
  undefined,
);

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return context;
};

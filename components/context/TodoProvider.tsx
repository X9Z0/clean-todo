"use client";
import { ReactNode, useState } from "react";
import { Todo, TodoContext } from "./todocontext";

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodo] = useState<Todo[]>([]);

  const addTodo = (newtodo: Todo) => {
    const newtodos = [...todos, newtodo];
    setTodo(newtodos);
  };

  const updateTodo = (updatedtodo: Todo, id: number) => {
    setTodo((prevTodo) =>
      prevTodo.map((todo) => (todo.id === id ? updatedtodo : todo)),
    );
  };

  const deleteTodo = (id: number) => {
    setTodo((prevetodo) => prevetodo.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTodo((prevtodo) =>
      prevtodo.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo,
      ),
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      {children}
    </TodoContext.Provider>
  );
};

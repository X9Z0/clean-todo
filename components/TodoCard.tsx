"use client";
import { useState } from "react";
import { useTodos } from "./context";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { DisplayTodo } from "./DisplayTodo";

export const TodoCard = () => {
  const { todos, addTodo, updateTodo } = useTodos();
  const [newTodo, setNewTodo] = useState<string>("");
  const handleAdd = () => {
    if (newTodo.trim() === "") return;
    addTodo({
      id: Date.now(),
      title: newTodo,
      status: false,
    });
    setNewTodo("");
  };

  const handleUpdate = (id: number) => {
    if (newTodo.trim() === "") return;
    updateTodo({ id, title: newTodo, status: false }, id);
    setNewTodo("");
  };

  return (
    <Card className="relative bg-[#f0d9d1] h-full text-[#a66466] w-1/3 ">
      <CardHeader className="flex justify-center items-center text-center">
        <CardTitle className="text-2xl">Todos</CardTitle>
      </CardHeader>
      <CardContent className="overflow-auto h-[558px]">
        <div className="flex justify-center items-center gap-4 ">
          <Input
            className="border-[#a66466] focus:ring-0 focus:border-[#8e5151]"
            type="text"
            placeholder="write todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button
            className="bg-[#a66466] hover:bg-[#8e5151]"
            onClick={handleAdd}
            type="submit"
          >
            Add
          </Button>
        </div>
        <div className="flex justify-center flex-col items-center mt-4 ">
          {todos.map((todo) => (
            <DisplayTodo key={todo.id} todo={todo} />
          ))}
        </div>
      </CardContent>
      <CardFooter className="text-center flex justify-center items-center">
        <div className="pt-5 ">
          <p>Made by @X9Z0</p>
        </div>
      </CardFooter>
    </Card>
  );
};

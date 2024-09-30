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
import { motion } from "framer-motion";

export const TodoCard = () => {
  const { todos, addTodo } = useTodos();
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

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className=" h-full  w-1/3 "
    >
      <Card className="relative Cardc">
        <CardHeader className="flex justify-center items-center text-center">
          <CardTitle className="text-2xl">Todos</CardTitle>
        </CardHeader>
        <CardContent className="overflow-auto h-[558px]">
          <div className="flex justify-center items-center gap-4 ">
            <Input
              className="focus:ring-0 Inputn"
              type="text"
              placeholder="write todo"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <Button className="NButton " onClick={handleAdd} type="submit">
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
    </motion.div>
  );
};

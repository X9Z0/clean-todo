"use client";
import { TodoProvider } from "@/components/context/TodoProvider";
import { ThemeProvider } from "@/components/context/ThemeProvider";
import { HomePage } from "@/components/HomePage";

export default function Home() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <HomePage />
      </TodoProvider>
    </ThemeProvider>
  );
}

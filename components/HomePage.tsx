import { ActionButtons } from "./ActionButtons";
import { AniImage } from "./AniImage";
import { TodoCard } from "./TodoCard";
import { TreeImage } from "./TreeImage";

export const HomePage = () => {
  return (
    <div className="h-screen w-screen p-20 relative overflow-hidden">
      <TreeImage />

      <div className="flex h-full w-full ">
        <TodoCard />
        <ActionButtons />
      </div>
      <AniImage />
    </div>
  );
};

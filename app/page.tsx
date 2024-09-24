import { TodoProvider } from "@/components/context/TodoProvider";
import { TodoCard } from "@/components/TodoCard";
import Image from "next/image";
import branch from "@/components/ui/sakura_branch.png";
import playing from "@/components/ui/palying_football.png";
export default function Home() {
  return (
    <>
      <TodoProvider>
        <div className="h-screen w-screen p-20">
          <div className="absolute right-0 top-4">
            <Image src={branch} alt="branch" width={500} height={500} />
          </div>
          <div>
            <TodoCard />
          </div>
          <div className="absolute bottom-2 right-96">
            <Image src={playing} alt="playing" width={400} height={400} />
          </div>
        </div>
      </TodoProvider>
    </>
  );
}

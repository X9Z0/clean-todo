import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export const TodoCard = () => {
  return (
    <Card className="bg-[#f0d9d1] text-[#a66466] w-1/3 ">
      <CardHeader className="flex justify-center items-center text-center">
        <CardTitle>Todos</CardTitle>
        <CardDescription>add your daily todos here</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center">ADDING BAR</div>
        <div className="flex justify-center items-center">all the todos</div>
      </CardContent>
    </Card>
  );
};

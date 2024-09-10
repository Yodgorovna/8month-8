import React from "react";
import prisma from "@/utils/db";

const getAllTasks = async () => {
  await prisma.task.create({
    data: {
      content: "buy milk",
    },
  });

  await prisma.task.update({
    where: { id: "" },
    data: {
      content: "buy milk compleated",
    },
  });

  await prisma.task.delete({
    where: { id: "" },
  });

  const allTasks = await prisma.task.findMany();
  return allTasks;
};

const Prisma = async () => {
  const tasks = await getAllTasks();
  return (
    <div>
      <h1 className="text-7xl">Tasks</h1>
      {tasks?.map((task) => {
        <h1 key={task.id} className="text-xl py-2">
          {task.content}
        </h1>;
      })}
    </div>
  );
};

export default Prisma;

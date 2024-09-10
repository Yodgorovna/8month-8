import React from "react";
import prisma from "@/utils/db";
import Link from "next/link";
import { DeleteForm } from "./DeleteForm";

export const ToDos = async () => {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  if (tasks.length === 0) {
    return <h2 className="mt-8 font-medium text-lg"> No tasks to show</h2>;
  }
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg
            "
          >
            <h2
              className={`text-lg capitalize ${
                task.completed ? "line-through" : null
              }`}
            >
              {task.content}
            </h2>
            <div className="flex gap-6 items-center">
              <Link
                href={`/todos/${task.id}`}
                className="btn border-t-cyan-50 btn-xs"
              >
                edit
              </Link>
              <DeleteForm id={task.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

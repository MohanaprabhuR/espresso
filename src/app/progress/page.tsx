import React from "react";
import { Progress } from "@/components/ui/progress";

const InputDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Progress Component
        </h1>
        <div className="flex flex-col  mx-auto gap-[50px]">
          <Progress value={33} />
        </div>
      </div>
    </div>
  );
};

export default InputDemo;

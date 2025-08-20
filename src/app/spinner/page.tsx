import { Spinner } from "@/components/ui/spinner";
import React from "react";

const SpinnerDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Spinner Component
        </h1>
        <div className="flex flex-col  mx-auto gap-[50px]">
          <Spinner />
          <Spinner track />
        </div>
      </div>
    </div>
  );
};

export default SpinnerDemo;

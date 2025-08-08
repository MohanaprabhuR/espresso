import React from "react";
import { Input } from "@/components/ui/input";

const InputDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Input Component
        </h1>
        <div className="flex  flex-col justify-center gap-[50px] max-w-[400px] mx-auto">
          <Input type="email" placeholder="Email" />
        </div>
      </div>
    </div>
  );
};

export default InputDemo;

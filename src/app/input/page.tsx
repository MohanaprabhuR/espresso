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
          <Input type="email" placeholder="Email" disabled />
          <Input type="email" placeholder="Email" status="success" />
          <Input type="email" placeholder="Email" status="error" />
          <Input type="email" placeholder="Email" status="warning" />

          <Input type="email" placeholder="Small" size="sm" status="success" />
          <Input type="email" placeholder="Medium" size="md" status="default" />
          <Input type="email" placeholder="Large" size="lg" status="error" />
          <Input type="email" placeholder="Small" size="xl" status="success" />
        </div>
      </div>
    </div>
  );
};

export default InputDemo;

import React from "react";
import { Input } from "@/components/ui/input";
import { MailIcon } from "lucide-react";

const InputDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Input Component
        </h1>
        <div className="flex  flex-col justify-center gap-[50px] max-w-[400px] mx-auto">
          <Input type="text" placeholder="Text" />
          <Input type="number" placeholder="Number" status="warning" />
          <Input
            type="email"
            placeholder="Email"
            status="success"
            variant="outline"
          />
          <Input type="date" placeholder="date" />
          <Input type="datetime-local" placeholder="datetime-local" />
          <Input type="password" placeholder="Password" />
          <Input type="search" placeholder="Search" />
          <Input type="tel" placeholder="Phone" />
          <Input type="time" />
          <Input type="url" placeholder="Website" />
          <Input type="file" placeholder="Website" />
        </div>
      </div>
    </div>
  );
};

export default InputDemo;

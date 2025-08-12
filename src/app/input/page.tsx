import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

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

          <Input
            placeholder="Search..."
            prefix={
              <Image
                src="/images/avatar.png"
                alt="User"
                width={16}
                height={16}
                className="w-5 h-5 rounded-full"
              />
            }
          />

          <Input
            placeholder="Search..."
            prefix={
              <Image
                src="/images/avatar.png"
                alt="User"
                width={16}
                height={16}
                className="w-5 h-5 rounded-full"
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default InputDemo;

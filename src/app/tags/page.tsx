"use client";
import React from "react";
import { Tag } from "@/components/ui/tags";

const TabsDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-10">
          Tag Component
        </h1>
        <div className="flex flex-col  mx-auto gap-[50px] items-center">
          <Tag theme="blue" variant="solid" onRemove={() => alert("removed!")}>
            Discover
          </Tag>
          <Tag theme="blue" variant="soft">
            Discover
          </Tag>
          <Tag theme="blue" variant="outline">
            Discover
          </Tag>

          <Tag theme="green" variant="solid">
            Discover
          </Tag>
          <Tag theme="green" variant="soft">
            Discover
          </Tag>

          <Tag theme="amber" variant="solid">
            Discover
          </Tag>
          <Tag theme="amber" variant="soft">
            Discover
          </Tag>
        </div>
      </div>
    </div>
  );
};

export default TabsDemo;

"use client";
import React from "react";
import { Switch } from "@/components/ui/switch";

const SwitchDemo = () => {
  const [checked, setChecked] = React.useState(true);

  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Switch Component
        </h1>
        <div className="flex flex-col  mx-auto gap-[30px] items-center">
          <Switch size="sm" />
          <Switch size="md" />
          <Switch size="md" disabled />
          <Switch size="sm" label="Notifications SM" />
          <Switch size="md" label="Notifications MD" />
          <Switch size="md" label="Disabled" disabled />
          <Switch size="sm" label="Title SM" description="Description Test" />
          <Switch size="md" label="Title MD" description="Description Test" />
          <Switch
            size="md"
            label="Disabled"
            description="Description Test"
            disabled
          />
          <Switch
            size="md"
            label="Controlled"
            description="Get alerts for updates"
            checked={checked}
            onCheckedChange={setChecked}
          />
          <Switch
            size="md"
            label="Controlled Disabled"
            description="Get alerts for updates"
            checked={checked}
            onCheckedChange={setChecked}
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default SwitchDemo;

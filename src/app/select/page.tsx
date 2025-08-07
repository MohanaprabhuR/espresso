import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CommandIcon } from "../../../public/images/svg/commandIcon";

function StatusDot({ className }: { className?: string }) {
  return (
    <svg
      width="8"
      height="8"
      fill="currentColor"
      viewBox="0 0 8 8"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="4" cy="4" r="4" />
    </svg>
  );
}
const SelectDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Select Component
        </h1>
        <div className="flex flex-col items-center gap-[50px_0]">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">
                <CommandIcon fill="currentcolor" />
                Light
              </SelectItem>
              <SelectItem value="dark">
                <CommandIcon fill="currentcolor" />
                Dark
              </SelectItem>
              <SelectItem value="system">
                <CommandIcon fill="currentcolor" />
                System
              </SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger status="success">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">
                <CommandIcon fill="currentcolor" />
                Light
              </SelectItem>
              <SelectItem value="dark">
                <CommandIcon fill="currentcolor" />
                Dark
              </SelectItem>
              <SelectItem value="system">
                <CommandIcon fill="currentcolor" />
                System
              </SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger status="warning">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">
                <CommandIcon fill="currentcolor" />
                Light
              </SelectItem>
              <SelectItem value="dark">
                <CommandIcon fill="currentcolor" />
                Dark
              </SelectItem>
              <SelectItem value="system">
                <CommandIcon fill="currentcolor" />
                System
              </SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger status="error">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">
                <CommandIcon fill="currentcolor" />
                Light
              </SelectItem>
              <SelectItem value="dark">
                <CommandIcon fill="currentcolor" />
                Dark
              </SelectItem>
              <SelectItem value="system">
                <CommandIcon fill="currentcolor" />
                System
              </SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger variant="outline">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">
                <CommandIcon fill="currentcolor" />
                Light
              </SelectItem>
              <SelectItem value="dark">
                <CommandIcon fill="currentcolor" />
                Dark
              </SelectItem>
              <SelectItem value="system">
                <CommandIcon fill="currentcolor" />
                System
              </SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger variant="outline" status="success">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">
                <CommandIcon fill="currentcolor" />
                Light
              </SelectItem>
              <SelectItem value="dark">
                <CommandIcon fill="currentcolor" />
                Dark
              </SelectItem>
              <SelectItem value="system">
                <CommandIcon fill="currentcolor" />
                System
              </SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger variant="outline" status="warning">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">
                <CommandIcon fill="currentcolor" />
                Light
              </SelectItem>
              <SelectItem value="dark">
                <CommandIcon fill="currentcolor" />
                Dark
              </SelectItem>
              <SelectItem value="system">
                <CommandIcon fill="currentcolor" />
                System
              </SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger variant="outline" status="error">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">
                <CommandIcon fill="currentcolor" />
                Light
              </SelectItem>
              <SelectItem value="dark">
                <CommandIcon fill="currentcolor" />
                Dark
              </SelectItem>
              <SelectItem value="system">
                <CommandIcon fill="currentcolor" />
                System
              </SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger variant="ghost">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">
                <CommandIcon fill="currentcolor" />
                Light
              </SelectItem>
              <SelectItem value="dark">
                <CommandIcon fill="currentcolor" />
                Dark
              </SelectItem>
              <SelectItem value="system">
                <CommandIcon fill="currentcolor" />
                System
              </SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger variant="ghost" status="success">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">
                <CommandIcon fill="currentcolor" />
                Light
              </SelectItem>
              <SelectItem value="dark">
                <CommandIcon fill="currentcolor" />
                Dark
              </SelectItem>
              <SelectItem value="system">
                <CommandIcon fill="currentcolor" />
                System
              </SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger variant="ghost" status="warning">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">
                <CommandIcon fill="currentcolor" />
                Light
              </SelectItem>
              <SelectItem value="dark">
                <CommandIcon fill="currentcolor" />
                Dark
              </SelectItem>
              <SelectItem value="system">
                <CommandIcon fill="currentcolor" />
                System
              </SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger variant="ghost" status="error">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">
                <CommandIcon fill="currentcolor" />
                Light
              </SelectItem>
              <SelectItem value="dark">
                <CommandIcon fill="currentcolor" />
                Dark
              </SelectItem>
              <SelectItem value="system">
                <CommandIcon fill="currentcolor" />
                System
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default SelectDemo;

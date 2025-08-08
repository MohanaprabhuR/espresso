import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CommandIcon } from "../../../public/images/svg/commandIcon";

const SelectDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Select Component
        </h1>
        <div className="flex  flex-col justify-center gap-[50px]">
          <div className="flex  items-start justify-center gap-[50px]">
            <div className="flex flex-col gap-[30px_0]">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger disabled>
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="success">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="warning">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="error">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-[30px_0]">
              <Select>
                <SelectTrigger size="md">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger disabled size="md">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="success" size="md">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="warning" size="md">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="error" size="md">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-[30px_0]">
              <Select>
                <SelectTrigger size="lg">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger disabled size="lg">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="success" size="lg">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="warning" size="lg">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="error" size="lg">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex  items-start justify-center gap-[50px]">
            <div className="flex flex-col gap-[30px_0]">
              <Select>
                <SelectTrigger variant="outline">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger disabled variant="outline">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="success" variant="outline">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="warning" variant="outline">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="error" variant="outline">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-[30px_0]">
              <Select>
                <SelectTrigger size="md" variant="outline">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger disabled size="md" variant="outline">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="success" size="md" variant="outline">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="warning" size="md" variant="outline">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="error" size="md" variant="outline">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-[30px_0]">
              <Select>
                <SelectTrigger size="lg" variant="outline">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger disabled size="lg" variant="outline">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="success" size="lg" variant="outline">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="warning" size="lg" variant="outline">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="error" size="lg" variant="outline">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex  items-start justify-center gap-[50px]">
            <div className="flex flex-col gap-[30px_0]">
              <Select>
                <SelectTrigger variant="ghost">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger disabled variant="ghost">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="success" variant="ghost">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="warning" variant="ghost">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="error" variant="ghost">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-[30px_0]">
              <Select>
                <SelectTrigger size="md" variant="ghost">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger disabled size="md" variant="ghost">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="success" size="md" variant="ghost">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="warning" size="md" variant="ghost">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="error" size="md" variant="ghost">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-[30px_0]">
              <Select>
                <SelectTrigger size="lg" variant="ghost">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger disabled size="lg" variant="ghost">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="success" size="lg" variant="ghost">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="warning" size="lg" variant="ghost">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="error" size="lg" variant="ghost">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentcolor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentcolor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentcolor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentcolor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentcolor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectDemo;

"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { ChevronDownIcon } from "lucide-react";
import React from "react";

const CalendarDemo = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [open, setOpen] = React.useState(false);
  const [dropdown, setDropdown] =
    React.useState<React.ComponentProps<typeof Calendar>["captionLayout"]>(
      "dropdown"
    );

  return (
    <div>
      <div className="pt-10 ">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-10 text-center">
          Calendar Component
        </h1>
        <div className="flex flex-wrap justify-center items-center mx-auto gap-[20px]  ">
          <Calendar mode="single" selected={date} onSelect={setDate} />
          <Calendar mode="multiple" defaultMonth={date} numberOfMonths={2} />
          <Calendar mode="range" defaultMonth={date} numberOfMonths={2} />
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            captionLayout="dropdown"
          />
          <div className="flex flex-col gap-3">
            <Label htmlFor="date-picker" className="px-1">
              Date
            </Label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" id="date-picker">
                  {date ? date.toLocaleDateString() : "Select date"}
                  <ChevronDownIcon className="size-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="start"
              >
                <Calendar
                  mode="single"
                  className="rounded-none shadow-none"
                  selected={date}
                  captionLayout="dropdown"
                  onSelect={(date) => {
                    setDate(date);
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="time-picker" className="px-1">
              Time
            </Label>
            <Input
              type="time"
              id="time-picker"
              step="1"
              defaultValue="10:30:00"
              className=" [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Calendar
              mode="single"
              defaultMonth={date}
              selected={date}
              onSelect={setDate}
              captionLayout={dropdown}
              className="rounded-lg border shadow-sm"
            />
            <div className="flex flex-col gap-3">
              <Label htmlFor="dropdown" className="px-1">
                Dropdown
              </Label>
              <Select
                value={dropdown}
                onValueChange={(value) =>
                  setDropdown(
                    value as React.ComponentProps<
                      typeof Calendar
                    >["captionLayout"]
                  )
                }
              >
                <SelectTrigger id="dropdown" size="sm" className="w-full">
                  <SelectValue placeholder="Dropdown" />
                </SelectTrigger>
                <SelectContent align="center">
                  <SelectItem value="dropdown">Month and Year</SelectItem>
                  <SelectItem value="dropdown-months">Month Only</SelectItem>
                  <SelectItem value="dropdown-years">Year Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarDemo;

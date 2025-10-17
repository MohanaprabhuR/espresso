"use client";
import { useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { format, subDays, subMonths, subYears } from "date-fns";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { ChevronDownIcon, ClockIcon } from "lucide-react";
import React from "react";

const CalendarDemo = () => {
  const id = useId();
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [open, setOpen] = React.useState(false);
  const [dropdown, setDropdown] =
    React.useState<React.ComponentProps<typeof Calendar>["captionLayout"]>(
      "dropdown"
    );

  const today = new Date();
  const [time, setTime] = useState<string | null>(null);

  const timeSlots = [
    { time: "09:00", available: false },
    { time: "09:30", available: false },
    { time: "10:00", available: true },
    { time: "10:30", available: true },
    { time: "11:00", available: true },
    { time: "11:30", available: true },
    { time: "12:00", available: false },
    { time: "12:30", available: true },
    { time: "13:00", available: true },
    { time: "13:30", available: true },
    { time: "14:00", available: true },
    { time: "14:30", available: false },
    { time: "15:00", available: false },
    { time: "15:30", available: true },
    { time: "16:00", available: true },
    { time: "16:30", available: true },
    { time: "17:00", available: true },
    { time: "17:30", available: true },
  ];

  const yesterday = subDays(today, 1);
  const lastWeek = subDays(today, 7);
  const lastMonth = subMonths(today, 1);
  const lastYear = subYears(today, 1);
  const [month, setMonth] = useState(today);

  return (
    <div>
      <div className="pt-10 ">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-10 text-center">
          Calendar Component
        </h1>
        <div className="flex flex-wrap justify-center items-center mx-auto gap-x-[20px] gap-y-20  ">
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
          <div className="rounded-2xl border overflow-hidden ">
            <Calendar
              mode="single"
              className="border-0 rounded-none"
              selected={date}
              onSelect={setDate}
            />
            <div className="border-t p-3 bg-white">
              <div className="flex items-center gap-3">
                <Label htmlFor={id} className="text-xs">
                  Enter time
                </Label>
                <div className="relative grow">
                  <Input
                    id={id}
                    type="time"
                    step="1"
                    defaultValue="12:00:00"
                    className="peer appearance-none ps-9 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                  />
                  <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                    <ClockIcon size={16} aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-2xl border overflow-hidden">
              <div className="flex max-sm:flex-col">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(newDate) => {
                    if (newDate) {
                      setDate(newDate);
                      setTime(null);
                    }
                  }}
                  className="p-2 rounded-none"
                  disabled={[
                    { before: today }, // Dates before today
                  ]}
                />
                <div className="relative w-full max-sm:h-48 sm:w-40">
                  <div className="absolute inset-0 py-4 max-sm:border-t">
                    <ScrollArea className="h-full sm:border-s">
                      <div className="space-y-3">
                        <div className="flex h-5 shrink-0 items-center px-5">
                          <p className="text-sm font-medium">
                            {format(date, "EEEE, d")}
                          </p>
                        </div>
                        <div className="grid gap-1.5 px-5 max-sm:grid-cols-2">
                          {timeSlots.map(({ time: timeSlot, available }) => (
                            <Button
                              key={timeSlot}
                              size="sm"
                              className="w-full"
                              onClick={() => setTime(timeSlot)}
                              disabled={!available}
                            >
                              {timeSlot}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </ScrollArea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden border">
              <div className="flex max-sm:flex-col">
                <div className="relative py-4 max-sm:order-1 max-sm:border-t sm:w-32">
                  <div className="h-full sm:border-e">
                    <div className="flex flex-col px-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => {
                          setDate(today);
                          setMonth(today);
                        }}
                      >
                        Today
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => {
                          setDate(yesterday);
                          setMonth(yesterday);
                        }}
                      >
                        Yesterday
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => {
                          setDate(lastWeek);
                          setMonth(lastWeek);
                        }}
                      >
                        Last week
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => {
                          setDate(lastMonth);
                          setMonth(lastMonth);
                        }}
                      >
                        Last month
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => {
                          setDate(lastYear);
                          setMonth(lastYear);
                        }}
                      >
                        Last year
                      </Button>
                    </div>
                  </div>
                </div>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(newDate) => {
                    if (newDate) {
                      setDate(newDate);
                    }
                  }}
                  month={month}
                  onMonthChange={setMonth}
                  className="p-2 rounded-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarDemo;

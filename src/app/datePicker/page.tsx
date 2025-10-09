"use client";
import { Calendar } from "@/components/ui/calendar";
import React from "react";

const DatepickerDemo = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div>
      <div className="pt-10 ">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-10 text-center">
          Datepicker Component
        </h1>
        <div className="flex flex-wrap  flex-col mx-auto gap-[20px] items-center ">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            captionLayout="dropdown"
          />
          <Calendar
            mode="single"
            defaultMonth={date}
            numberOfMonths={2}
            selected={date}
            onSelect={setDate}
          />
        </div>
      </div>
    </div>
  );
};

export default DatepickerDemo;

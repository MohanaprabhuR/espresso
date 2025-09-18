"use client";
import React from "react";
import { Calendar } from "@/components/ui/calendar";

const DatePickerDemo = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex justify-center">
      <Calendar mode="single" selected={date} onSelect={setDate} />
    </div>
  );
};

export default DatePickerDemo;

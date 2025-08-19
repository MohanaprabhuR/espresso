import React from "react";
import { Slider } from "@/components/ui/slider";

const SliderDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Slider Component
        </h1>
        <div className="flex flex-col  mx-auto gap-[50px]">
          <Slider defaultValue={[25, 75]} max={100} step={3} />
        </div>
      </div>
    </div>
  );
};

export default SliderDemo;

import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CommandIcon } from "../../../public/images/svg/commandIcon";

const toolTipDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Tooltip Component
        </h1>
        <div className="flex flex-col  mx-auto gap-[50px] w-full max-w-[100px]">
          <Tooltip>
            <TooltipTrigger>Hover</TooltipTrigger>
            <TooltipContent>
              <p>Open source by default</p>
              <CommandIcon fill="currentColor" />
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>Hover</TooltipTrigger>
            <TooltipContent side="left" align="center">
              <p>Open source by default</p>
              <CommandIcon fill="currentColor" />
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>Hover</TooltipTrigger>
            <TooltipContent side="right" align="center">
              <p>Open source by default</p>
              <CommandIcon fill="currentColor" />
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>Hover</TooltipTrigger>
            <TooltipContent side="bottom" align="center">
              <p>Open source by default</p>
              <CommandIcon fill="currentColor" />
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>Hover me</TooltipTrigger>
            <TooltipContent>Open source by default</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>Hover me</TooltipTrigger>
            <TooltipContent resize={false}>
              Open source by default
              <CommandIcon fill="currentColor" />
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default toolTipDemo;

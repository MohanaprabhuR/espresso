import React from "react";
import { Divider } from "@/components/ui/divider";
import { Button } from "@/components/ui/button";

const CheckboxDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Divider Component
        </h1>
        <div className="flex flex-col items-center gap-[30px_0]">
          <Divider>
            <Button size="sm" variant="primary">
              Continue
            </Button>
          </Divider>
          <Divider align="start">
            <Button size="sm" variant="primary">
              Continue
            </Button>
          </Divider>
          <Divider align="end">
            <Button size="sm" variant="primary">
              Continue
            </Button>
          </Divider>

          <div className="h-32 flex gap-8">
            <Divider orientation="vertical" />
            <Divider orientation="vertical" align="center">
              <Button size="sm" variant="primary">
                Continue
              </Button>
            </Divider>
            <Divider orientation="vertical" align="start">
              <Button size="sm" variant="primary">
                Continue
              </Button>
            </Divider>
            <Divider orientation="vertical" align="end">
              <Button size="sm" variant="primary">
                Continue
              </Button>
            </Divider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckboxDemo;

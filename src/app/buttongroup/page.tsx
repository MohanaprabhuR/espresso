import React from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

const ButtonGroupDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          ButtonGroup Component
        </h1>
        <div className="flex flex-col gap-[30px_0]">
          <div className="flex flex-col justify-center items-center gap-[10px_0]">
            <ButtonGroup>
              <Button variant="primary" size="sm">
                Button
              </Button>
              <Button variant="primary" size="sm">
                Button
              </Button>
              <Button variant="primary" size="sm">
                Button
              </Button>
              <Button variant="primary" size="sm">
                Button
              </Button>
              <Button variant="primary" size="sm">
                Button
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="secondary" size="sm">
                Button
              </Button>
              <Button variant="secondary" size="sm">
                Button
              </Button>
              <Button variant="secondary" size="sm">
                Button
              </Button>
              <Button variant="secondary" size="sm">
                Button
              </Button>
              <Button variant="secondary" size="sm">
                Button
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="outline" size="sm">
                Button
              </Button>
              <Button variant="outline" size="sm">
                Button
              </Button>
              <Button variant="outline" size="sm">
                Button
              </Button>
              <Button variant="outline" size="sm">
                Button
              </Button>
              <Button variant="outline" size="sm">
                Button
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="ghost" size="sm">
                Button
              </Button>
              <Button variant="ghost" size="sm">
                Button
              </Button>
              <Button variant="ghost" size="sm">
                Button
              </Button>
              <Button variant="ghost" size="sm">
                Button
              </Button>
              <Button variant="ghost" size="sm">
                Button
              </Button>
            </ButtonGroup>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px_0]">
            <ButtonGroup>
              <Button variant="primary" size="md">
                Button
              </Button>
              <Button variant="primary" size="md">
                Button
              </Button>
              <Button variant="primary" size="md">
                Button
              </Button>
              <Button variant="primary" size="md">
                Button
              </Button>
              <Button variant="primary" size="md">
                Button
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="secondary" size="md">
                Button
              </Button>
              <Button variant="secondary" size="md">
                Button
              </Button>
              <Button variant="secondary" size="md">
                Button
              </Button>
              <Button variant="secondary" size="md">
                Button
              </Button>
              <Button variant="secondary" size="md">
                Button
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="outline" size="md">
                Button
              </Button>
              <Button variant="outline" size="md">
                Button
              </Button>
              <Button variant="outline" size="md">
                Button
              </Button>
              <Button variant="outline" size="md">
                Button
              </Button>
              <Button variant="outline" size="md">
                Button
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="ghost" size="md">
                Button
              </Button>
              <Button variant="ghost" size="md">
                Button
              </Button>
              <Button variant="ghost" size="md">
                Button
              </Button>
              <Button variant="ghost" size="md">
                Button
              </Button>
              <Button variant="ghost" size="md">
                Button
              </Button>
            </ButtonGroup>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px_0]">
            <ButtonGroup>
              <Button variant="primary" size="lg">
                Button
              </Button>
              <Button variant="primary" size="lg">
                Button
              </Button>
              <Button variant="primary" size="lg">
                Button
              </Button>
              <Button variant="primary" size="lg">
                Button
              </Button>
              <Button variant="primary" size="lg">
                Button
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="secondary" size="lg">
                Button
              </Button>
              <Button variant="secondary" size="lg">
                Button
              </Button>
              <Button variant="secondary" size="lg">
                Button
              </Button>
              <Button variant="secondary" size="lg">
                Button
              </Button>
              <Button variant="secondary" size="lg">
                Button
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="outline" size="lg">
                Button
              </Button>
              <Button variant="outline" size="lg">
                Button
              </Button>
              <Button variant="outline" size="lg">
                Button
              </Button>
              <Button variant="outline" size="lg">
                Button
              </Button>
              <Button variant="outline" size="lg">
                Button
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="ghost" size="lg">
                Button
              </Button>
              <Button variant="ghost" size="lg">
                Button
              </Button>
              <Button variant="ghost" size="lg">
                Button
              </Button>
              <Button variant="ghost" size="lg">
                Button
              </Button>
              <Button variant="ghost" size="lg">
                Button
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonGroupDemo;

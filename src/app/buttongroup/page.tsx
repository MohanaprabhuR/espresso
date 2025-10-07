import React from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const ButtonGroupDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          ButtonGroup Component
        </h1>

        <div className="flex  gap-30 justify-center">
          <div>
            <h1 className="text-lg font-bold text-gray-900 dark:text-white pb-2">
              ButtonText
            </h1>
            <ButtonGroup>
              <ButtonGroupText asChild>
                <Label htmlFor="name">Button</Label>
              </ButtonGroupText>
              <Input placeholder="Type something here..." id="name" />
            </ButtonGroup>
          </div>
          <div className="flex flex-col gap-[10px_0]">
            <h1 className="text-lg font-bold text-gray-900 dark:text-white pb-1">
              ButtonGroup Horizontal
            </h1>
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
            <div className="flex flex-col justify-center items-center gap-[10px_0]">
              <ButtonGroup>
                <Button variant="primary" size="xl">
                  Button
                </Button>
                <Button variant="primary" size="xl">
                  Button
                </Button>
                <Button variant="primary" size="xl">
                  Button
                </Button>
                <Button variant="primary" size="xl">
                  Button
                </Button>
                <Button variant="primary" size="xl">
                  Button
                </Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button variant="secondary" size="xl">
                  Button
                </Button>
                <Button variant="secondary" size="xl">
                  Button
                </Button>
                <Button variant="secondary" size="xl">
                  Button
                </Button>
                <Button variant="secondary" size="xl">
                  Button
                </Button>
                <Button variant="secondary" size="xl">
                  Button
                </Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button variant="outline" size="xl">
                  Button
                </Button>
                <Button variant="outline" size="xl">
                  Button
                </Button>
                <Button variant="outline" size="xl">
                  Button
                </Button>
                <Button variant="outline" size="xl">
                  Button
                </Button>
                <Button variant="outline" size="xl">
                  Button
                </Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button variant="ghost" size="xl">
                  Button
                </Button>
                <Button variant="ghost" size="xl">
                  Button
                </Button>
                <Button variant="ghost" size="xl">
                  Button
                </Button>
                <Button variant="ghost" size="xl">
                  Button
                </Button>
                <Button variant="ghost" size="xl">
                  Button
                </Button>
              </ButtonGroup>
            </div>
            <div className="flex flex-col justify-center items-center gap-[10px_0]">
              <ButtonGroup>
                <Button variant="primary" size="2xl">
                  Button
                </Button>
                <Button variant="primary" size="2xl">
                  Button
                </Button>
                <Button variant="primary" size="2xl">
                  Button
                </Button>
                <Button variant="primary" size="2xl">
                  Button
                </Button>
                <Button variant="primary" size="2xl">
                  Button
                </Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button variant="secondary" size="2xl">
                  Button
                </Button>
                <Button variant="secondary" size="2xl">
                  Button
                </Button>
                <Button variant="secondary" size="2xl">
                  Button
                </Button>
                <Button variant="secondary" size="2xl">
                  Button
                </Button>
                <Button variant="secondary" size="2xl">
                  Button
                </Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button variant="outline" size="2xl">
                  Button
                </Button>
                <Button variant="outline" size="2xl">
                  Button
                </Button>
                <Button variant="outline" size="2xl">
                  Button
                </Button>
                <Button variant="outline" size="2xl">
                  Button
                </Button>
                <Button variant="outline" size="2xl">
                  Button
                </Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button variant="ghost" size="2xl">
                  Button
                </Button>
                <Button variant="ghost" size="2xl">
                  Button
                </Button>
                <Button variant="ghost" size="2xl">
                  Button
                </Button>
                <Button variant="ghost" size="2xl">
                  Button
                </Button>
                <Button variant="ghost" size="2xl">
                  Button
                </Button>
              </ButtonGroup>
            </div>
            <div className="flex flex-col justify-center items-center gap-[30px_0] w-full max-w-[500px]">
              <ButtonGroup wrapLayout>
                <Button variant="primary" size="2xl">
                  Button
                </Button>
                <Button variant="primary" size="2xl">
                  Button
                </Button>
                <Button variant="primary" size="2xl">
                  Button
                </Button>
                <Button variant="primary" size="2xl">
                  Button
                </Button>
                <Button variant="primary" size="2xl">
                  Button
                </Button>
                <Button variant="primary" size="2xl">
                  Button
                </Button>
                <Button variant="primary" size="2xl">
                  Button
                </Button>
                <Button variant="primary" size="2xl">
                  Button
                </Button>
                <Button variant="primary" size="2xl">
                  Button
                </Button>
                <Button variant="primary" size="2xl">
                  Button
                </Button>
                <Button variant="primary" size="2xl">
                  Button
                </Button>
                <Button variant="primary" size="2xl">
                  Button
                </Button>
              </ButtonGroup>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px_0]">
            <h1 className="text-lg font-bold text-gray-900 dark:text-white pb-1">
              ButtonGroup vertical
            </h1>
            <ButtonGroup orientation="vertical">
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
            <ButtonGroup orientation="vertical">
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
            <ButtonGroup orientation="vertical">
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
            <ButtonGroup orientation="vertical">
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
            <ButtonGroup orientation="vertical">
              <Button variant="secondary" size="xl">
                Button
              </Button>
              <Button variant="secondary" size="xl">
                Button
              </Button>
              <Button variant="secondary" size="xl">
                Button
              </Button>
              <Button variant="secondary" size="xl">
                Button
              </Button>
              <Button variant="secondary" size="xl">
                Button
              </Button>
            </ButtonGroup>
            <ButtonGroup orientation="vertical">
              <Button variant="secondary" size="2xl">
                Button
              </Button>
              <Button variant="secondary" size="2xl">
                Button
              </Button>
              <Button variant="secondary" size="2xl">
                Button
              </Button>
              <Button variant="secondary" size="2xl">
                Button
              </Button>
              <Button variant="secondary" size="2xl">
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

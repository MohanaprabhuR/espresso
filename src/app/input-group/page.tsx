"use clients";

import {
  CheckIcon,
  CreditCardIcon,
  InfoIcon,
  Link2Icon,
  MailIcon,
  SearchIcon,
  CornerDownLeft,
  StarIcon,
  Code2Icon,
  CopyIcon,
  RefreshCwIcon,
} from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
import { Label } from "@/components/ui/label";

const InputGroupDemo = () => {
  return (
    <div className="pt-10 text-center">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
        InputGroup Component
      </h1>
      <div className="grid w-full  gap-6 justify-center">
        <InputGroup>
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput type="email" placeholder="Enter your email" />
          <InputGroupAddon>
            <MailIcon />
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput placeholder="Card number" />
          <InputGroupAddon>
            <CreditCardIcon />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <CheckIcon />
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput placeholder="Card number" />
          <InputGroupAddon align="inline-end">
            <StarIcon />
            <InfoIcon />
          </InputGroupAddon>
        </InputGroup>

        <ButtonGroup>
          <ButtonGroupText asChild>
            <Label htmlFor="url">https://</Label>
          </ButtonGroupText>
          <InputGroup>
            <InputGroupInput id="url" />
            <InputGroupAddon align="inline-end">
              <Link2Icon />
            </InputGroupAddon>
          </InputGroup>
          <ButtonGroupText>.com</ButtonGroupText>
        </ButtonGroup>

        <InputGroup>
          <InputGroupTextarea
            id="textarea-code-32"
            placeholder="console.log('Hello, world!');"
            className="min-h-[200px]"
          />
          <InputGroupAddon align="block-end" className="border-t">
            <InputGroupText>Line 1, Column 1</InputGroupText>
            <InputGroupButton size="sm" className="ml-auto" variant="default">
              Run <CornerDownLeft />
            </InputGroupButton>
          </InputGroupAddon>
          <InputGroupAddon align="block-start" className="border-b">
            <InputGroupText className="font-mono font-medium">
              <Code2Icon />
              script.js
            </InputGroupText>
            <InputGroupButton className="ml-auto" size="icon-xs">
              <RefreshCwIcon />
            </InputGroupButton>
            <InputGroupButton variant="ghost" size="icon-xs">
              <CopyIcon />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
};
export default InputGroupDemo;

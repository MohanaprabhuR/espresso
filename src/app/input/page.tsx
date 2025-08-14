import React from "react";
import { Input } from "@/components/ui/input";
import { MailIcon } from "../../../public/images/svg/mailIcon";
import { FilterIcon } from "../../../public/images/svg/filterIcon";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const InputDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Input Component
        </h1>
        <div className="flex justify-center gap-[30px] max-w-[400px] mx-auto">
          <div className="flex flex-col gap-[30px] max-w-[400px]">
            <Input disabled type="text" placeholder="Text" />
            <Input
              type="text"
              placeholder="Text"
              prefix={<MailIcon fill="currentColor" />}
              suffix={<FilterIcon fill="currentColor" />}
            />
            <Input type="date" placeholder="date" />
            <Input type="datetime-local" placeholder="datetime-local" />
            <Input type="password" placeholder="Password" />
            <Input type="search" placeholder="Search" />
            <Input type="tel" placeholder="Phone" />
            <Input type="time" />
            <Input type="url" placeholder="Website" />
            <Input
              placeholder="Search..."
              prefix={
                <Avatar size="xs" className="size-full">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                </Avatar>
              }
            />
            <Input
              placeholder="Search..."
              prefix={<MailIcon fill="currentColor" />}
            />
            <Input
              placeholder="Search..."
              suffix={<FilterIcon fill="currentColor" />}
            />
            <Input type="number" placeholder="Number" status="warning" />
            <Input type="email" placeholder="Email" status="success" />
            <Input type="email" placeholder="Email" status="error" />
            <Input type="file" placeholder="Email" />
          </div>
          <div className="flex flex-col gap-[30px] max-w-[400px]">
            <Input disabled type="text" placeholder="Text" variant="outline" />
            <Input
              type="text"
              placeholder="Text"
              variant="outline"
              prefix={<MailIcon fill="currentColor" />}
              suffix={<FilterIcon fill="currentColor" />}
            />
            <Input variant="outline" type="date" placeholder="date" />
            <Input
              variant="outline"
              type="datetime-local"
              placeholder="datetime-local"
            />
            <Input variant="outline" type="password" placeholder="Password" />
            <Input variant="outline" type="search" placeholder="Search" />
            <Input variant="outline" type="tel" placeholder="Phone" />
            <Input variant="outline" type="time" />
            <Input variant="outline" type="url" placeholder="Website" />
            <Input
              variant="outline"
              placeholder="Search..."
              prefix={
                <Avatar size="xs" className="size-full">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                </Avatar>
              }
            />
            <Input
              variant="outline"
              placeholder="Search..."
              prefix={<MailIcon fill="currentColor" />}
            />
            <Input
              variant="outline"
              placeholder="Search..."
              suffix={<FilterIcon fill="currentColor" />}
            />
            <Input
              variant="outline"
              type="number"
              placeholder="Number"
              status="warning"
            />
            <Input
              variant="outline"
              type="email"
              placeholder="Email"
              status="success"
              prefix={<MailIcon fill="currentColor" />}
            />
            <Input
              variant="outline"
              type="email"
              placeholder="Email"
              status="error"
              suffix={<FilterIcon fill="currentColor" />}
            />
            <Input variant="outline" type="file" placeholder="Email" />
          </div>
          <div className="flex flex-col gap-[30px] max-w-[400px]">
            <Input disabled size="md" type="text" placeholder="Text" />
            <Input
              size="md"
              type="text"
              placeholder="Text"
              prefix={<MailIcon fill="currentColor" />}
              suffix={<FilterIcon fill="currentColor" />}
            />
            <Input size="md" type="date" placeholder="date" />
            <Input
              size="md"
              type="datetime-local"
              placeholder="datetime-local"
            />
            <Input size="md" type="password" placeholder="Password" />
            <Input size="md" type="search" placeholder="Search" />
            <Input size="md" type="tel" placeholder="Phone" />
            <Input size="md" type="time" />
            <Input size="md" type="url" placeholder="Website" />
            <Input
              size="md"
              placeholder="Search..."
              prefix={
                <Avatar size="xs" className="size-full">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                </Avatar>
              }
            />
            <Input
              size="md"
              placeholder="Search..."
              prefix={<MailIcon fill="currentColor" />}
            />
            <Input
              size="md"
              placeholder="Search..."
              suffix={<FilterIcon fill="currentColor" />}
            />
            <Input
              size="md"
              type="number"
              placeholder="Number"
              status="warning"
            />
            <Input
              size="md"
              type="email"
              placeholder="Email"
              status="success"
            />

            <Input size="md" type="email" placeholder="Email" status="error" />
            <Input size="md" type="file" placeholder="Email" />
          </div>
          <div className="flex flex-col gap-[30px] max-w-[400px]">
            <Input disabled size="lg" type="text" placeholder="Text" />
            <Input
              size="lg"
              type="text"
              placeholder="Text"
              prefix={<MailIcon fill="currentColor" />}
              suffix={<FilterIcon fill="currentColor" />}
            />
            <Input size="lg" type="date" placeholder="date" />
            <Input
              size="lg"
              type="datetime-local"
              placeholder="datetime-local"
            />
            <Input size="lg" type="password" placeholder="Password" />
            <Input size="lg" type="search" placeholder="Search" />
            <Input size="lg" type="tel" placeholder="Phone" />
            <Input size="lg" type="time" />
            <Input size="lg" type="url" placeholder="Website" />
            <Input
              size="lg"
              placeholder="Search..."
              prefix={
                <Avatar size="xs" className="size-full">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                </Avatar>
              }
            />
            <Input
              size="lg"
              placeholder="Search..."
              prefix={<MailIcon fill="currentColor" />}
            />
            <Input
              size="lg"
              placeholder="Search..."
              suffix={<FilterIcon fill="currentColor" />}
            />
            <Input
              size="lg"
              type="number"
              placeholder="Number"
              status="warning"
            />
            <Input
              size="lg"
              type="email"
              placeholder="Email"
              status="success"
            />

            <Input size="lg" type="email" placeholder="Email" status="error" />
            <Input size="lg" type="file" placeholder="Email" />
          </div>
          <div className="flex flex-col gap-[30px] max-w-[400px]">
            <Input disabled size="xl" type="text" placeholder="Text" />
            <Input
              size="xl"
              type="text"
              placeholder="Text"
              prefix={<MailIcon fill="currentColor" />}
              suffix={<FilterIcon fill="currentColor" />}
            />
            <Input size="xl" type="date" placeholder="date" />
            <Input
              size="xl"
              type="datetime-local"
              placeholder="datetime-local"
            />
            <Input size="xl" type="password" placeholder="Password" />
            <Input size="xl" type="search" placeholder="Search" />
            <Input size="xl" type="tel" placeholder="Phone" />
            <Input size="xl" type="time" />
            <Input size="xl" type="url" placeholder="Website" />
            <Input
              size="xl"
              placeholder="Search..."
              prefix={
                <Avatar size="xs" className="size-full">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                </Avatar>
              }
            />
            <Input
              size="xl"
              placeholder="Search..."
              prefix={<MailIcon fill="currentColor" />}
            />
            <Input
              size="xl"
              placeholder="Search..."
              suffix={<FilterIcon fill="currentColor" />}
            />
            <Input
              size="xl"
              type="number"
              placeholder="Number"
              status="warning"
            />
            <Input
              size="xl"
              type="email"
              placeholder="Email"
              status="success"
            />
            <Input size="xl" type="email" placeholder="Email" status="error" />
            <Input size="xl" type="file" placeholder="Email" />
          </div>
        </div>
        <div className="flex flex-col gap-[30px]">
          <div className="*:not-first:mt-2">
            <Label>Input with start add-on</Label>
            <div className="flex rounded-md ">
              <span className="border-border bg-background text-muted-foreground -z-10 inline-flex items-center rounded-s-md border px-3 text-sm">
                https://
              </span>
              <Input
                className="-ms-px rounded-l-none shadow-none"
                variant="outline"
                placeholder="google.com"
                type="text"
              />
            </div>
          </div>
          <div className="*:not-first:mt-2">
            <Label>Input with end add-on</Label>
            <div className="flex rounded-md ">
              <Input
                className=" rounded-e-none"
                placeholder="google"
                type="text"
                variant="outline"
              />
              <span className="border-border border-l-0 bg-background text-muted-foreground -z-10 inline-flex items-center rounded-e-md border px-3 text-sm">
                .com
              </span>
            </div>
          </div>
          <div className="*:not-first:mt-2">
            <Label>Input with end select</Label>
            <div className="flex rounded-md ">
              <Input
                className="-me-px rounded-e-none shadow-none focus-visible:z-10"
                placeholder="google"
                type="text"
              />
              <Select>
                <SelectTrigger className="rounded-l-none">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="com">.com</SelectItem>
                  <SelectItem value="org">.org</SelectItem>
                  <SelectItem value="net">.net</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputDemo;

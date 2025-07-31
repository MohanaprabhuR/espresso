"use client";
import { Button } from "@/components/ui/button";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CircleAlert,
  CircleAlertIcon,
  CircleIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { SelectNative } from "@/components/ui/select-native";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { Tag, TagInput } from "emblor";
import { PlusIcon, Tags } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { useToast } from "@/hooks/use-toast";
import { DateField, DateInput } from "@/components/ui/datefield-rac";

import { getLocalTimeZone, today } from "@internationalized/date";
import type { DateValue } from "react-aria-components";

import { Calendars } from "@/components/ui/calendar-rac";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const items = [
  {
    id: "1",
    title: "What makes Origin UI different?",
    content:
      "Origin UI focuses on developer experience and performance. Built with TypeScript, it offers excellent type safety, follows accessibility standards, and provides comprehensive documentation with regular updates.",
  },
  {
    id: "2",
    title: "How can I customize the components?",
    content:
      "Use our CSS variables for global styling, or className and style props for component-specific changes. We support CSS modules, Tailwind, and dark mode out of the box.",
  },
  {
    id: "3",
    title: "Is Origin UI optimized for performance?",
    content:
      "Yes, with tree-shaking, code splitting, and minimal runtime overhead. Most components are under 5KB gzipped.",
  },
  {
    id: "4",
    title: "How accessible are the components?",
    content:
      "All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.",
  },
];

export default function Home() {
  const [exampleTags, setExampleTags] = useState<Tag[]>(Tags);
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);
  const { toast } = useToast();

  const today = new Date();
  const [date, setDate] = useState<DateRange | undefined>({
    from: today,
    to: addDays(today, 25),
  });
  const [framework, setFramework] = useState("nextjs");

  return (
    <>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Button Component
        </h1>
        <div className="flex flex-col justify-center items-center gap-[10px_0]">
          <div className="flex gap-[0_20px]">
            <Button variant="primary" size="sm">
              Discover
            </Button>
            <Button variant="primary" size="sm" disabled>
              Discover
            </Button>
            <Button variant="primary" size="sm" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="secondary" size="md">
              Discover
            </Button>
            <Button variant="secondary" size="md" disabled>
              Discover
            </Button>
            <Button variant="secondary" size="md" iconOnly>
              Discover
            </Button>
          </div>

          <div className="flex gap-[0_20px]">
            <Button variant="outline" size="lg">
              Discover
            </Button>
            <Button variant="outline" size="lg" disabled>
              Discover
            </Button>
            <Button variant="outline" size="lg" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="ghost" size="xl">
              Discover
            </Button>
            <Button variant="ghost" size="xl" disabled>
              Discover
            </Button>
            <Button variant="ghost" size="xl" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="destructive" size="xxl">
              Discover
            </Button>
            <Button variant="destructive" size="xxl">
              Discover
            </Button>
            <Button variant="destructive" size="xxl" iconOnly>
              Discover
            </Button>
          </div>
        </div>
      </div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Badge Component
        </h1>
        <div className="flex  justify-center items-center gap-[10px_10px]">
          <Badge variant="default">Badge</Badge>
          <Badge variant="outline">Badge</Badge>
          <Badge variant="secondary">Badge</Badge>
          <Badge variant="destructive">Badge</Badge>
        </div>
      </div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Accordian Component
        </h1>
        <div className="flex flex-col justify-center items-center gap-[10px_0]">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="3"
          >
            {items.map((item) => (
              <AccordionItem value={item.id} key={item.id} className="py-2">
                <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-2">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Breadcrums Component
        </h1>
        <div className="flex flex-col justify-center items-center gap-[10px_0]">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Link</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Checkbox Component
        </h1>
        <div className="flex  justify-center items-center gap-[2px]">
          <Checkbox />
          <Label>Simple checkbox</Label>
        </div>
      </div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Input Component
        </h1>
        <div className="flex  justify-center items-center gap-[10px_0]">
          <div className="*:not-first:mt-2">
            <Label>Simple input</Label>
            <Input placeholder="Email" type="email" />
          </div>
        </div>
      </div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Text Area Component
        </h1>
        <div className="flex  justify-center items-center gap-[10px_0]">
          <div className="*:not-first:mt-2">
            <Label>Simple textarea</Label>
            <Textarea placeholder="Leave a comment" />
          </div>
        </div>
      </div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Progressbar Component
        </h1>
        <div className="*:not-first:mt-4">
          <Label>Simple slider</Label>
          <Slider defaultValue={[25]} aria-label="Simple slider" />
        </div>
        <div className="*:not-first:mt-4">
          <Label>Slider with solid thumb</Label>
          <Slider
            defaultValue={[25]}
            className="[&>:last-child>span]:bg-primary [&>:first-child>span]:opacity-70"
            aria-label="Slider with solid thumb"
          />
        </div>
      </div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Radio Component
        </h1>
        <div className="flex  justify-center items-center gap-[10px_0]">
          <RadioGroup defaultValue="1">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="1" />
              <Label>Option 1</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="2" />
              <Label>Option 2</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="3" />
              <Label>Option 3</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Input Select Component
        </h1>
        <div className="flex  justify-center items-center gap-[10px_0]">
          <div className="*:not-first:mt-2">
            <Label>Select with helper text (native)</Label>
            <SelectNative>
              <option value="1">React</option>
              <option value="2">Next.js</option>
              <option value="3">Astro</option>
              <option value="4">Gatsby</option>
            </SelectNative>
          </div>
        </div>
      </div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Switch Component
        </h1>
        <div className="flex  justify-center items-center gap-[10px_0]">
          <div className="inline-flex items-center gap-2">
            <Switch />
            <Label className="sr-only">Simple switch</Label>
          </div>
          <div className="inline-flex items-center gap-2 [--primary:var(--color-indigo-500)] [--ring:var(--color-indigo-300)] in-[.dark]:[--primary:var(--color-indigo-500)] in-[.dark]:[--ring:var(--color-indigo-900)]">
            <Switch defaultChecked />
            <Label className="sr-only">Colored switch</Label>
          </div>
        </div>
      </div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Tabs Component
        </h1>
        <div className="flex  justify-center items-center gap-[10px_0]">
          <Tabs defaultValue="tab-1" className="items-center">
            <TabsList>
              <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
              <TabsTrigger value="tab-3">Tab 3</TabsTrigger>
            </TabsList>
            <TabsContent value="tab-1">
              <p className="text-muted-foreground p-4 text-center text-xs">
                Content for Tab 1
              </p>
            </TabsContent>
            <TabsContent value="tab-2">
              <p className="text-muted-foreground p-4 text-center text-xs">
                Content for Tab 2
              </p>
            </TabsContent>
            <TabsContent value="tab-3">
              <p className="text-muted-foreground p-4 text-center text-xs">
                Content for Tab 3
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4 ">
          Tooltip Component
        </h1>
        <div className="flex  justify-center items-center gap-[10px]">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">
                  Tiny
                </Button>
              </TooltipTrigger>
              <TooltipContent className="px-2 py-1 text-xs">
                This is a simple tooltip
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">
                  W/ arrow
                </Button>
              </TooltipTrigger>
              <TooltipContent className=" px-2 py-1 text-xs" showArrow={true}>
                This tooltip has an arrow
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div className="inline-grid w-fit grid-cols-3 gap-1">
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="col-start-2"
                    variant="outline"
                    aria-label="Pan camera up"
                  >
                    <ChevronUpIcon size={16} aria-hidden="true" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top" className="px-2 py-1 text-xs">
                  Pan top
                  <kbd className="bg-background text-muted-foreground/70 ms-2 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
                    ⌘T
                  </kbd>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="col-start-1"
                    variant="outline"
                    aria-label="Pan camera left"
                  >
                    <ChevronLeftIcon size={16} aria-hidden="true" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left" className="px-2 py-1 text-xs">
                  Pan left
                  <kbd className="bg-background text-muted-foreground/70 ms-2 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
                    ⌘L
                  </kbd>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <div
              className="flex items-center justify-center"
              aria-hidden="true"
            >
              <CircleIcon className="opacity-60" size={16} />
            </div>
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" aria-label="Pan camera right">
                    <ChevronRightIcon size={16} aria-hidden="true" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" className="px-2 py-1 text-xs">
                  Pan right
                  <kbd className="bg-background text-muted-foreground/70 ms-2 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
                    ⌘R
                  </kbd>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="col-start-2"
                    variant="outline"
                    aria-label="Pan camera down"
                  >
                    <ChevronDownIcon size={16} aria-hidden="true" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="px-2 py-1 text-xs">
                  Pan bottom
                  <kbd className="bg-background text-muted-foreground/70 ms-2 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
                    ⌘B
                  </kbd>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4 ">
          Alert Component
        </h1>
        <div className="flex  justify-center flex-col items-center gap-[10px]">
          <div className="rounded-md border px-4 py-3">
            <p className="text-sm">
              <TriangleAlert
                className="me-3 -mt-0.5 inline-flex text-amber-500"
                size={16}
                aria-hidden="true"
              />
              Some information is missing!
            </p>
          </div>
          <div className="rounded-md border border-amber-500/50 px-4 py-3 text-amber-600">
            <p className="text-sm">
              <TriangleAlert
                className="me-3 -mt-0.5 inline-flex opacity-60"
                size={16}
                aria-hidden="true"
              />
              Some information is missing!
            </p>
          </div>
          <div className="rounded-md border px-4 py-3">
            <p className="text-sm">
              <CircleAlert
                className="me-3 -mt-0.5 inline-flex text-red-500"
                size={16}
                aria-hidden="true"
              />
              An error occurred!
            </p>
          </div>
          <div className="rounded-md border border-red-500/50 px-4 py-3 text-red-600">
            <p className="text-sm">
              <CircleAlert
                className="me-3 -mt-0.5 inline-flex opacity-60"
                size={16}
                aria-hidden="true"
              />
              An error occurred!
            </p>
          </div>
          <div className="rounded-md border border-red-500/50 px-4 py-3 text-red-600">
            <div className="flex gap-3">
              <CircleAlertIcon
                className="mt-0.5 shrink-0 opacity-60"
                size={16}
                aria-hidden="true"
              />
              <div className="grow space-y-1">
                <p className="text-sm font-medium">
                  Password does not meet requirements:
                </p>
                <ul className="list-inside list-disc text-sm opacity-80">
                  <li>Minimum 8 characters</li>
                  <li>Inlcude a special character</li>
                </ul>
              </div>
            </div>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Alert dialog with icon</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <div className="flex flex-col gap-2 max-sm:items-center sm:flex-row sm:gap-4">
                <div
                  className="flex size-9 shrink-0 items-center justify-center rounded-full border"
                  aria-hidden="true"
                >
                  <CircleAlertIcon className="opacity-80" size={16} />
                </div>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to delete your account? All your data
                    will be removed.
                  </AlertDialogDescription>
                </AlertDialogHeader>
              </div>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Confirm</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4 ">
          Date & Time-picker
        </h1>
        <div className="flex  justify-center flex-col items-center gap-[10px]">
          <DateField className="*:not-first:mt-2">
            <Label className="text-foreground text-sm font-medium">
              Date input
            </Label>
            <DateInput />
          </DateField>

          <Calendar
            mode="range"
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            pagedNavigation
            showOutsideDays={false}
            className="rounded-md border p-2"
            classNames={{
              months: "gap-8",
              month:
                "relative first-of-type:before:hidden before:absolute max-sm:before:inset-x-2 max-sm:before:h-px max-sm:before:-top-2 sm:before:inset-y-2 sm:before:w-px before:bg-border sm:before:-left-4",
            }}
          />
        </div>
      </div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4 ">
          Drodown Component
        </h1>
        <div className="flex  justify-center flex-col items-center gap-[10px]">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Radio items
                <ChevronDownIcon
                  className="-me-1 opacity-60"
                  size={16}
                  aria-hidden="true"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup
                value={framework}
                onValueChange={setFramework}
              >
                <DropdownMenuRadioItem value="nextjs">
                  Next.js
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="sveltekit" disabled>
                  SvelteKit
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="remix">
                  Remix
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="astro">
                  Astro
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}

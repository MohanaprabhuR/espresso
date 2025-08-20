import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CommandIcon } from "../../../public/images/svg/commandIcon";

const TabsDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-10">
          Tab Component
        </h1>
        <div className="flex flex-col  mx-auto gap-[50px] items-center">
          <div className="flex justify-between gap-[50px]">
            <Tabs defaultValue="tab1">
              <TabsList>
                <TabsTrigger value="tab1">
                  <CommandIcon fill="currentColor" />
                  Tab 1
                </TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                <TabsTrigger value="tab5">Tab 5</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 Content</TabsContent>
              <TabsContent value="tab2">Tab 2 Content</TabsContent>
              <TabsContent value="tab3">Tab 3 Content</TabsContent>
              <TabsContent value="tab4">Tab 4 Content</TabsContent>
              <TabsContent value="tab5">Tab 5 Content</TabsContent>
            </Tabs>
            <Tabs defaultValue="tab1" size="md">
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                <TabsTrigger value="tab5">Tab 5</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 Content</TabsContent>
              <TabsContent value="tab2">Tab 2 Content</TabsContent>
              <TabsContent value="tab3">Tab 3 Content</TabsContent>
              <TabsContent value="tab4">Tab 4 Content</TabsContent>
              <TabsContent value="tab5">Tab 5 Content</TabsContent>
            </Tabs>
            <Tabs defaultValue="tab1" size="md" orientation="vertical">
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                <TabsTrigger value="tab5">Tab 5</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 Content</TabsContent>
              <TabsContent value="tab2">Tab 2 Content</TabsContent>
              <TabsContent value="tab3">Tab 3 Content</TabsContent>
              <TabsContent value="tab4">Tab 4 Content</TabsContent>
              <TabsContent value="tab5">Tab 5 Content</TabsContent>
            </Tabs>
          </div>
          <div className="flex justify-between gap-[50px]">
            <Tabs defaultValue="tab1" variant="outline">
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                <TabsTrigger value="tab5">Tab 5</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 Content</TabsContent>
              <TabsContent value="tab2">Tab 2 Content</TabsContent>
              <TabsContent value="tab3">Tab 3 Content</TabsContent>
              <TabsContent value="tab4">Tab 4 Content</TabsContent>
              <TabsContent value="tab5">Tab 5 Content</TabsContent>
            </Tabs>
            <Tabs defaultValue="tab1" size="md" variant="outline">
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                <TabsTrigger value="tab5">Tab 5</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 Content</TabsContent>
              <TabsContent value="tab2">Tab 2 Content</TabsContent>
              <TabsContent value="tab3">Tab 3 Content</TabsContent>
              <TabsContent value="tab4">Tab 4 Content</TabsContent>
              <TabsContent value="tab5">Tab 5 Content</TabsContent>
            </Tabs>
            <Tabs
              defaultValue="tab1"
              size="md"
              variant="outline"
              orientation="vertical"
            >
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                <TabsTrigger value="tab5">Tab 5</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 Content</TabsContent>
              <TabsContent value="tab2">Tab 2 Content</TabsContent>
              <TabsContent value="tab3">Tab 3 Content</TabsContent>
              <TabsContent value="tab4">Tab 4 Content</TabsContent>
              <TabsContent value="tab5">Tab 5 Content</TabsContent>
            </Tabs>
          </div>
          <div className="flex justify-between gap-[50px]">
            <Tabs defaultValue="tab1" variant="underline">
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                <TabsTrigger value="tab5">Tab 5</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 Content</TabsContent>
              <TabsContent value="tab2">Tab 2 Content</TabsContent>
              <TabsContent value="tab3">Tab 3 Content</TabsContent>
              <TabsContent value="tab4">Tab 4 Content</TabsContent>
              <TabsContent value="tab5">Tab 5 Content</TabsContent>
            </Tabs>
            <Tabs defaultValue="tab1" size="md" variant="underline">
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                <TabsTrigger value="tab5">Tab 5</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 Content</TabsContent>
              <TabsContent value="tab2">Tab 2 Content</TabsContent>
              <TabsContent value="tab3">Tab 3 Content</TabsContent>
              <TabsContent value="tab4">Tab 4 Content</TabsContent>
              <TabsContent value="tab5">Tab 5 Content</TabsContent>
            </Tabs>
            <Tabs
              defaultValue="tab1"
              size="md"
              variant="underline"
              orientation="vertical"
            >
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                <TabsTrigger value="tab5">Tab 5</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 Content</TabsContent>
              <TabsContent value="tab2">Tab 2 Content</TabsContent>
              <TabsContent value="tab3">Tab 3 Content</TabsContent>
              <TabsContent value="tab4">Tab 4 Content</TabsContent>
              <TabsContent value="tab5">Tab 5 Content</TabsContent>
            </Tabs>
          </div>
          <div className="flex justify-between gap-[50px]">
            <Tabs defaultValue="tab1" variant="ghost">
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                <TabsTrigger value="tab5">Tab 5</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 Content</TabsContent>
              <TabsContent value="tab2">Tab 2 Content</TabsContent>
              <TabsContent value="tab3">Tab 3 Content</TabsContent>
              <TabsContent value="tab4">Tab 4 Content</TabsContent>
              <TabsContent value="tab5">Tab 5 Content</TabsContent>
            </Tabs>
            <Tabs defaultValue="tab1" size="md" variant="ghost">
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                <TabsTrigger value="tab5">Tab 5</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 Content</TabsContent>
              <TabsContent value="tab2">Tab 2 Content</TabsContent>
              <TabsContent value="tab3">Tab 3 Content</TabsContent>
              <TabsContent value="tab4">Tab 4 Content</TabsContent>
              <TabsContent value="tab5">Tab 5 Content</TabsContent>
            </Tabs>
            <Tabs
              defaultValue="tab1"
              size="md"
              variant="ghost"
              orientation="vertical"
            >
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                <TabsTrigger value="tab5">Tab 5</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 Content</TabsContent>
              <TabsContent value="tab2">Tab 2 Content</TabsContent>
              <TabsContent value="tab3">Tab 3 Content</TabsContent>
              <TabsContent value="tab4">Tab 4 Content</TabsContent>
              <TabsContent value="tab5">Tab 5 Content</TabsContent>
            </Tabs>
          </div>
          <div className="flex justify-between gap-[50px]">
            <Tabs defaultValue="tab1" variant="browser">
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                <TabsTrigger value="tab5">Tab 5</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 Content</TabsContent>
              <TabsContent value="tab2">Tab 2 Content</TabsContent>
              <TabsContent value="tab3">Tab 3 Content</TabsContent>
              <TabsContent value="tab4">Tab 4 Content</TabsContent>
              <TabsContent value="tab5">Tab 5 Content</TabsContent>
            </Tabs>
            <Tabs defaultValue="tab1" size="md" variant="browser">
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                <TabsTrigger value="tab5">Tab 5</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 Content</TabsContent>
              <TabsContent value="tab2">Tab 2 Content</TabsContent>
              <TabsContent value="tab3">Tab 3 Content</TabsContent>
              <TabsContent value="tab4">Tab 4 Content</TabsContent>
              <TabsContent value="tab5">Tab 5 Content</TabsContent>
            </Tabs>
            <Tabs
              defaultValue="tab1"
              size="md"
              variant="browser"
              orientation="vertical"
            >
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                <TabsTrigger value="tab5">Tab 5</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 Content</TabsContent>
              <TabsContent value="tab2">Tab 2 Content</TabsContent>
              <TabsContent value="tab3">Tab 3 Content</TabsContent>
              <TabsContent value="tab4">Tab 4 Content</TabsContent>
              <TabsContent value="tab5">Tab 5 Content</TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsDemo;

import React from "react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { UploadCloudIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const EmptyDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Empty Component
        </h1>
        <div className="flex flex-col gap-[30px_0]">
          <Empty className="border border-dashed w-full max-w-[500px] mx-auto">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <UploadCloudIcon />
              </EmptyMedia>
              <EmptyTitle>Cloud Storage Empty</EmptyTitle>
              <EmptyDescription>
                Upload files to your cloud storage to access them anywhere.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button variant="outline" size="sm">
                Upload Files
              </Button>
            </EmptyContent>
          </Empty>
        </div>
      </div>
    </div>
  );
};

export default EmptyDemo;

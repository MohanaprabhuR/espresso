// import React from "react";
// import { Progress } from "@/components/ui/progress";
// import { CloudIcon } from "../../../public/images/svg/cloudIcon";
// import { Label } from "@/components/ui/label";

// const InputDemo = () => {
//   return (
//     <div>
//       <div className="pt-10 text-center">
//         <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
//           Progress Component
//         </h1>
//         <div className="flex flex-col  mx-auto gap-[50px] justify-center">
//           <div className="flex gap-[30px]">
//             <div className="flex flex-col gap-[20px] w-full">
//               <Progress value={40} size="xs" />
//               <Progress value={40} size="sm" />
//               <Progress value={40} size="md" />
//               <Progress value={40} size="lg" />
//             </div>
//             <div className="flex flex-col gap-[20px] w-full">
//               <Progress value={40} size="xs" square />
//               <Progress value={40} size="sm" square />
//               <Progress value={40} size="md" square />
//               <Progress value={40} size="lg" square />
//             </div>
//           </div>
//           <div className="flex gap-[30px]">
//             <div className="flex flex-col gap-[20px] w-full">
//               <Progress value={40} intervals={6} size="xs" />
//               <Progress value={40} intervals={6} size="sm" />
//               <Progress value={40} intervals={6} size="md" />
//               <Progress value={40} intervals={6} size="lg" />
//             </div>
//             <div className="flex flex-col gap-[20px] w-full">
//               <Progress value={40} intervals={6} size="xs" square />
//               <Progress value={40} intervals={6} size="sm" square />
//               <Progress value={40} intervals={6} size="md" square />
//               <Progress value={40} intervals={6} size="lg" square />
//             </div>
//           </div>
//           <div className="flex gap-[30px]">
//             <div className="flex flex-col gap-[20px] w-full">
//               <Progress value={40} size="xs" showLabel>
//                 <Label>
//                   <CloudIcon fill="currentColor" />
//                   Label
//                 </Label>
//               </Progress>
//               <Progress value={40} size="sm" showLabel>
//                 <Label>
//                   <CloudIcon fill="currentColor" />
//                   Label
//                 </Label>
//               </Progress>
//               <Progress value={40} size="md" showLabel>
//                 <Label>
//                   <CloudIcon fill="currentColor" />
//                   Label
//                 </Label>
//               </Progress>
//               <Progress value={40} size="lg" showLabel>
//                 <Label>
//                   <CloudIcon fill="currentColor" />
//                   Label
//                 </Label>
//               </Progress>
//             </div>
//             <div className="flex flex-col gap-[20px] w-full">
//               <Progress value={40} square size="xs" showLabel>
//                 <Label>
//                   <CloudIcon fill="currentColor" />
//                   Label
//                 </Label>
//               </Progress>
//               <Progress value={40} square size="sm" showLabel>
//                 <Label>
//                   <CloudIcon fill="currentColor" />
//                   Label
//                 </Label>
//               </Progress>
//               <Progress value={40} square size="md" showLabel>
//                 <Label>
//                   <CloudIcon fill="currentColor" />
//                   Label
//                 </Label>
//               </Progress>
//               <Progress value={40} square size="lg" showLabel>
//                 <Label>
//                   <CloudIcon fill="currentColor" />
//                   Label
//                 </Label>
//               </Progress>
//             </div>
//           </div>
//           <div className="flex gap-[30px]">
//             <div className="flex flex-col gap-[20px] w-full">
//               <Progress value={40} intervals={5} size="xs" showLabel>
//                 <Label>
//                   <CloudIcon fill="currentColor" />
//                   Label
//                 </Label>
//               </Progress>
//               <Progress value={40} intervals={5} size="sm" showLabel>
//                 <Label>
//                   <CloudIcon fill="currentColor" />
//                   Label
//                 </Label>
//               </Progress>
//               <Progress value={40} intervals={5} size="md" showLabel>
//                 <Label>
//                   <CloudIcon fill="currentColor" />
//                   Label
//                 </Label>
//               </Progress>
//               <Progress value={40} intervals={5} size="lg" showLabel>
//                 <Label>
//                   <CloudIcon fill="currentColor" />
//                   Label
//                 </Label>
//               </Progress>
//             </div>
//             <div className="flex flex-col gap-[20px] w-full">
//               <Progress value={40} intervals={5} square size="xs" showLabel>
//                 <Label>
//                   <CloudIcon fill="currentColor" />
//                   Label
//                 </Label>
//               </Progress>
//               <Progress value={40} intervals={5} square size="sm" showLabel>
//                 <Label>
//                   <CloudIcon fill="currentColor" />
//                   Label
//                 </Label>
//               </Progress>
//               <Progress value={40} intervals={5} square size="md" showLabel>
//                 <Label>
//                   <CloudIcon fill="currentColor" />
//                   Label
//                 </Label>
//               </Progress>
//               <Progress value={40} intervals={5} square size="lg" showLabel>
//                 <Label>
//                   <CloudIcon fill="currentColor" />
//                   Label
//                 </Label>
//               </Progress>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InputDemo;

"use client";

import React from "react";
import { hotkeysCoreFeature, syncDataLoaderFeature } from "@headless-tree/core";
import { useTree } from "@headless-tree/react";

import { Tree, TreeItem, TreeItemLabel } from "@/components/ui/tree";

interface Item {
  name: string;
  children?: string[];
}

const items: Record<string, Item> = {
  company: {
    name: "Company",
    children: ["engineering", "marketing", "operations"],
  },
  engineering: {
    name: "Engineering",
    children: ["frontend", "backend", "platform-team"],
  },
  frontend: { name: "Frontend", children: ["design-system", "web-platform"] },
  "design-system": {
    name: "Design System",
    children: ["components", "tokens", "guidelines"],
  },
  components: { name: "Components" },
  tokens: { name: "Tokens" },
  guidelines: { name: "Guidelines" },
  "web-platform": { name: "Web Platform" },
  backend: { name: "Backend", children: ["apis", "infrastructure"] },
  apis: { name: "APIs" },
  infrastructure: { name: "Infrastructure" },
  "platform-team": { name: "Platform Team" },
  marketing: { name: "Marketing", children: ["content", "seo"] },
  content: { name: "Content" },
  seo: { name: "SEO" },
  operations: { name: "Operations", children: ["hr", "finance"] },
  hr: { name: "HR" },
  finance: { name: "Finance" },
};

const indent = 20;

export default function Component() {
  const tree = useTree<Item>({
    initialState: {
      expandedItems: ["engineering", "frontend", "design-system"],
    },
    indent,
    rootItemId: "company",
    getItemName: (item) => item.getItemData().name,
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    dataLoader: {
      getItem: (itemId) => items[itemId],
      getChildren: (itemId) => items[itemId].children ?? [],
    },
    features: [syncDataLoaderFeature, hotkeysCoreFeature],
  });

  return (
    <div className="flex h-full flex-col gap-2 *:first:grow justify-center mx-auto max-w-[400px]">
      <div>
        <Tree
          className="relative before:absolute before:inset-0 before:-ms-1 before:bg-[repeating-linear-gradient(to_right,transparent_0,transparent_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)))]"
          indent={indent}
          tree={tree}
        >
          {tree.getItems().map((item) => {
            return (
              <TreeItem key={item.getId()} item={item}>
                <TreeItemLabel className="before:bg-background relative before:absolute before:inset-x-0 before:-inset-y-0.5 before:-z-10" />
              </TreeItem>
            );
          })}
        </Tree>
      </div>

      <p
        aria-live="polite"
        role="region"
        className="text-muted-foreground mt-2 text-xs"
      >
        Basic tree with vertical lines ∙{" "}
        <a
          href="https://headless-tree.lukasbach.com"
          className="hover:text-foreground underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          API
        </a>
      </p>
    </div>
  );
}

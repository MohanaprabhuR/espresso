// import { Spinner } from "@/components/ui/spinner-old";
// import React from "react";

// const SpinnerDemo = () => {
//   return (
//     <div>
//       <div className="pt-10 text-center">
//         <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-10 ">
//           Spinner Component
//         </h1>
//         <div className="flex flex-col   mx-auto gap-[50px]">
//           <div className="flex gap-x-10 justify-center">
//             <div className="flex gap-x-3">
//               <Spinner />
//               <Spinner size="md" />
//               <Spinner size="lg" />
//               <Spinner size="xl" />
//             </div>
//             <div className="flex gap-x-3">
//               <Spinner track />
//               <Spinner track size="md" />
//               <Spinner track size="lg" />
//               <Spinner track size="xl" />
//             </div>
//           </div>
//           <div className="flex gap-x-10 justify-center">
//             <div className="flex gap-x-3">
//               <Spinner variant="blue" />
//               <Spinner variant="blue" size="md" />
//               <Spinner variant="blue" size="lg" />
//               <Spinner variant="blue" size="xl" />
//             </div>
//             <div className="flex gap-x-3">
//               <Spinner variant="blue" track />
//               <Spinner variant="blue" track size="md" />
//               <Spinner variant="blue" track size="lg" />
//               <Spinner variant="blue" track size="xl" />
//             </div>
//           </div>
//           <div className="flex gap-x-10 justify-center">
//             <div className="flex gap-x-3">
//               <Spinner variant="green" />
//               <Spinner variant="green" size="md" />
//               <Spinner variant="green" size="lg" />
//               <Spinner variant="green" size="xl" />
//             </div>
//             <div className="flex gap-x-3">
//               <Spinner variant="green" track />
//               <Spinner variant="green" track size="md" />
//               <Spinner variant="green" track size="lg" />
//               <Spinner variant="green" track size="xl" />
//             </div>
//           </div>
//           <div className="flex gap-x-10 justify-center">
//             <div className="flex gap-x-3">
//               <Spinner variant="amber" />
//               <Spinner variant="amber" size="md" />
//               <Spinner variant="amber" size="lg" />
//               <Spinner variant="amber" size="xl" />
//             </div>
//             <div className="flex gap-x-3">
//               <Spinner variant="amber" track />
//               <Spinner variant="amber" track size="md" />
//               <Spinner variant="amber" track size="lg" />
//               <Spinner variant="amber" track size="xl" />
//             </div>
//           </div>
//           <div className="flex gap-x-10 justify-center">
//             <div className="flex gap-x-3">
//               <Spinner variant="red" />
//               <Spinner variant="red" size="md" />
//               <Spinner variant="red" size="lg" />
//               <Spinner variant="red" size="xl" />
//             </div>
//             <div className="flex gap-x-3">
//               <Spinner variant="red" track />
//               <Spinner variant="red" track size="md" />
//               <Spinner variant="red" track size="lg" />
//               <Spinner variant="red" track size="xl" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SpinnerDemo;
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { cn } from "@/lib/utils";
import { Spinner } from "@/components/ui/spinner";
import { LoaderIcon } from "lucide-react";

function SpinnerLine({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  );
}

const SpinnerDemo = () => {
  return (
    <div className="pt-10 text-center">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-10 ">
        Spinner Component
      </h1>
      <div className="flex w-full  items-center justify-center flex-col gap-4 [--radius:1rem]">
        <Item variant="muted">
          <ItemMedia>
            <Spinner />
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="line-clamp-1">
              Processing payment...
            </ItemTitle>
          </ItemContent>
          <ItemContent className="flex-none justify-end">
            <span className="text-sm tabular-nums">$100.00</span>
          </ItemContent>
        </Item>

        <div className="flex items-center gap-6">
          <SpinnerLine className="size-2" />
          <SpinnerLine className="size-3" />
          <SpinnerLine className="size-4" />
          <SpinnerLine className="size-6" />
          <SpinnerLine className="size-8" />
        </div>

        <div className="flex items-center gap-6">
          <Spinner className="size-2" />
          <Spinner className="size-3" />
          <Spinner className="size-4" />
          <Spinner className="size-6" />
          <Spinner className="size-8" />
        </div>
        <div className="flex items-center gap-6">
          <Spinner className="size-6 text-red-500" />
          <Spinner className="size-6 text-green-500" />
          <Spinner className="size-6 text-blue-500" />
          <Spinner className="size-6 text-yellow-500" />
          <Spinner className="size-6 text-purple-500" />
        </div>
      </div>
    </div>
  );
};
export default SpinnerDemo;

/* eslint-disable @typescript-eslint/no-explicit-any */
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

// "use client";
// import { faker } from "@faker-js/faker";
// import {
//   GanttCreateMarkerTrigger,
//   GanttFeatureList,
//   GanttFeatureListGroup,
//   GanttFeatureRow,
//   GanttHeader,
//   GanttMarker,
//   GanttProvider,
//   GanttSidebar,
//   GanttSidebarGroup,
//   GanttSidebarItem,
//   GanttTimeline,
//   GanttToday,
// } from "@/components/ui/kibo-ui/gantt";
// import groupBy from "lodash.groupby";
// import { EyeIcon, LinkIcon, TrashIcon } from "lucide-react";
// import { useState } from "react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import {
//   ContextMenu,
//   ContextMenuContent,
//   ContextMenuItem,
//   ContextMenuTrigger,
// } from "@/components/ui/context-menu";
// const statuses = [
//   { id: faker.string.uuid(), name: "Confirmed", color: "#10B981" },
//   { id: faker.string.uuid(), name: "Pending", color: "#F59E0B" },
//   { id: faker.string.uuid(), name: "Cancelled", color: "#EF4444" },
// ];
// const guests = Array.from({ length: 8 })
//   .fill(null)
//   .map(() => ({
//     id: faker.string.uuid(),
//     name: faker.person.fullName(),
//     image: faker.image.avatar(),
//   }));
// // Hotel rooms
// const hotelRooms = Array.from({ length: 5 })
//   .fill(null)
//   .map((_, index) => ({
//     id: faker.string.uuid(),
//     name: `Room ${101 + index}`,
//   }));
// // Generate hotel reservations - multiple guests can book the same room for different periods
// const hotelReservations = Array.from({ length: 12 })
//   .fill(null)
//   .map(() => {
//     const startDate = faker.date.future({ years: 0.3, refDate: new Date() });
//     const endDate = faker.date.future({ years: 0.1, refDate: startDate });
//     const room = faker.helpers.arrayElement(hotelRooms);
//     const guest = faker.helpers.arrayElement(guests);

//     return {
//       id: faker.string.uuid(),
//       name: `${guest.name} - ${faker.helpers.arrayElement([
//         "Business Trip",
//         "Vacation",
//         "Conference",
//         "Weekend Getaway",
//       ])}`,
//       startAt: startDate,
//       endAt: endDate,
//       status: faker.helpers.arrayElement(statuses),
//       lane: room.id, // This groups reservations by room
//       // Store additional data that's not part of core GanttFeature
//       metadata: {
//         guest,
//         room,
//         group: { name: "Hotel Reservations" },
//       },
//     };
//   });
// const exampleMarkers = Array.from({ length: 3 })
//   .fill(null)
//   .map(() => ({
//     id: faker.string.uuid(),
//     date: faker.date.future({ years: 0.2, refDate: new Date() }),
//     label: faker.helpers.arrayElement([
//       "Holiday Period",
//       "Conference Week",
//       "Peak Season",
//     ]),
//     className: faker.helpers.arrayElement([
//       "bg-blue-100 text-blue-900",
//       "bg-green-100 text-green-900",
//       "bg-purple-100 text-purple-900",
//     ]),
//   }));
// const Example = () => {
//   const [reservations, setReservations] = useState(hotelReservations);

//   // Group reservations by room (lane), then by group
//   const groupedReservations = groupBy(reservations, "metadata.group.name");
//   const roomGroupedReservations = Object.fromEntries(
//     Object.entries(groupedReservations).map(
//       ([groupName, groupReservations]) => [
//         groupName,
//         groupBy(groupReservations, "lane"),
//       ]
//     )
//   );
//   const handleViewReservation = (id: string) =>
//     console.log(`Reservation selected: ${id}`);
//   const handleCopyLink = (id: string) => console.log(`Copy link: ${id}`);
//   const handleRemoveReservation = (id: string) =>
//     setReservations((prev) =>
//       prev.filter((reservation) => reservation.id !== id)
//     );
//   const handleRemoveMarker = (id: string) =>
//     console.log(`Remove marker: ${id}`);
//   const handleCreateMarker = (date: Date) =>
//     console.log(`Create marker: ${date.toISOString()}`);
//   const handleMoveReservation = (
//     id: string,
//     startAt: Date,
//     endAt: Date | null
//   ) => {
//     if (!endAt) {
//       return;
//     }
//     setReservations((prev) =>
//       prev.map((reservation) =>
//         reservation.id === id ? { ...reservation, startAt, endAt } : reservation
//       )
//     );
//     console.log(`Move reservation: ${id} from ${startAt} to ${endAt}`);
//   };
//   const handleAddReservation = (date: Date) =>
//     console.log(`Add reservation: ${date.toISOString()}`);
//   return (
//     <GanttProvider
//       className="border"
//       onAddItem={handleAddReservation}
//       range="monthly"
//       zoom={100}
//     >
//       <GanttSidebar>
//         {Object.entries(roomGroupedReservations).map(
//           ([groupName, roomReservations]) => (
//             <GanttSidebarGroup key={groupName} name={groupName}>
//               {Object.entries(roomReservations).map(
//                 ([roomId, roomReservationList]) => {
//                   const room = hotelRooms.find((r) => r.id === roomId);
//                   // Create a representative feature for the sidebar
//                   const representativeReservation = {
//                     id: roomId,
//                     name: room?.name || "Unknown Room",
//                     startAt: new Date(
//                       Math.min(
//                         ...roomReservationList.map((r) => r.startAt.getTime())
//                       )
//                     ),
//                     endAt: new Date(
//                       Math.max(
//                         ...roomReservationList.map((r) => r.endAt.getTime())
//                       )
//                     ),
//                     status: roomReservationList[0].status,
//                   };

//                   return (
//                     <GanttSidebarItem
//                       key={roomId}
//                       feature={representativeReservation}
//                       onSelectItem={() => handleViewReservation(roomId)}
//                     />
//                   );
//                 }
//               )}
//             </GanttSidebarGroup>
//           )
//         )}
//       </GanttSidebar>
//       <GanttTimeline>
//         <GanttHeader />
//         <GanttFeatureList>
//           {Object.entries(roomGroupedReservations).map(
//             ([groupName, roomReservations]) => (
//               <GanttFeatureListGroup key={groupName}>
//                 {Object.entries(roomReservations).map(
//                   ([roomId, roomReservationList]) => (
//                     <div key={roomId}>
//                       <GanttFeatureRow
//                         features={roomReservationList}
//                         onMove={handleMoveReservation}
//                       >
//                         {(reservation) => (
//                           <ContextMenu>
//                             <ContextMenuTrigger asChild>
//                               <div className="flex items-center gap-2 w-full">
//                                 <p className="flex-1 truncate text-xs">
//                                   {reservation.name}
//                                 </p>
//                                 {(reservation as any).metadata?.guest && (
//                                   <Avatar className="h-4 w-4">
//                                     <AvatarImage
//                                       src={
//                                         (reservation as any).metadata.guest
//                                           .image
//                                       }
//                                     />
//                                     <AvatarFallback>
//                                       {(
//                                         reservation as any
//                                       ).metadata.guest.name?.slice(0, 2)}
//                                     </AvatarFallback>
//                                   </Avatar>
//                                 )}
//                               </div>
//                             </ContextMenuTrigger>
//                             <ContextMenuContent>
//                               <ContextMenuItem
//                                 className="flex items-center gap-2"
//                                 onClick={() =>
//                                   handleViewReservation(reservation.id)
//                                 }
//                               >
//                                 <EyeIcon
//                                   className="text-muted-foreground"
//                                   size={16}
//                                 />
//                                 View reservation
//                               </ContextMenuItem>
//                               <ContextMenuItem
//                                 className="flex items-center gap-2"
//                                 onClick={() => handleCopyLink(reservation.id)}
//                               >
//                                 <LinkIcon
//                                   className="text-muted-foreground"
//                                   size={16}
//                                 />
//                                 Copy link
//                               </ContextMenuItem>
//                               <ContextMenuItem
//                                 className="flex items-center gap-2 text-destructive"
//                                 onClick={() =>
//                                   handleRemoveReservation(reservation.id)
//                                 }
//                               >
//                                 <TrashIcon size={16} />
//                                 Cancel reservation
//                               </ContextMenuItem>
//                             </ContextMenuContent>
//                           </ContextMenu>
//                         )}
//                       </GanttFeatureRow>
//                     </div>
//                   )
//                 )}
//               </GanttFeatureListGroup>
//             )
//           )}
//         </GanttFeatureList>
//         {exampleMarkers.map((marker) => (
//           <GanttMarker
//             key={marker.id}
//             {...marker}
//             onRemove={handleRemoveMarker}
//           />
//         ))}
//         <GanttToday />
//         <GanttCreateMarkerTrigger onCreateMarker={handleCreateMarker} />
//       </GanttTimeline>
//     </GanttProvider>
//   );
// };
// export default Example;

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

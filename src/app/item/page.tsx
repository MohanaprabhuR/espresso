import React from "react";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ItemDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Item Component
        </h1>
        <div className="flex flex-col gap-[30px_0] w-full max-w-[500px] mx-auto">
          <Item variant="outline">
            <ItemContent>
              <ItemTitle>Basic Item</ItemTitle>
              <ItemDescription>
                A new update is available for the app. Update now to enjoy new
                features and improvements.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="outline" size="sm">
                Action
              </Button>
            </ItemActions>
          </Item>
          <Item variant="outline" size="sm" asChild>
            <a href="#">
              <ItemMedia>
                <BadgeCheckIcon className="size-5" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>
                  A new update is available for the app. Update now to enjoy new
                  features and improvements.
                </ItemTitle>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon className="size-4" />
              </ItemActions>
            </a>
          </Item>
          <Item variant="outline" size="sm">
            <ItemHeader>Item Header</ItemHeader>
            <ItemMedia />
            <ItemContent>
              <ItemTitle>Item</ItemTitle>
              <ItemDescription>
                A new update is available for the app. Update now to enjoy new
                features and improvements.
              </ItemDescription>
            </ItemContent>
            <ItemActions />
            <ItemFooter>Item Footer</ItemFooter>
          </Item>
        </div>
      </div>
    </div>
  );
};

export default ItemDemo;

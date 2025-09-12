"use client";
import React from "react";
import { CloseIcon } from "../../../public/images/svg/closeIcon";
import { ExclamationIcon } from "../../../public/images/svg/exclamationIcon";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const AlertDemo = () => {
  return (
    <div>
      <div className="pt-10 ">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-10 text-center">
          Alert Component
        </h1>
        <div className="flex flex-col  mx-auto gap-[50px] items-center max-w-120">
          <Alert>
            <AlertTitle>Your trial ends soon! </AlertTitle>
          </Alert>
          <Alert>
            <AlertTitle>Your trial ends soon! </AlertTitle>
            <CloseIcon />
          </Alert>
          <Alert>
            <ExclamationIcon />
            <AlertTitle>Your trial ends soon! </AlertTitle>
          </Alert>
          <Alert>
            <ExclamationIcon />
            <AlertTitle>Your trial ends soon! </AlertTitle>
            <CloseIcon />
          </Alert>
          <Alert action>
            <AlertTitle>Your trial ends soon!</AlertTitle>
            <Button variant="ghost"> Update</Button>
          </Alert>
          <Alert action>
            <AlertTitle>Your trial ends soon!</AlertTitle>
            <Button variant="ghost"> Update</Button>
            <CloseIcon />
          </Alert>
          <Alert action>
            <ExclamationIcon />
            <AlertTitle>Your trial ends soon!</AlertTitle>
            <Button variant="ghost"> Update</Button>
          </Alert>
          <Alert action>
            <ExclamationIcon />
            <AlertTitle>Your trial ends soon!</AlertTitle>
            <Button variant="ghost"> Update</Button>
            <CloseIcon />
          </Alert>
          <Alert longText>
            <AlertTitle>Your trial ends soon!</AlertTitle>
            <AlertDescription>
              Upgrade now to continue enjoying all features without
              interruption.
            </AlertDescription>
          </Alert>
          <Alert longText>
            <AlertTitle>Your trial ends soon!</AlertTitle>
            <AlertDescription>
              Upgrade now to continue enjoying all features without
              interruption.
            </AlertDescription>
            <CloseIcon />
          </Alert>
          <Alert longText>
            <ExclamationIcon />
            <AlertTitle>Your trial ends soon!</AlertTitle>
            <AlertDescription>
              Upgrade now to continue enjoying all features without
              interruption.
            </AlertDescription>
          </Alert>
          <Alert longText>
            <ExclamationIcon />
            <AlertTitle>Your trial ends soon!</AlertTitle>
            <AlertDescription>
              Upgrade now to continue enjoying all features without
              interruption.
            </AlertDescription>
            <CloseIcon />
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default AlertDemo;

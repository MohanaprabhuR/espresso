"use client";
import React from "react";
import { CloseIcon } from "../../../public/images/svg/closeIcon";
import { ExclamationIcon } from "../../../public/images/svg/exclamationIcon";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const AlertDemo = () => {
  return (
    <div>
      <div className="pt-10 ">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-10 text-center">
          Alert Component
        </h1>
        <div className="flex flex-col  mx-auto gap-[50px] items-center max-w-120">
          <Alert action longText>
            <CloseIcon />
            <div>
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <AlertDescription>
                Upgrade now to continue enjoying all features without
                interruption.
              </AlertDescription>
            </div>
            <Button variant="ghost" size="sm">
              Update
            </Button>
            <Button variant="ghost" size="sm">
              <CloseIcon />
            </Button>
          </Alert>
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
            <Button variant="ghost" size="sm">
              Update
            </Button>
          </Alert>
          <Alert action>
            <AlertTitle>Your trial ends soon!</AlertTitle>
            <Button variant="ghost" size="sm">
              Update
            </Button>
            <Button variant="ghost" size="sm">
              <CloseIcon />
            </Button>
          </Alert>
          <Alert action>
            <ExclamationIcon />
            <AlertTitle>Your trial ends soon!</AlertTitle>
            <Button variant="ghost" size="sm">
              Update
            </Button>
          </Alert>
          <Alert action>
            <ExclamationIcon />
            <AlertTitle>Your trial ends soon!</AlertTitle>
            <Button variant="ghost" size="sm">
              Update
            </Button>
            <Button variant="ghost" size="sm">
              <CloseIcon />
            </Button>
          </Alert>
          <Alert variant="information">
            <AlertTitle>Your trial ends soon! </AlertTitle>
          </Alert>
          <Alert variant="information">
            <ExclamationIcon />
            <AlertTitle>Your trial ends soon! </AlertTitle>
            <CloseIcon />
          </Alert>
          <Alert action variant="information">
            <AlertTitle>Your trial ends soon!</AlertTitle>
            <Button variant="ghost" size="sm">
              Update <CloseIcon />
            </Button>
          </Alert>
          <Alert variant="success">
            <AlertTitle>Your trial ends soon! </AlertTitle>
          </Alert>
          <Alert variant="success">
            <ExclamationIcon />
            <AlertTitle>Your trial ends soon! </AlertTitle>
            <CloseIcon />
          </Alert>
          <Alert action variant="success">
            <AlertTitle>Your trial ends soon!</AlertTitle>
            <Button variant="ghost" size="sm">
              Update
            </Button>
            <Button variant="ghost" size="sm">
              <CloseIcon />
            </Button>
          </Alert>
          <Alert variant="warning">
            <AlertTitle>Your trial ends soon! </AlertTitle>
          </Alert>
          <Alert variant="warning">
            <ExclamationIcon />
            <AlertTitle>Your trial ends soon! </AlertTitle>
            <CloseIcon />
          </Alert>
          <Alert action variant="warning">
            <AlertTitle>Your trial ends soon!</AlertTitle>
            <Button variant="ghost" size="sm">
              Update
            </Button>
            <Button variant="ghost" size="sm">
              <CloseIcon />
            </Button>
          </Alert>
          <Alert variant="error">
            <AlertTitle>Your trial ends soon! </AlertTitle>
          </Alert>
          <Alert variant="error">
            <ExclamationIcon />
            <AlertTitle>Your trial ends soon! </AlertTitle>
            <CloseIcon />
          </Alert>
          <Alert action variant="error">
            <AlertTitle>Your trial ends soon!</AlertTitle>
            <Button variant="ghost" size="sm">
              Update
            </Button>
            <Button variant="ghost" size="sm">
              <CloseIcon />
            </Button>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default AlertDemo;

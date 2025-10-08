"use client";
import React from "react";
import { CloseIcon } from "../../../public/images/svg/closeIcon";
import { ExclamationIcon } from "../../../public/images/svg/exclamationIcon";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ButtonGroup } from "@/components/ui/button-group";

const AlertDemo = () => {
  return (
    <div>
      <div className="pt-10 ">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-10 text-center">
          Alert Component
        </h1>
        <div className="flex flex-wrap  mx-auto gap-[50px] items-center ">
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
            <ButtonGroup separator>
              <Button size="sm">Update</Button>
              <Button size="sm">
                <CloseIcon />
              </Button>
            </ButtonGroup>
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
            <ButtonGroup separator>
              <Button size="sm">Update</Button>
              <Button size="sm">
                <CloseIcon />
              </Button>
            </ButtonGroup>
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
            <ButtonGroup separator>
              <Button size="sm">Update</Button>
              <Button size="sm">
                <CloseIcon />
              </Button>
            </ButtonGroup>
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
            <ButtonGroup separator>
              <Button size="sm">Update</Button>
              <Button size="sm">
                <CloseIcon />
              </Button>
            </ButtonGroup>
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
            <ButtonGroup separator>
              <Button size="sm">Update</Button>
              <Button size="sm">
                <CloseIcon />
              </Button>
            </ButtonGroup>
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
            <ButtonGroup separator>
              <Button size="sm">Update</Button>
              <Button size="sm">
                <CloseIcon />
              </Button>
            </ButtonGroup>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default AlertDemo;

"use client";
import React from "react";
import { CloseIcon } from "../../../public/images/svg/closeIcon";
import { ExclamationIcon } from "../../../public/images/svg/exclamationIcon";
import { Button } from "@/components/ui/button";
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Notification,
  NotificationAction,
  NotificationContent,
  NotificationDescription,
  NotificationTimeStamp,
  NotificationTitle,
} from "@/components/ui/notification";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AlertDemo = () => {
  return (
    <div>
      <div className="pt-10 ">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-10 text-center">
          Notification Component
        </h1>
        <div className="flex flex-wrap  flex-col mx-auto gap-[20px] items-center ">
          <Notification>
            <NotificationTitle>
              Update available. Get new features!
            </NotificationTitle>
          </Notification>
          <Notification>
            <NotificationTitle>
              Update available. Get new features!
            </NotificationTitle>
            <CloseIcon />
          </Notification>
          <Notification>
            <ExclamationIcon />
            <NotificationTitle>
              Update available. Get new features!
            </NotificationTitle>
          </Notification>
          <Notification>
            <ExclamationIcon />
            <NotificationTitle>
              Update available. Get new features!
            </NotificationTitle>
            <CloseIcon />
          </Notification>
          <Notification action>
            <NotificationTitle>
              Update available. Get new features!
            </NotificationTitle>
            <Button variant="ghost">Update</Button>
          </Notification>
          <Notification action>
            <NotificationTitle>
              Update available. Get new features!
            </NotificationTitle>
            <ButtonGroup destructive>
              <Button variant="ghost">Update</Button>
              <Button variant="ghost">
                <CloseIcon />
              </Button>
            </ButtonGroup>
          </Notification>
          <Notification action>
            <ExclamationIcon />
            <NotificationTitle>
              Update available. Get new features!
            </NotificationTitle>
            <Button variant="ghost">Update</Button>
          </Notification>
          <Notification action>
            <ExclamationIcon />
            <NotificationTitle>
              Update available. Get new features!
            </NotificationTitle>
            <ButtonGroup destructive>
              <Button variant="ghost">Update</Button>
              <Button variant="ghost">
                <CloseIcon />
              </Button>
            </ButtonGroup>
          </Notification>
          <Notification longText>
            <NotificationContent>
              <NotificationTitle>System Update Available</NotificationTitle>
              <NotificationDescription>
                A new update is available for the app. Update now to enjoy new
                features and improvements.
              </NotificationDescription>
            </NotificationContent>
          </Notification>
          <Notification longText action>
            <NotificationContent>
              <NotificationTitle>System Update Available</NotificationTitle>
              <NotificationDescription>
                A new update is available for the app. Update now to enjoy new
                features and improvements.
              </NotificationDescription>
            </NotificationContent>
            <Button variant="ghost">
              <CloseIcon />
            </Button>
          </Notification>
          <Notification longText action>
            <ExclamationIcon />
            <NotificationContent>
              <NotificationTitle>System Update Available</NotificationTitle>
              <NotificationDescription>
                A new update is available for the app. Update now to enjoy new
                features and improvements.
              </NotificationDescription>
            </NotificationContent>
          </Notification>
          <Notification longText action>
            <ExclamationIcon />
            <NotificationContent>
              <NotificationTitle>System Update Available</NotificationTitle>
              <NotificationDescription>
                A new update is available for the app. Update now to enjoy new
                features and improvements.
              </NotificationDescription>
            </NotificationContent>
            <Button variant="ghost">
              <CloseIcon />
            </Button>
          </Notification>
          <Notification longText>
            <NotificationContent>
              <NotificationTitle>System Update Available</NotificationTitle>
              <NotificationDescription>
                A new update is available for the app. Update now to enjoy new
                features and improvements.
              </NotificationDescription>
              <ButtonGroup destructive className="pt-3.5">
                <Button variant="secondary">Update Now</Button>
                <Button variant="outline">Later</Button>
              </ButtonGroup>
            </NotificationContent>
          </Notification>
          <Notification longText>
            <NotificationContent>
              <NotificationTitle>System Update Available</NotificationTitle>
              <NotificationDescription>
                A new update is available for the app. Update now to enjoy new
                features and improvements.
              </NotificationDescription>
              <ButtonGroup destructive className="pt-3.5">
                <Button variant="secondary">Update Now</Button>
                <Button variant="outline">Later</Button>
              </ButtonGroup>
            </NotificationContent>
            <Button variant="ghost">
              <CloseIcon />
            </Button>
          </Notification>
          <Notification longText>
            <ExclamationIcon />
            <NotificationContent>
              <NotificationTitle>System Update Available</NotificationTitle>
              <NotificationDescription>
                A new update is available for the app. Update now to enjoy new
                features and improvements.
              </NotificationDescription>
              <ButtonGroup destructive className="pt-3.5">
                <Button variant="secondary">Update Now</Button>
                <Button variant="outline">Later</Button>
              </ButtonGroup>
            </NotificationContent>
          </Notification>
          <Notification longText>
            <ExclamationIcon />
            <NotificationContent>
              <NotificationTitle>System Update Available</NotificationTitle>
              <NotificationDescription>
                A new update is available for the app. Update now to enjoy new
                features and improvements.
              </NotificationDescription>
              <ButtonGroup destructive className="pt-3.5">
                <Button variant="secondary">Update Now</Button>
                <Button variant="outline">Later</Button>
              </ButtonGroup>
            </NotificationContent>
            <Button variant="ghost">
              <CloseIcon />
            </Button>
          </Notification>
          <Notification notificationPanel>
            <Avatar size="lg">
              <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <NotificationContent>
              <NotificationTitle>Jane Johnson</NotificationTitle>
              <NotificationDescription>
                Your task is due tomorrow
              </NotificationDescription>
              <NotificationTimeStamp>28 min ago</NotificationTimeStamp>
            </NotificationContent>
          </Notification>
          <Notification notificationPanel>
            <Avatar size="lg">
              <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <NotificationContent>
              <NotificationTitle>Jane Johnson</NotificationTitle>
              <NotificationDescription>
                Your task is due tomorrow
              </NotificationDescription>
              <NotificationTimeStamp>28 min ago</NotificationTimeStamp>
              <ButtonGroup destructive className="pt-3.5">
                <Button variant="secondary">join</Button>
                <Button variant="outline">Decline</Button>
              </ButtonGroup>
            </NotificationContent>
          </Notification>
          <Notification notificationPanel>
            <Avatar size="lg">
              <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <NotificationContent>
              <NotificationTitle>Jane Johnson</NotificationTitle>
              <NotificationDescription>
                Your task is due tomorrow
              </NotificationDescription>
              <NotificationTimeStamp>28 min ago</NotificationTimeStamp>
            </NotificationContent>
            <Button variant="ghost">
              <CloseIcon />
            </Button>
          </Notification>
          <Notification notificationPanel>
            <Avatar size="lg">
              <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <NotificationContent>
              <NotificationTitle>Jane Johnson</NotificationTitle>
              <NotificationDescription>
                Your task is due tomorrow
              </NotificationDescription>
              <NotificationTimeStamp>28 min ago</NotificationTimeStamp>
              <ButtonGroup destructive className="pt-3.5">
                <Button variant="secondary">join</Button>
                <Button variant="outline">Decline</Button>
              </ButtonGroup>
            </NotificationContent>
            <Button variant="ghost">
              <CloseIcon />
            </Button>
          </Notification>
          {/* <Notification splitbutton longText>
            <NotificationContent >
              <NotificationTitle>Your trial ends soon!</NotificationTitle>
              <NotificationDescription>
                Upgrade now to continue enjoying all features without
                interruption.
              </NotificationDescription>
            </NotificationContent>
            <ButtonGroup orientation="vertical">
              <Button variant="outline">Update</Button>
              <Button variant="outline">View</Button>
            </ButtonGroup>
          </Notification>
          <Notification splitbutton longText>
            <ExclamationIcon />
            <NotificationContent >
              <NotificationTitle>Your trial ends soon!</NotificationTitle>
              <NotificationDescription>
                Upgrade now to continue enjoying all features without
                interruption.
              </NotificationDescription>
            </NotificationContent>
            <CloseIcon />
          </Notification> */}
        </div>
      </div>
    </div>
  );
};

export default AlertDemo;

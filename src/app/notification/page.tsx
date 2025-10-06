import {
  Notification,
  NotificationTitle,
  NotificationDescription,
  NotificationContent,
} from "@/components/ui/notification";
import { CloseIcon } from "../../../public/images/svg/closeIcon";
import { ExclamationIcon } from "../../../public/images/svg/exclamationIcon";
import { ButtonGroup } from "@/components/ui/button-group-old";
import { Button } from "@/components/ui/button";
const AvatarDemo = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-10 gap-[30px_0]">
        <h1>Notification Component</h1>
        <Notification>
          <NotificationTitle>
            Update available. Get new features!
          </NotificationTitle>
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
          <Button variant="secondary" size="sm">
            Update now
            <CloseIcon />
          </Button>
        </Notification>
        <Notification longText>
          <ExclamationIcon />
          <NotificationContent>
            <NotificationTitle>
              Update available. Get new features!
            </NotificationTitle>
            <NotificationDescription>
              A new update is available for the app. Update now to enjoy new
              features and improvements.
            </NotificationDescription>
          </NotificationContent>
        </Notification>
        <Notification longText>
          <ExclamationIcon />
          <NotificationContent>
            <NotificationTitle>
              Update available. Get new features!
            </NotificationTitle>
            <NotificationDescription>
              A new update is available for the app. Update now to enjoy new
              features and improvements.
            </NotificationDescription>
            <ButtonGroup>
              <Button variant="secondary">Update now</Button>
              <Button variant="outline">Later</Button>
            </ButtonGroup>
          </NotificationContent>
          <CloseIcon />
        </Notification>
      </div>
    </>
  );
};

export default AvatarDemo;

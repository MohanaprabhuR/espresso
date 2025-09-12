import { Icon } from "@/components/BaseComponents/Icon/page";
import { SVGProps } from "react";

export const ExclamationIcon = (
  props: SVGProps<SVGSVGElement> & { ariaLabel?: string | false }
) => (
  <Icon fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM8 5.75C8.48325 5.75 8.875 5.35825 8.875 4.875C8.875 4.39175 8.48325 4 8 4C7.51675 4 7.125 4.39175 7.125 4.875C7.125 5.35825 7.51675 5.75 8 5.75ZM8 6.93604C8.27614 6.93604 8.5 7.15989 8.5 7.43604V11.1435C8.5 11.4196 8.27614 11.6435 8 11.6435C7.72386 11.6435 7.5 11.4196 7.5 11.1435V7.43604C7.5 7.15989 7.72386 6.93604 8 6.93604Z"
      fill="currentColor"
    />
  </Icon>
);

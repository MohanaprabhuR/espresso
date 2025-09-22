import { Icon } from "@/components/BaseComponents/Icon/page";
import { JSX, SVGProps } from "react";

export const TableIcon = (
  props: JSX.IntrinsicAttributes &
    SVGProps<SVGSVGElement> & { ariaLabel?: string | false }
) => (
  <Icon fill="none" viewBox="0 0 16 16" {...props}>
    <path
      d="M12.5 1C13.8807 1 15 2.11929 15 3.5V12.5C15 13.7943 14.0164 14.8592 12.7559 14.9873L12.5 15H3.5L3.24414 14.9873C2.06772 14.8677 1.13227 13.9323 1.0127 12.7559L1 12.5V3.5C1 2.11929 2.11929 1 3.5 1H12.5ZM5.75 14H12.5C13.3284 14 14 13.3284 14 12.5V10.75H5.75V14ZM3.5 2C2.67157 2 2 2.67157 2 3.5V12.5C2 13.3284 2.67157 14 3.5 14H4.75V2H3.5ZM5.75 9.75H14V6.25H5.75V9.75ZM5.75 5.25H14V3.5C14 2.67157 13.3284 2 12.5 2H5.75V5.25Z"
      fill="currentColor"
    />
  </Icon>
);

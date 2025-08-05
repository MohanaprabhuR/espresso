import { Icon } from "@/components/BaseComponents/Icon/page";
import { JSX, SVGProps } from "react";

export const SlashIcon = (
  props: JSX.IntrinsicAttributes &
    SVGProps<SVGSVGElement> & { ariaLabel?: string | false }
) => (
  <Icon fill="none" viewBox="0 0 12 12" {...props}>
    <path
      d="M5.19258 11.2031H4.05L6.8625 0.75H8.00508L5.19258 11.2031Z"
      fill="currentColor"
    />
  </Icon>
);

import { Icon } from "@/components/BaseComponents/Icon/page";
import { JSX, SVGProps } from "react";

export const DownIcon = (
  props: JSX.IntrinsicAttributes &
    SVGProps<SVGSVGElement> & { ariaLabel?: string | false }
) => (
  <Icon fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.90803 5.63523C4.10949 5.44637 4.42591 5.45657 4.61477 5.65803L8 9.26894L11.3852 5.65803C11.5741 5.45658 11.8905 5.44637 12.092 5.63523C12.2934 5.8241 12.3036 6.14052 12.1148 6.34197L8.36477 10.342C8.27025 10.4428 8.13821 10.5 8 10.5C7.8618 10.5 7.72976 10.4428 7.63523 10.342L3.88523 6.34197C3.69637 6.14052 3.70657 5.8241 3.90803 5.63523Z"
    />
  </Icon>
);

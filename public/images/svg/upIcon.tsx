import { Icon } from "@/components/BaseComponents/Icon/page";
import { JSX, SVGProps } from "react";

export const UpIcon = (
  props: JSX.IntrinsicAttributes &
    SVGProps<SVGSVGElement> & { ariaLabel?: string | false }
) => (
  <Icon fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.092 10.3648C11.8905 10.5536 11.5741 10.5434 11.3852 10.342L8 6.73106L4.61477 10.342C4.4259 10.5434 4.10948 10.5536 3.90803 10.3648C3.70657 10.1759 3.69636 9.85948 3.88523 9.65803L7.63523 5.65803C7.72975 5.5572 7.86179 5.5 8 5.5C8.1382 5.5 8.27024 5.5572 8.36477 5.65803L12.1148 9.65803C12.3036 9.85948 12.2934 10.1759 12.092 10.3648Z"
    />
  </Icon>
);

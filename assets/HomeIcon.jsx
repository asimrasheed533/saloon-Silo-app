import * as React from "react";
import Svg, { Path } from "react-native-svg";

function HomeIcon({ filled, ...props }) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M25.929 14.168L12.965 4.104 0 14.168v-4.1L12.965 0l12.964 10.065v4.103zm-3.241-.366v9.724h-6.481v-6.487H9.724v6.483H3.241v-9.72l9.724-7.293 9.723 7.293z"
        fill={filled ? "#BBBBBB" : "#ffff"}
      />
    </Svg>
  );
}

export default HomeIcon;

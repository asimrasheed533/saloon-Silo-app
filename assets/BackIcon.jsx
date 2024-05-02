import * as React from "react";
import Svg, { Path } from "react-native-svg";

function BackIcon(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.617 9.972l7.942 7.586c.14.133.25.29.326.465a1.372 1.372 0 010 1.096 1.425 1.425 0 01-.326.464 1.549 1.549 0 01-1.062.417c-.397 0-.779-.15-1.062-.417L.437 10.988a1.401 1.401 0 01-.437-.98 1.396 1.396 0 01.393-.997L9.428.36c.286-.241.658-.37 1.04-.358.382.01.745.16 1.016.418.27.258.428.605.44.97.013.365-.12.72-.372.995L3.617 9.972z"
        fill="#dd2374"
      />
    </Svg>
  );
}

export default BackIcon;

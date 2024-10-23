import React from "react";
import Image from "next/image";

type Props = {};

const Gallery = (props: Props) => {
  return (
<div className="grid grid-cols-2">
  <div>
    <Image
      src="/IMG_5007.jpeg"
      alt="Logo"
      width={1150}
      height={50}
      className=""
    />
  </div>
  <div>
    <Image
      src="/IMG_5004.jpeg"
      alt="Logo"
      width={1150}
      height={50}
      className=""
    />
  </div>
  <div>
    <Image
      src="/IMG_6119.png"
      alt="Logo"
      width={1150}
      height={50}
      className=""
    />
  </div>
  <div>
    <Image
      src="/IMG_5007.jpeg"
      alt="Logo"
      width={1150}
      height={0}
      className=""
    />
  </div>
</div>
  );
};

export default Gallery;

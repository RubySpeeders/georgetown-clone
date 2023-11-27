import React from "react";
import Image from "next/legacy/image";

const Header = () => {
  return (
    <header>
      <div>
        <div
          style={{
            width: "100%",
            height: "4rem",
            background: "#041E42",
          }}
        ></div>
        <div
          style={{
            width: "18rem",
            height: "4rem",
            position: "absolute",
            top: 0,
            left: "25px",
            zIndex: 1,
          }}
        >
          <Image
            src="/georgetown-title.png"
            alt="georgetown-title"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

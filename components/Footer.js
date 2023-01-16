import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div
      style={{
        padding: "20px 50px",
        background: "black",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <p style={{ fontSize: 24, alignItems: "center" }}>
        &#169; &nbsp;Tide @ 2023
      </p>
      <Link
        href="/"
        style={{
          fontSize: 24,
          background:
            "linear-gradient(to bottom left, #12FFA8 8%, #F78F95 85%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {/* <Image src="/logo-tide.png" alt="logo" width={132} height={52} /> */}
        Tide
      </Link>
    </div>
  );
}

export default Footer;

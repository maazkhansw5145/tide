import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";
import DarkModeToggleButton from "../components/DarkModeToggleButton";

function Index() {
  const [theme, setTheme] = useState("white");
  return (
    <>
      {/* put background image here */}
      <div className={theme === "dark" ? styles.darkTheme : styles.whiteTheme}>
        {/* header */}
        <div
          style={{
            display: "flex",
            margin: "20px 40px 0 30px",
            justifyContent: "space-between",
          }}
        >
          {/* logo */}
          <div>
            <Image src="/logo-tide.png" alt="logo" width={132} height={32} />
          </div>
          <DarkModeToggleButton theme={theme} setTheme={setTheme} />
          {/* right side <a> tags */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link
              href="/"
              style={{
                fontWeight: 500,
                fontSize: 16,
                marginRight: 40,
              }}
            >
              Features
            </Link>

            <Link
              href="/authentication/login"
              style={{
                fontWeight: 500,
                fontSize: 16,
                marginRight: 20,
              }}
            >
              Log in
            </Link>

            <div
              style={{
                borderLeft: "1px solid #1BF0A2",
                height: 35,
                marginRight: 12,
              }}
            ></div>

            <Link
              href="/authentication/signup"
              style={{
                fontWeight: 500,
                fontSize: 16,
                marginRight: 15,
              }}
            >
              sign up
            </Link>

            <div style={{ borderLeft: "1px solid #1BF0A2", height: 35 }}></div>
          </div>
        </div>

        {/* mid part of page */}
        <div style={{ display: "flex", margin: "40px 22px" }}>
          {/* font */}
          <div>
            <h1
              style={{
                margin: "0 20px",
                fontSize: "3em",
              }}
            >
              <span style={{ color: "#F78F95" }}>Assess</span> tech talent{" "}
              <span style={{ color: "#1BF0A2" }}>effectively</span> and{" "}
              <span style={{ color: "#F78F95" }}>hire</span> only the{" "}
              <span
                style={{
                  background:
                    "linear-gradient(to bottom left, #12FFA8 8%, #F78F95 85%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                best
              </span>{" "}
              with <span style={{ color: "#1BF0A2" }}>confidence</span>, using{" "}
              <span style={{ color: "#F78F95" }}>
                <span style={{ color: "#1BF0A2" }}>{"<"}</span>tide
                <span style={{ color: "#1BF0A2" }}>{">"}</span>
              </span>
            </h1>
            <p
              style={{
                fontWeight: 600,
                fontSize: 18,
                margin: 20,
              }}
            >
              Tide is a Technical Interview Development Environment to conduct
              assessments through live and asynchronous collaborative coding.
            </p>
            <button
              style={{
                background: "#F78F95",
                borderRadius: 4,
                padding: 10,
                borderWidth: 0,
                marginLeft: 20,
              }}
            >
              <b>SIGN UP FREE</b>
            </button>
          </div>
          {/* coding image */}
          <div>
            <Image
              src="/coding-screen.png"
              alt="coding screen"
              width={635}
              height={315}
              style={{ marginTop: 30 }}
            />
          </div>
        </div>
        {/* Polygon */}
      </div>
      <div
        style={{
          width: 0,
          height: 0,
          borderBottom: "100px solid #F7A88F",
          borderLeft: "100px solid transparent",
          position: "absolute",
          bottom: 0,
          right: 0,
        }}
      ></div>
      {theme === "dark" && 
      <div
      style={{
        width: 0,
        height: 0,
        borderBottom: "100px solid rgb(1, 82, 72)",
        borderRight: "100px solid transparent",
        position: "absolute",
        bottom: 0,
        left: 0,
      }}
    ></div>}
    </>
  );
}

export default Index;

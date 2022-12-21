import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./index.module.css";
import Header from "../components/layout/Header";

import { createClient } from "@supabase/supabase-js";

import { login, logout } from "../redux/actions/authActions";
import { clearErrors } from "../redux/actions/errorActions";
import { connect } from "react-redux";

const supabase = createClient(
  "https://gimixnmwbsefltaxnvsp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpbWl4bm13YnNlZmx0YXhudnNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA4MTkxMzYsImV4cCI6MTk4NjM5NTEzNn0.xNg5W4WRoLkcqO9Vc7TCa3ZG5OL7ZL6FQrUv-8Lxi7o"
);
function Index(props) {
  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    await supabase.auth.getUser().then((value) => {
      console.log("VALUE", value);
      if (value.data?.user) {
        props.login({
          full_name: value.data.user.user_metadata.full_name,
          email: value.data.user.user_metadata.email,
          role: value.data.user.role,
          picture: value.data.user.user_metadata.picture,
          email_verified: value.data.user.user_metadata.email_verified,
        });
      }
    });
  }
  return (
    <>
      {/* put background image here */}
      <div
        className={
          props.server.theme === "dark" ? styles.darkTheme : styles.whiteTheme
        }
      >
        {/* header */}

        <Header />
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
                cursor: "pointer",
            boxShadow: "0 10px 18px 0 rgb(0 0 0 / 34%",

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
      {props.server.theme === "dark" && (
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
        ></div>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  error: state.error.error,
  server: state.server,
});

export default connect(mapStateToProps, { login, logout, clearErrors })(Index);

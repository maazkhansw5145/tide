import React, { useEffect } from "react";
import styles from "./index.module.css";
import Header from "../components/layout/Header";
import CodeEditorWindow from "../components/ide-components/CodeEditorWindow";
import { createClient } from "@supabase/supabase-js";

import { login, logout } from "../redux/actions/authActions";
import { clearErrors } from "../redux/actions/errorActions";
import { connect } from "react-redux";
import url from "../config/URL";
import { toast } from "react-toastify";

import Link from "next/link";

function Index(props) {
  useEffect(() => {
    console.log(props.auth.isAuthenticated);
    if (!props.auth.isAuthenticated) {
      checkUser();
    }
  }, []);

  async function checkUser() {
    const supabase = createClient(
      "https://qubvoqsgnorlsylveylr.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1YnZvcXNnbm9ybHN5bHZleWxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI2MTI0MzIsImV4cCI6MTk4ODE4ODQzMn0.qkXX296yTZfmvtcw4cRLbR8rZRvXKlcf2u3wHjF9C2o"
    );
    await supabase.auth.getUser().then(async (value) => {
      console.log(value);
      if (value.data?.user) {
        await props.login({
          name: value.data.user.user_metadata.full_name,
          emailId: value.data.user.user_metadata.email,
          picture_url: value.data.user.user_metadata.picture,
          email_verified: value.data.user.user_metadata.email_verified,
        });
        toast.success("Logged in successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
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
                fontSize: "3.8em",
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
                fontSize: 22,
                margin: "30px 20px",
              }}
            >
              Tide is a Technical Interview Development Environment to conduct
              assessments through live and asynchronous collaborative coding.
            </p>
            {props.auth.isAuthenticated ? (
              <Link
                style={{
                  background: "#F78F95",
                  borderRadius: 4,
                  padding: 10,
                  borderWidth: 0,
                  marginLeft: 20,
                  cursor: "pointer",
                  boxShadow: "0 10px 18px 0 rgb(0 0 0 / 34%",
                }}
                href="/ide"
              >
                <b>Open IDE</b>
              </Link>
            ) : (
              <Link
                style={{
                  background: "#F78F95",
                  borderRadius: 4,
                  padding: 10,
                  borderWidth: 0,
                  marginLeft: 20,
                  cursor: "pointer",
                  boxShadow: "0 10px 18px 0 rgb(0 0 0 / 34%",
                }}
                href="/authentication/signup"
              >
                <b>SIGN UP FREE</b>
              </Link>
            )}
          </div>
          {/* coding image */}
          <div style={{ width: 635, height: 345 }}>
            <CodeEditorWindow />
            {/* <Image
              src="/coding-screen.png"
              alt="coding screen"
              width={635}
              height={315}
              style={{ marginTop: 30 }}
            /> */}
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

import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Header from "../components/layout/Header";
import CodeEditorWindow from "../components/ide-components/CodeEditorWindow";
import { createClient } from "@supabase/supabase-js";

import { login, logout } from "../redux/actions/authActions";
import { clearErrors } from "../redux/actions/errorActions";
import { connect } from "react-redux";
import url from "../config/URL";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import Link from "next/link";
import Image from "next/image";

function Index(props) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(props.auth.isAuthenticated);
    if (!props.auth.isAuthenticated) {
      checkUser();
    }
  }, []);

  async function checkUser() {
    setLoading(true);
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
        setLoading(false);
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
      } else {
        setLoading(false);
      }
    });
  }
  if (loading) {
    return <Loading />;
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

        <div style={{ display: "flex" }}>
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
                fontSize: 24,
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          {props.server.theme === "dark" ? (
            <div
              style={{
                width: 0,
                height: 0,
                borderBottom: "100px solid rgb(1, 82, 72)",
                borderRight: "100px solid transparent",
              }}
            ></div>
          ) : (
            <div></div>
          )}
          <div
            style={{
              width: 0,
              height: 0,
              borderBottom: "100px solid #F7A88F",
              borderLeft: "100px solid transparent",
            }}
          ></div>
        </div>
      </div>
      <div
        style={{
          color: "black",
          textAlign: "center",
          background: "aliceblue",
          padding: "50px 0",
        }}
      >
        <p
          style={{
            fontSize: "2.1243rem",
            margin: "30px 0",
            fontWeight: 600,
          }}
        >
          Why Tide?
        </p>
        <div style={{ maxWidth: 800, margin: "auto" }}>
          <p
            style={{
              fontWeight: 400,
              fontSize: "1.35rem",
              marginBottom: 30,
              fontFamily: "cursive",
            }}
          >
            In a collaborative code editor with strong language support, Tide
            wants to provide interviewers and candidates with a smooth interview
            experience. Without assistance from an IDE, candidates frequently
            write pseudo-code, making it challenging for interviewers to
            evaluate their coding skills.
          </p>
          <p
            style={{
              fontWeight: 400,
              fontSize: "1.35rem",
              marginBottom: 30,
              fontFamily: "cursive",
            }}
          >
            Developers use IDEs to be productive in their day-to-day work, they
            rely on features such as auto-complete and syntax checks - why
            should the coding interview be any different?
          </p>
        </div>
      </div>
      <div
        style={{
          color: "black",
          textAlign: "center",
          padding: "50px 0",
        }}
      >
        <p
          style={{
            fontSize: "2.1243rem",
            marginBottom: 50,
            fontWeight: 600,
          }}
        >
          You should choose Tide because...
        </p>
        <div
          style={{
            margin: "20px auto",

            display: "grid",
            gridRow: "auto auto",
            gridRowGap: 20,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#333",
              padding: 20,
              borderRadius: 10,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              width:700,
              fontFamily: "sans-serif",
              boxShadow:
                "rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;",
              marginRight: 20,
            }}
          >
            <div>
              <p style={{ fontSize: 24 }}>Easy to use</p>
              <p style={{ fontSize: 20, margin: 20 }}>
                Tide is the most easy to use platform for recruiting programmers
              </p>
            </div>
          </div>
          <div
            style={{
              background: "#333",
              padding: 20,
              borderRadius: 10,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontFamily: "sans-serif",
              gridColumnGap: 20,
              width:700,

              boxShadow:
                "rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;",
            }}
          >
            <div>
              <p style={{ fontSize: 24 }}>Support for languages</p>
              <p style={{ fontSize: 20, margin: 20 }}>
                Tides IDE supports almost all of the languages
              </p>
            </div>
          </div>
          <div
            style={{
              background: "#333",
              padding: 20,
              borderRadius: 10,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontFamily: "sans-serif",
              width:700,

              boxShadow:
                "rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;",
              marginRight: 20,
            }}
          >
            <div>
              <p style={{ fontSize: 24 }}>Low cost</p>
              <p style={{ fontSize: 20, margin: 20 }}>
                You can start with just 25$/month as a small enterprise company
              </p>
            </div>
          </div>
          <div
            style={{
              background: "#333",
              padding: 20,
              borderRadius: 10,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontFamily: "sans-serif",
              width:700,

              boxShadow:
                "rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;",
              // marginLeft: 20,
            }}
          >
            <div>
              <p style={{ fontSize: 24 }}>Reliable</p>
              <p style={{ fontSize: 20, margin: 20 }}>
                If you are looking for a skill full programmer, invite them to
                tide for test
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{padding:"20px 50px",background:'black',display:'flex',justifyContent:'space-between'}}>
            <p style={{fontSize:20,alignItems:'center'}}>&#169; &nbsp;Tide @ 2023</p>
            <Link href="/">
        <Image src="/logo-tide.png" alt="logo" width={132} height={52} />
      </Link>
      </div>

    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  error: state.error.error,
  server: state.server,
});

export default connect(mapStateToProps, { login, logout, clearErrors })(Index);

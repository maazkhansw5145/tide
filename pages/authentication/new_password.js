import React, { useState, useEffect } from "react";
import Link from "next/link";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { createClient } from "@supabase/supabase-js";
import { toast } from "react-toastify";

const supabase = createClient(
  "https://qubvoqsgnorlsylveylr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1YnZvcXNnbm9ybHN5bHZleWxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI2MTI0MzIsImV4cCI6MTk4ODE4ODQzMn0.qkXX296yTZfmvtcw4cRLbR8rZRvXKlcf2u3wHjF9C2o"
);
function NewPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(false);
  const [working, setWorking] = useState(false);
  const [success, setSuccess] = useState(false);

  const changePassword = () => {
    setWorking(true);
    supabase.auth
      .updateUser({
        password: newPassword,
      })
      .then(() => {
        setSuccess(true);
        toast.success("Password Changes Successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch((e) => {
        toast.error("Oops! Failed to change password", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
    // }
  };

  return (
    <div>
      <div
        className="title"
        style={{
          display: "flex",
          background: "#3e3535",
        }}
      >
        <h3 style={{ margin: "20px auto",fontSize:22 }}>Tide</h3>
        <div
          style={{ borderLeft: "1px solid black", height: 65, marginRight: 15 }}
        ></div>

        <div style={{ margin: "auto 0" }}>
          <Link
            href="/"
            style={{
              fontWeight: 500,
              fontSize: 16,
            }}
          >
            Home Page
          </Link>
        </div>
        <div
          style={{
            borderLeft: "1px solid black",
            height: 65,
            margin: "0 15px",
          }}
        ></div>
      </div>
      <div style={{  margin: "auto" }}>
        {!success ? (
          <div style={{width:'50%',margin:'auto'}}>
            <div style={{ margin: "35px 0" }}>
              <label style={{ color: "black" }}>New Password</label>
              <input
                type="password"
                placeholder="New password"
                onChange={(e) => {
                  if (error) {
                    setError(false);
                  }
                  setNewPassword(e.target.value);
                }}
                style={{ width: "100%", margin: "10px 0", padding: 10 }}
                onBlur={() => {
                  if (newPassword.length < 8) {
                    setError("Password should've at least 8 characters");
                  }
                }}
              />
            </div>
            {error && (
              <div>
                <p
                  style={{
                    width: "100%",
                    background: "#f2dddd",
                    borderRadius: 15,
                    padding: 10,
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    border: "1px solid red",
                    color: "black",
                    marginBottom:15,
                    alignItems:'center'

                  }}
                >
                  <ErrorOutlineIcon style={{ marginRight: 15 }} />
                  {error}
                </p>
              </div>
            )}
            <button
              style={{
                background: newPassword.length < 8 ? "gray" : "#3e3535",
                width: "100%",
                color: "white",
                padding: 15,
                boxShadow: "0 10px 18px 0 rgb(0 0 0 / 34%",
                borderWidth: 0,
                cursor: working || newPassword.length < 8 ? "" : "pointer",
              }}
              onClick={() => {
                changePassword();
              }}
              disabled={working || newPassword.length < 8}
            >
              {working ? "Working..." : "Change Password"}
            </button>
          </div>
        ) : (
          <div>
            <div
              style={{
                margin: 80,
                textAlign: "center",
                color: "black",
                background: "aliceblue",
                borderRadius: 42,
                padding: 40,
              }}
            >
              <h2 style={{ color: "lightseagreen",fontSize:28,marginBottom:40 }}>
                Password changes Successfully!
              </h2>
              <h4 style={{ fontStyle: "italic", margin:'20px 0',fontSize:19}}>
                You can now go back to the
                <span style={{ color: "cornflowerblue" }}> Login </span>
                page and log yourself in with the
                <span style={{ color: "cornflowerblue" }}> new password.</span>
                &nbsp;
              </h4>
              <div
                style={{
                  margin: "60px 0 30px 0",
                }}
              >
                <Link
                  href="/authentication/login"
                  style={{
                    padding: "15px 30px",
                    fontSize: 16,
                    color: "white",
                    background: "rgb(62, 53, 53)",
                    boxShadow: "0 10px 18px 0 rgb(0 0 0 / 34%",
                    borderRadius: 15,
                  }}
                >
                  &larr; Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewPassword;

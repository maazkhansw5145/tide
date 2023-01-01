import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { toast } from "react-toastify";

const supabase = createClient(
  "https://qubvoqsgnorlsylveylr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1YnZvcXNnbm9ybHN5bHZleWxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI2MTI0MzIsImV4cCI6MTk4ODE4ODQzMn0.qkXX296yTZfmvtcw4cRLbR8rZRvXKlcf2u3wHjF9C2o"
);

function Signup() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [logging, setLogging] = useState(false);

  const signup = () => {
    setLogging(true);
    supabase.auth
      .signUp({
        email,
        password,
      })
      .then((res) => {
        console.log(res)
        if (res.error?.status === 422) {
          setError("Enter valid email id, please!");
        } else {
          setEmailSent(true);
          setLoading(false);
          toast.success("Verification Email Send", {
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
        setLogging(false);
      })
      .catch(() => {
        toast.error("Ooops! Error: Failed to signup", {
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
  };

  return (
    <div>
      <div
        className="title"
        style={{
          display: "flex",
          marginBottom: "45px",
          justifyContent: "center",
          background: "#3e3535",
          color: "white",
        }}
      >
        <Link href="/">
        <h3>Tide</h3>
        </Link>
      </div>

      <div style={{ width: "50%", margin: "auto" }}>
        {emailSent ? (
          <div
            style={{
              padding: 30,
              background: "#e5eef6",
              borderRadius: 60,
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "black",
                fontSize: 22,
                textAlign: "center",
                marginBottom: 60,
              }}
            >
              Verification email has sent. Please! check your{" "}
              <span style={{ color: "#DB4437" }}>inbox</span> and click on
              <span style={{ color: "blue" }}> verify</span>.
            </p>
            <div style={{ marginBottom: 12 }}>
              <Link
                href="/authentication/login"
                style={{
                  padding: "12px 35px",
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
        ) : (
          <>
            <div style={{ margin: "15px 0" }}>
              <label style={{ color: "black" }}>Email Address</label>
              <input
                type="email"
                placeholder="Your email address"
                onChange={(e) => {
                  if (error) {
                    setError(false);
                  }
                  setEmail(e.target.value);
                }}
                style={{ width: "100%", margin: "10px 0", padding: 10 }}
                onBlur={() => {
                  if (!email.includes("@")) {
                    setError("Invalid Email Id");
                  }
                }}
              />
            </div>
            <div style={{ margin: "15px 0" }}>
              <label style={{ color: "black" }}>Your Password</label>
              <input
                type="password"
                placeholder="Your password"
                onChange={(e) => {
                  if (error) {
                    setError(false);
                  }
                  setPassword(e.target.value);
                }}
                style={{ width: "100%", margin: "10px 0", padding: 10 }}
                onBlur={() => {
                  if (password.length < 8) {
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
                    borderRadius: 15,
                    padding: 10,
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    border: "1px solid red",
                    background: "#f2dddd",
                    color: "black",
                  }}
                >
                  <ErrorOutlineIcon style={{ marginRight: 15 }} />
                  {error}
                </p>
              </div>
            )}
            <button
              style={{
                background:
                  password.length < 8 || !email.includes("@")
                    ? "gray"
                    : "#3e3535",
                width: "100%",
                color: "white",
                padding: 15,
                borderWidth: 0,
                boxShadow: "0 10px 18px 0 rgb(0 0 0 / 34%",

                cursor:
                  logging || password.length < 8 || !email.includes("@")
                    ? ""
                    : "pointer",
              }}
              onClick={() => {
                if (error) {
                  setError(false);
                }
                signup();
              }}
              disabled={logging || password.length < 6 || email.length < 6}
            >
              {logging ? "Working..." : "Sign Up"}
            </button>

            <div
              style={{
                marginTop: 25,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link
                href="/authentication/login"
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  color: "rgb(62, 53, 53)",
                }}
              >
                Already have an account?{" "}
                <span style={{ color: "blueviolet" }}>Login</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Signup;

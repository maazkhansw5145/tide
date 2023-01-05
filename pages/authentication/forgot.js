import React, { useState } from "react";

import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { toast } from "react-toastify";

const supabase = createClient(
  "https://qubvoqsgnorlsylveylr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1YnZvcXNnbm9ybHN5bHZleWxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI2MTI0MzIsImV4cCI6MTk4ODE4ODQzMn0.qkXX296yTZfmvtcw4cRLbR8rZRvXKlcf2u3wHjF9C2o"
);
function Forgot(props) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(true);

  const resetPassword = () => {
    supabase.auth
      .resetPasswordForEmail(email, {
        redirectTo: "http://localhost:3000/authentication/new_password",
      })
      .then((res) => {
        setLoading(false);
        if (res?.error) {
          setError("Invalid email id");
        } else {
          setDone(true);
          toast.success("Password Reset Link Sent Successfully via Email", {
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
        // if (res.data?.user) {
        //   setLoading(true);
        //   props.login({
        //     email: res.data.user.email,
        //     role: res.data.user.role,
        //   });
        // }
      })
      .catch(() => {
        toast.error("Ooops! Failed to reset password", {
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
          padding:'20px 0'

        }}
      >
        <h3 style={{fontSize:22}}>Tide</h3>
      </div>
      {done ? (
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
            Password Reset Link Sent Successfully!
          </h2>
          <h4 style={{margin:'20px 0',fontSize:19}}>
            Kindly, open your inbox then open then email from{" "}
            <span style={{ color: "cornflowerblue", fontStyle: "italic" }}>
              noreply@mail.app.supabase.io
            </span>{" "}
            and click on &nbsp;
            <span style={{ color: "cornflowerblue", fontStyle: "italic" }}>
              Reset Password
            </span>
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
              &larr; &nbsp; Login
            </Link>
          </div>
        </div>
      ) : (
        <div style={{ width: "50%", margin: "auto" }}>
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
          {error && (
            <div>
              <p
                style={{
                  width: "100%",
                  border: "1px solid red",
                  background: "#f2dddd",
                  color: "black",
                  borderRadius: 15,
                  padding: 10,
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
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
              background: !email.includes("@") || loading ? "gray" : "#3e3535",
              width: "100%",
              color: "white",
              padding: 15,
              borderWidth: 0,
              cursor: !email.includes("@") || loading ? "" : "pointer",
              boxShadow: "0 10px 18px 0 rgb(0 0 0 / 34%",
            }}
            onClick={() => {
              resetPassword();
              setLoading(true);
            }}
            disabled={!email.includes("@") || loading}
          >
            {!loading ? "Reset Password" : "Working..."}
          </button>

          <div
            style={{ display: "flex", justifyContent: "end", marginTop: 26 }}
          >
            <Link
              href="/authentication/login"
              style={{
                fontWeight: 500,
                fontSize: 16,
                color: "cornflowerblue",
                fontStyle: "italic",
              }}
            >
              &larr; Back to login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Forgot;

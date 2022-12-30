import React, { useState, useEffect } from "react";
import Link from "next/link";
import { login, clearAuthMsg } from "../../redux/actions/authActions";
import Loading from "../../components/Loading";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import GoogleIcon from "@mui/icons-material/Google";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { createClient } from "@supabase/supabase-js";
import { toast } from "react-toastify";
import url from "../../config/URL";

const supabase = createClient(
  "https://gimixnmwbsefltaxnvsp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpbWl4bm13YnNlZmx0YXhudnNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA4MTkxMzYsImV4cCI6MTk4NjM5NTEzNn0.xNg5W4WRoLkcqO9Vc7TCa3ZG5OL7ZL6FQrUv-8Lxi7o"
);

function Login(props) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [logging, setLogging] = useState(false);

  const [error, setError] = useState(false);
  const router = useRouter();
  useEffect(() => {
    console.log(props.auth)
    if (props.auth.msg === "Login Successfully") {
      // toast.success("Logged in successfully", {
      //   position: "top-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "colored",
      // });
      router.push("/");
    } else if(props.auth.msg === "Login Fails"){
      setLoading(false);
      setLogging(false);
    }
  }, [props.auth.msg]);

  const loginWithPassword = () => {
    setLogging(true);
    supabase.auth
      .signInWithPassword({
        email,
        password,
      })
      .then((res) => {
        if (res.error?.status === 400) {
          setError("Invalid login credentials");
        }
        if (res.data?.user) {
          setLoading(true);
          props.login({
            emailId: res.data.user.email,
            userId: res.data.user.id,
            email_verified: true
          });
        }
        setLogging(false);
      });
  };

  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div
        className="title"
        style={{
          display: "flex",
          background: "#3e3535",
        }}
      >
        <h3 style={{ margin: "20px auto" }}>Tide</h3>
        <div style={{ borderLeft: "1px solid black", height: 65,marginRight:15 }}></div>

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
        <div style={{ borderLeft: "1px solid black", height: 65,margin:"0 15px" }}></div>

      </div>
      <button onClick={() =>{
        fetch(`${url}/api/hello`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }).then((res) => console.log(res)).catch((e) => console.log(e))
      }}>Check api</button>
      <div style={{ width: "50%", margin: "auto" }}>
        <div style={{ margin: "40px 0 20px 0" }}>
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              background: "#DB4437",
              width: "100%",
              alignItems: "center",
              borderRadius: 18,
              cursor: "pointer",
              borderWidth: 0,
            }}
            onClick={() => loginWithGoogle()}
          >
            <GoogleIcon style={{ color: "white", fontSize: 28 }} />
            <p style={{ marginLeft: 15, fontSize: 18, color: "white" }}>
              Login With Google
            </p>
          </button>
        </div>
        <hr />
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
                background: "#f2dddd",
                borderRadius: 15,
                padding: 10,
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                border: "1px solid red",
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
              password.length < 8 || !email.includes("@") ? "gray" : "#3e3535",
            width: "100%",
            color: "white",
            padding: 15,
            boxShadow: "0 10px 18px 0 rgb(0 0 0 / 34%",
            borderWidth: 0,
            cursor:
              logging || password.length < 8 || !email.includes("@")
                ? ""
                : "pointer",
          }}
          onClick={() => {
            if (error) {
              setError(false);
            }
            loginWithPassword();
          }}
          disabled={logging || password.length < 8 || !email.includes("@")}
        >
          {logging ? "Working..." : "Log in"}
        </button>
        <div style={{ marginTop: 20, display: "flex", justifyContent: "end" }}>
          <Link
            href="/authentication/forgot"
            style={{
              fontWeight: 500,
              fontSize: 16,
              color: "darkslategrey",
              fontStyle: "italic",
            }}
          >
            Forgot Password
          </Link>
        </div>

        <div
          style={{ marginTop: 20, display: "flex", justifyContent: "center" }}
        >
          <Link
            href="/authentication/signup"
            style={{
              fontWeight: 500,
              fontSize: 16,
              color: "rgb(62, 53, 53)",
            }}
          >
            Not signed up yet? <span style={{color:'blueviolet'}}>Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  error: state.error.error,
});

export default connect(mapStateToProps, { login, clearAuthMsg })(Login);

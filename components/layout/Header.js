import React from "react";
import Link from "next/link";
import Image from "next/image";
import DarkModeToggleButton from "../DarkModeToggleButton";
import { connect } from "react-redux";
import { changeTheme } from "../../redux/actions/serverActions";
import { logout } from "../../redux/actions/authActions";
import { useRouter } from "next/router";
import { createClient } from "@supabase/supabase-js";
function Header(props) {
  const router = useRouter();
  const supabase = createClient(
    "https://qubvoqsgnorlsylveylr.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1YnZvcXNnbm9ybHN5bHZleWxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI2MTI0MzIsImV4cCI6MTk4ODE4ODQzMn0.qkXX296yTZfmvtcw4cRLbR8rZRvXKlcf2u3wHjF9C2o"
  );
  const logout = async () => {
    await supabase.auth.signOut();
    props.logout();
  };
  return (
    <div
      style={{
        display: "flex",
        margin: "20px 40px 0 30px",
        justifyContent: "space-between",
      }}
    >
      {/* logo */}
      <Link href="/">
        <Image src="/logo-tide.png" alt="logo" width={132} height={32} />
      </Link>
      <div style={{ marginLeft: "auto" }}>
        <DarkModeToggleButton
          theme={props.server.theme}
          setTheme={props.changeTheme}
        />
      </div>
      {/* right side <a> tags */}
      <div style={{ display: "flex", alignItems: "center", color: "inherit" }}>
        {router.pathname === "/" &&
          props.auth.isAuthenticated &&
          props.auth.user?.premium && (
            <Link
              href="/ide"
              style={{
                fontWeight: 500,
                fontSize: 16,
                marginRight: 40,
              }}
            >
              IDE
            </Link>
          )}
        {router.pathname !== "/" && (
          <Link
            href="/"
            style={{
              fontWeight: 500,
              fontSize: 16,
              marginRight: 40,
            }}
          >
            Home Page
          </Link>
        )}
        {!props.auth.user?.premium && router.pathname !== "/payment" && (
          <Link
            href="/payment"
            style={{
              fontWeight: 500,
              fontSize: 16,
              marginRight: 40,
            }}
          >
            Features
          </Link>
        )}
        {!props.auth.isAuthenticated ? (
          <>
            <Link
              href="/authentication/login"
              style={{
                fontWeight: 500,
                fontSize: 16,
                marginRight: 20,
              }}
            >
              Login
            </Link>

            <div
              style={{
                borderLeft: "1px solid #1BF0A2",
                height: 35,
                marginRight: 12,
              }}
            ></div>

            <Link
              href="/authentication/auth_select"
              style={{
                fontWeight: 500,
                fontSize: 16,
                marginRight: 15,
              }}
            >
              sign up
            </Link>

            <div style={{ borderLeft: "1px solid #1BF0A2", height: 35 }}></div>
          </>
        ) : (
          <>
            <div
              style={{
                borderLeft: "1px solid #1BF0A2",
                height: 35,
                marginRight: 12,
              }}
            ></div>
            <button
              onClick={() => logout()}
              style={{
                fontWeight: 500,
                fontSize: 16,
                marginRight: 20,
                background: "inherit",
                color: "inherit",
                borderWidth: 0,
                cursor: "pointer",
              }}
            >
              Log out
            </button>
            <div style={{ borderLeft: "1px solid #1BF0A2", height: 35 }}></div>
          </>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  error: state.error.error,
  server: state.server,
});

export default connect(mapStateToProps, { changeTheme, logout })(Header);

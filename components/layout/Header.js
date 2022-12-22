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
    "https://gimixnmwbsefltaxnvsp.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpbWl4bm13YnNlZmx0YXhudnNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA4MTkxMzYsImV4cCI6MTk4NjM5NTEzNn0.xNg5W4WRoLkcqO9Vc7TCa3ZG5OL7ZL6FQrUv-8Lxi7o"
  );
  const logout = () => {
    supabase.auth.signOut();

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
      <div>
        <Image src="/logo-tide.png" alt="logo" width={132} height={32} />
      </div>
      <DarkModeToggleButton
        theme={props.server.theme}
        setTheme={props.changeTheme}
      />
      {/* right side <a> tags */}
      <div style={{ display: "flex", alignItems: "center", color: "inherit" }}>
        {router.pathname === "/" && props.auth.isAuthenticated && (
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
        {!props.auth.isAuthenticated ? (
          <>
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

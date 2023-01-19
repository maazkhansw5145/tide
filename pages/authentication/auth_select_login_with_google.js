import React from "react";
import { Box, boxDefault } from "@mui/system";
import { Button } from "@mui/material";
import Link from "next/link";
import { connect } from "react-redux";
import { selectUserType } from "../../redux/actions/authActions";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://qubvoqsgnorlsylveylr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1YnZvcXNnbm9ybHN5bHZleWxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI2MTI0MzIsImV4cCI6MTk4ODE4ODQzMn0.qkXX296yTZfmvtcw4cRLbR8rZRvXKlcf2u3wHjF9C2o"
);

const AuthSelect = (props) => {
  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };
  return (
    <>
      <div
        className="title"
        style={{
          display: "flex",
          background: "#3e3535",
        }}
      >
        <h3 style={{ margin: "20px auto", fontSize: 22 }}>Tide</h3>
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
      <Box
        m={4}
        //margin
        display="grid"
        justifyContent="center"
        alignItems="column"
        sx={boxDefault}
      >
        <Button
          onClick={() => {
            props.selectUserType("company");
            loginWithGoogle();
          }}
          value="company"
          variant="contained"
          color="secondary"
          sx={{ marginTop: 15, borderRadius: 8, height: 60, width: 460 }}
        >
          Login as a company
        </Button>

        <Button
          onClick={() => {
            props.selectUserType("programmer");
            loginWithGoogle();
          }}
          value="dev"
          variant="contained"
          color="primary"
          sx={{ marginTop: 5, borderRadius: 8, height: 60, width: 460 }}
        >
          Login as a programmer
        </Button>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  error: state.error.error,
});

export default connect(mapStateToProps, { selectUserType })(AuthSelect);

import React from "react";
import { Box, boxDefault } from "@mui/system";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { selectUserType } from "../../redux/actions/authActions";
const AuthSelect = (props) => {
  const navigation = useRouter();

  const navigateAsCompany = () => {
    navigation.push({
      pathname: "/authentication/signup",
    });
  };

  const navigateAsDev = () => {
    navigation.push({
      pathname: "/authentication/signup",
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
        m={10}
        //margin
        display="grid"
        justifyContent="center"
        alignItems="column"
        sx={boxDefault}
      >
        <Link href="/authentication/signup">
          <Button
            onClick={() => {
              props.selectUserType("company");
            }}
            value="company"
            variant="contained"
            color="secondary"
            sx={{ marginTop: 15, borderRadius: 8, height: 60, width: 460 }}
          >
            Register as a Company
          </Button>
        </Link>
        <Link href="/authentication/signup">
          <Button
            onClick={() => {
              props.selectUserType("programmer");
            }}
            value="dev"
            variant="contained"
            color="primary"
            sx={{ marginTop: 5, borderRadius: 8, height: 60, width: 460 }}
          >
            Register as a Developer
          </Button>
        </Link>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  error: state.error.error,
});

export default connect(mapStateToProps, { selectUserType })(AuthSelect);

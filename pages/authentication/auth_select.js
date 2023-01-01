import React from "react";
import { Box, boxDefault } from "@mui/system";
import { Button } from "@mui/material";
import Link from "next/link";

const AuthSelect = () => {
  return (
    <>
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
      <Box
        m={10}
        //margin
        display="grid"
        justifyContent="center"
        alignItems="column"
        sx={boxDefault}
      >
        <Link href="/authentication/signup">
        <Button variant="contained" color="secondary" sx={{marginTop:15, borderRadius:8, height: 60, width: 460 }}>
          Register as a Company
        </Button>
        </Link>
        <Link href="/authentication/signup">
        <Button variant="contained" color="primary" sx={{marginTop:5, borderRadius:8, height: 60, width: 460 }}>
          Register as a Developer
        </Button>
        </Link>
      </Box>
    </>
  );
};

export default AuthSelect;
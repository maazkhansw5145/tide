import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import PinchIcon from "@mui/icons-material/Pinch";
import CodeIcon from "@mui/icons-material/Code";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GppGoodIcon from "@mui/icons-material/GppGood";
function Features(props) {
  return (
    <div
      style={{
        padding: "50px 0",
        background: props.theme === "white" ? "white" : "#3e3535",
      }}
    >
      <p
        style={{
          fontSize: "2.1243rem",
          fontWeight: 600,
          color: props.theme === "white" ? "black" : "white",

          textAlign: "center",
        }}
      >
        Tide Gives You...
      </p>
      <hr
        style={{
          width: 150,
          margin: "0 auto 20px auto",
          borderTop: "2px solid brown",
          marginBottom: 50,
        }}
      />
      <Box sx={{ color: "black", margin: "0 20px" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={12} md={6}>
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
                boxShadow:
                  "rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;",
              }}
            >
              <div style={{ display: "flex" }}>
                <PinchIcon style={{ fontSize: 40 }} />
                <div style={{ marginLeft: 10 }}>
                  <p style={{ fontSize: 24, padding: "0 20px" }}>Easy to use</p>
                  <p style={{ fontSize: 20, padding: 20 }}>
                    Tide is the most easy to use platform for recruiting
                    programmers.
                  </p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
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

                boxShadow:
                  "rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;",
              }}
            >
              <div style={{ display: "flex" }}>
                <CodeIcon style={{ fontSize: 40 }} />
                <div style={{ marginLeft: 10 }}>
                  <p style={{ fontSize: 24, padding: "0 20px" }}>
                    Support for languages
                  </p>
                  <p style={{ fontSize: 20, padding: 20 }}>
                    Tides IDE supports almost all of the languages and provide
                    complete support.
                  </p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
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

                boxShadow:
                  "rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;",
              }}
            >
              <div style={{ display: "flex" }}>
                <AttachMoneyIcon style={{ fontSize: 40 }} />
                <div style={{ marginLeft: 10 }}>
                  <p style={{ fontSize: 24, padding: "0 20px" }}>Low Cost</p>
                  <p style={{ fontSize: 20, padding: 20 }}>
                    You can start with just 25$/month as a small enterprise
                    company.
                  </p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
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

                boxShadow:
                  "rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;",
              }}
            >
              <div style={{ display: "flex" }}>
                <GppGoodIcon style={{ fontSize: 40 }} />
                <div style={{ marginLeft: 10 }}>
                  <p style={{ fontSize: 24, padding: "0 20px" }}>Reliable</p>
                  <p style={{ fontSize: 20, padding: 20 }}>
                    If you are looking for a skill full programmer, invite them
                    to tide for test.
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Features;

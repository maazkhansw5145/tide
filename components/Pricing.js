import React, { useEffect, useState } from "react";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
function Pricing(props) {
  return (
    <div>
      <h2
        style={{
          fontSize: 32,
          textAlign: "center",
          marginBottom: 10,
          color: "black",
          fontWeight:600
        }}
      >
        Our Pricing Plans
      </h2>
      <hr
        style={{
          width: 150,
          margin: "0 auto 20px auto",
          borderTop: "2px solid brown",
        }}
      />
      <Box sx={{ color: "black", margin: "0 20px" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={12} md={4}>
            <div
              style={{
                // float: "left",
                // width: props.windowWidth > 600 ? "33.3%" : "100%",
                padding: 8,
              }}
            >
              <ul
                style={{
                  listStyleType: "none",
                  border: "1px solid #eee",
                  margin: 0,
                  padding: 0,
                  webkitTransition: "0.3s",
                  transition: "0.3s",
                }}
              >
                <li
                  style={{
                    background: "black",
                    color: "white",
                    fontSize: 25,
                    borderBottom: "1px solid #eee",
                    padding: 20,
                    textAlign: "center",
                  }}
                >
                  Small-Medium Enterprises
                </li>
                <li
                  style={{
                    background: "#eee",
                    fontSize: 20,
                    borderBottom: "1px solid #eee",
                    padding: 20,
                    textAlign: "center",
                  }}
                >
                  $ 50 / Monthly
                </li>
                <li
                  style={{
                    borderBottom: "1px solid #eee",
                    padding: 20,
                    textAlign: "center",
                  }}
                >
                  Limited Invites
                </li>
                <li
                  style={{
                    borderBottom: "1px solid #eee",
                    padding: 20,
                    textAlign: "center",
                  }}
                >
                  IDE With Majority Languages Support
                </li>
                <li
                  style={{
                    borderBottom: "1px solid #eee",
                    padding: 20,
                    textAlign: "center",
                  }}
                >
                  Test Result Card
                </li>
                <li
                  style={{
                    borderBottom: "1px solid #eee",
                    padding: 20,
                    textAlign: "center",
                  }}
                >
                  One Month Limit
                </li>
                <li
                  style={{
                    background: "#eee",
                    fontSize: 20,
                    borderBottom: "1px solid #eee",
                    padding: 20,
                    textAlign: "center",
                  }}
                >
                  <Link
                    style={{
                      background: "#F78F95",
                      borderRadius: 4,
                      padding: 10,
                      borderWidth: 0,
                      marginLeft: 20,
                      cursor: "pointer",
                      boxShadow: "0 0 4px 0 rgb(0 0 0 / 10%",
                      color: "white",
                    }}
                    href="/payment"
                  >
                    Purchase
                  </Link>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div
              style={{
                // float: "left",
                // width: props.windowWidth > 600 ? "33.3%" : "100%",
                padding: 8,
              }}
            >
              <ul
                style={{
                  listStyleType: "none",
                  border: "1px solid #eee",
                  margin: 0,
                  padding: 0,
                  webkitTransition: "0.3s",
                  transition: "0.3s",
                }}
              >
                <li
                  style={{
                    backgroundColor: "brown",
                    background: "#111",
                    color: "white",
                    fontSize: 25,
                    borderBottom: "1px solid #eee",
                    padding: 20,
                    textAlign: "center",
                  }}
                >
                  Pro - Life Time
                </li>
                <li
                  style={{
                    background: "#eee",
                    fontSize: 20,
                    borderBottom: "1px solid #eee",
                    padding: 20,
                    textAlign: "center",
                  }}
                >
                  $ 1500 / Life Time
                </li>
                <li
                  style={{
                    borderBottom: "1px solid #eee",
                    padding: 20,
                    textAlign: "center",
                  }}
                >
                  Unlimited Invites
                </li>
                <li
                  style={{
                    borderBottom: "1px solid #eee",
                    padding: 20,
                    textAlign: "center",
                  }}
                >
                  IDE With Majority Languages Support
                </li>
                <li
                  style={{
                    borderBottom: "1px solid #eee",
                    padding: 20,
                    textAlign: "center",
                  }}
                >
                  Test Result Card
                </li>
                <li
                  style={{
                    borderBottom: "1px solid #eee",
                    padding: 20,
                    textAlign: "center",
                  }}
                >
                  No Expiry
                </li>
                <li
                  style={{
                    background: "#eee",
                    fontSize: 20,
                    borderBottom: "1px solid #eee",
                    padding: 20,
                    textAlign: "center",
                  }}
                >
                  <Link
                    style={{
                      background: "#F78F95",
                      borderRadius: 4,
                      padding: 10,
                      borderWidth: 0,
                      marginLeft: 20,
                      cursor: "pointer",
                      boxShadow: "0 0 4px 0 rgb(0 0 0 / 34%",
                      color: "white",
                    }}
                    href="/payment"
                  >
                    Purchase
                  </Link>
                </li>
              </ul>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <div
              style={{
                // float: "left",
                // width: props.windowWidth > 600 ? "33.3%" : "100%",
                padding: 8,
              }}
            >
              <ul
                style={{
                  listStyleType: "none",
                  border: "1px solid #eee",
                  margin: 0,
                  padding: 0,
                  webkitTransition: "0.3s",
                  transition: "0.3s",
                }}
              >
                <li
                  style={{
                    background: "#111",
                    color: "white",
                    fontSize: 25,
                    borderBottom: "1px solid #eee",
                    padding: 20,
                    textAlign: "center",
                  }}
                >
                  Super Monthly
                </li>
                <li
                  style={{
                    background: "#eee",
                    fontSize: 20,
                    borderBottom: "1px solid #eee",
                    padding: 20,
                    textAlign: "center",
                  }}
                >
                  $ 150 / Monthly
                </li>
                <li
                  style={{
                    borderBottom: "1px solid #eee",
                    padding: 20,
                    textAlign: "center",
                  }}
                >
                  Unlimited Invites
                </li>
                <li
                  style={{
                    borderBottom: "1px solid #eee",
                    padding: 20,
                    textAlign: "center",
                  }}
                >
                  IDE With Majority Languages Support
                </li>
                <li
                  style={{
                    borderBottom: "1px solid #eee",
                    padding: 20,
                    textAlign: "center",
                  }}
                >
                  Test Result Card
                </li>
                <li
                  style={{
                    borderBottom: "1px solid #eee",
                    padding: 20,
                    textAlign: "center",
                  }}
                >
                  One Month Limit
                </li>
                <li
                  style={{
                    background: "#eee",
                    fontSize: 20,
                    borderBottom: "1px solid #eee",
                    padding: 20,
                    textAlign: "center",
                  }}
                >
                  <Link
                    style={{
                      background: "#F78F95",
                      borderRadius: 4,
                      padding: 10,
                      borderWidth: 0,
                      marginLeft: 20,
                      cursor: "pointer",
                      boxShadow: "0 0 4px 0 rgb(0 0 0 / 34%",
                      color: "white",
                    }}
                    href="/payment"
                  >
                    Purchase
                  </Link>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Pricing;

import React, { useEffect } from "react";
import Header from "../../components/layout/Header";
import styles from "../index.module.css";
import { connect } from "react-redux";
import Link from "next/link";

function Index(props) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/pricing-table.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className={
        props.server.theme === "dark" ? styles.darkTheme : styles.whiteTheme
      }
      style={{ width: "100%", height: "100%" }}
    >
      <Header />
      {/* {!props.auth.isAuthenticated ? (
        <div
        style={{
          padding: 30,
          background: "#e5eef6",
          borderRadius: 60,
          textAlign: "center",
          width:'60%',
          margin:'100px auto 0 auto'
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
          You need to
          <span style={{ color: "#DB4437" }}> login</span> first to view 
          the <span style={{ color: "#DB4437" }}> premium plans </span>. Click on the
          <span style={{ color: "cornflowerblue" }}> button </span>below to login.
        </p>
        <div
          style={{
            marginBottom: 12,
            display: "flex",
            justifyContent: "space-around",
          }}
        >
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
            Login
          </Link>
        </div>
      </div>
      ) : ( */}
        <div style={{marginTop:20}}>
        <stripe-pricing-table
          pricing-table-id="prctbl_1MJIrhCK03JH8k6TCRP8OfXv"
          publishable-key="pk_test_51MCwf9CK03JH8k6TnsHKf6GPg7RbNsRwQmC1BPZaf9lGnfU21noTBCWuTFWuGB07dCj4lcOCOBxsk5fDIKUGdiFL00Rtu5NK42"
          ></stripe-pricing-table>
          </div>
      {/* )} */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  server: state.server,
});

export default connect(mapStateToProps)(Index);

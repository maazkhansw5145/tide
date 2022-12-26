import React, { useEffect } from "react";
import Header from "../../components/layout/Header";
import styles from "../index.module.css";
import { connect } from "react-redux";

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
      style={{ width: "100%", height: "auto" }}
    >
      <Header />
      <stripe-pricing-table
        pricing-table-id="prctbl_1MJIrhCK03JH8k6TCRP8OfXv"
        publishable-key="pk_test_51MCwf9CK03JH8k6TnsHKf6GPg7RbNsRwQmC1BPZaf9lGnfU21noTBCWuTFWuGB07dCj4lcOCOBxsk5fDIKUGdiFL00Rtu5NK42"
      ></stripe-pricing-table>
    </div>
  );
}

const mapStateToProps = (state) => ({
  server: state.server,
});

export default connect(mapStateToProps)(Index);

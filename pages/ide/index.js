import React, { useEffect } from "react";
import Header from "../../components/layout/Header";
import styles from "../index.module.css";
import { connect } from "react-redux";
import { useRouter } from "next/router";
<<<<<<< HEAD
import Landing from "../../components/ide-components/Landing";
=======
// import Landing from "../../components/ide/Landing";
>>>>>>> 41a0406a8216a0e66f725a63559829e2302a3e78
function Ide(props) {
  const router = useRouter();
  useEffect(() => {
    if (!props.auth.isAuthenticated) {
      router.push("/");
    }
  }, [props.auth.isAuthenticated]);

  return (
    <div
      className={
        props.server.theme === "dark" ? styles.darkTheme : styles.whiteTheme
      }
      style={{ width: "100%" }}
    >
      <Header />
<<<<<<< HEAD
      <Landing />
=======
      {/* <Landing /> */}
>>>>>>> 41a0406a8216a0e66f725a63559829e2302a3e78
    </div>
  );
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  server: state.server,
});

export default connect(mapStateToProps)(Ide);

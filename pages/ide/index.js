import React, { useEffect, useState } from "react";
import Header from "../../components/layout/Header";
import styles from "../index.module.css";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import Landing from "../../components/ide-components/Landing";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Ide(props) {
  const [code, setCode] = useState("");
  const link = window.location.href;
  const router = useRouter();
  const question = router.query.value;
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!props.auth.isAuthenticated) {
      router.push("/authentication/login");
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
      <h2 style={{ padding: "30px" }}>
        Your Question to solve:{" "}
        <span style={{ color: "blueviolet" }}>{question}</span>
      </h2>
      <Landing style={{ paddingTop: "30px !important" }} code={code} />
      {props.auth.user.userType == "company" ?
      <div className="box-border flex m-10">
        <h4>{link}</h4>
        <CopyToClipboard text={link} onCopy={() => setCopied({ copied: true })}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-10 mb-2 rounded">
            Copy to clipboard
          </button>
        </CopyToClipboard>
        
        {copied ? <span style={{ color: "red" }}>Copied.</span> : null}
      </div>: null }
      </div>
  );
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  server: state.server,
});

export default connect(mapStateToProps)(Ide);

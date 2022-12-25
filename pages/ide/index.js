import React,{useEffect} from "react";
import Header from "../../components/layout/Header";
import styles from "../index.module.css";
import { connect } from "react-redux";
import { useRouter } from "next/router";

function Ide(props) {
  const router = useRouter();
  useEffect(() => {
    if(!props.auth.isAuthenticated){
      router.push('/')
    }
  },[props.auth.isAuthenticated])
  
  return (
    <div
      className={
        props.server.theme === "dark" ? styles.darkTheme : styles.whiteTheme
      }
      style={{width:'100%'}}
    >
      <Header />
      <h1 style={{marginLeft:40}}>Welcome to IDE</h1>
    </div>
  );
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  server: state.server,
});

export default connect(mapStateToProps)(Ide);
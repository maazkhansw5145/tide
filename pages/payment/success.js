import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import url from "../../config/URL";
import Loading from "../../components/Loading";
import Link from "next/link";
// import { Home } from "@mui/icons-material";
import styles from "../index.module.css";
import Header from "../../components/layout/Header";
import { connect } from "react-redux";
import { premium } from "../../redux/actions/authActions";
import { toast } from "react-toastify";

function Success(props) {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    verifySessionId();
  }, []);

  const router = useRouter();

  const verifySessionId = async () => {
    const session_id = router.query.session_id;
    console.log("Session Id",session_id)
    if (session_id) {
      const subscription_type = router.query.type;
      fetch(`https://api.stripe.com/v1/checkout/sessions/${session_id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization:
            "Bearer sk_test_51MCwf9CK03JH8k6T6uP5sw6lgoV0SNHdmLDTvpZutpvlq95ZeL2qaz1JBLW8WdnTRakm4WUPfrycKgnCZx5O4K2x00G5BFZCxO",
        },
      }).then((response) => {
        if (response.status === 200) {
          console.log("respons1",response)
          response.json().then((user) => {
            console.log(user)
            var date = new Date();
            const newUser = {
              emailId: user.customer_details.email,
              name: user.customer_details.name,
              premium_session_id: session_id,
              status: "Premium user",
              premium_package_type:
                subscription_type === "sme"
                  ? "Small Medium Enterprise"
                  : subscription_type === "ft"
                  ? "Full Time"
                  : "Monthly Subscription",
              premium_bought_at: date,
              premium_expires_at:
                subscription_type === "ft"
                  ? "Never"
                  : date.setDate(date.getDate() + 30),
            }
            fetch(`http://www.localhost:3000/api/user/premium`, {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newUser),
            })
              .then((response1) => {
                console.log("Final response",response1)
                // response1
                //   .json()
                //   .then((response2) => {
                    props.premium(newUser);
                    setLoading(false);
                    setSuccess(true);
                    toast.success("Premium Bought successfully", {
                      position: "top-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                    });
                  // })
                  
              })
              .catch((e) => {
                console.log(e)
                toast.error("Oops! failed to update, login again", {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
              });
          });
        } else {
          setLoading(false);
        }
      });
    } else {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div
      className={
        props.server.theme === "dark" ? styles.darkTheme : styles.whiteTheme
      }
      style={{ width: "100%" }}
    >
      <Header />
      <button onClick={() =>{
        fetch(`http://www.localhost:3000/api/hello`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }).then((res) => console.log(res)).catch((e) => console.log(e))
      }}>Check api</button>
      <div
        style={{ color: "black", width: "60%", margin: "100px auto 0 auto" }}
      >
        {!success ? (
          <div
            style={{
              padding: 30,
              background: "#e5eef6",
              borderRadius: 60,
              textAlign: "center",
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
              Wanna buy
              <span style={{ color: "#DB4437" }}> premium plan</span>, click on
              the <span style={{ color: "#DB4437" }}> buy premium plan </span>
              <span style={{ color: "cornflowerblue" }}> button </span>below.
            </p>
            <div
              style={{
                marginBottom: 12,
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Link
                href="/payment"
                style={{
                  padding: "12px 35px",
                  fontSize: 16,
                  color: "white",
                  background: "rgb(62, 53, 53)",
                  boxShadow: "0 10px 18px 0 rgb(0 0 0 / 34%",
                  borderRadius: 15,
                }}
              >
                Buy Premium Plan
              </Link>
              <Link
                href="/"
                style={{
                  padding: "12px 35px",
                  fontSize: 16,
                  color: "white",
                  background: "cornflowerblue",
                  boxShadow: "0 10px 18px 0 rgb(0 0 0 / 34%",
                  borderRadius: 15,
                }}
              >
                {/* <Home /> */}
                Home Page
              </Link>
            </div>
          </div>
        ) : (
          <div
            style={{
              padding: 30,
              background: "#e5eef6",
              borderRadius: 60,
              textAlign: "center",
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
              Thanks for buying the
              <span style={{ color: "#DB4437" }}> premium plan</span>. Now click
              on the
              <span style={{ color: "#DB4437" }}> IDE </span>
              <span style={{ color: "cornflowerblue" }}> button </span>below, to
              use the IDE.
            </p>
            <div
              style={{
                marginBottom: 12,
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Link
                href="/ide"
                style={{
                  padding: "12px 35px",
                  fontSize: 16,
                  color: "white",
                  background: "rgb(62, 53, 53)",
                  boxShadow: "0 10px 18px 0 rgb(0 0 0 / 34%",
                  borderRadius: 15,
                }}
              >
                IDE
              </Link>
              <Link
                href="/"
                style={{
                  padding: "12px 35px",
                  fontSize: 16,
                  color: "white",
                  background: "cornflowerblue",
                  boxShadow: "0 10px 18px 0 rgb(0 0 0 / 34%",
                  borderRadius: 15,
                }}
              >
                {/* <Home /> */}
                Home Page
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  server: state.server,
});

export default connect(mapStateToProps, { premium })(Success);

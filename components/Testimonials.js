import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Testimonial.module.css";
import Avatar from "@mui/material/Avatar";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
const PreviousBtn = (props) => {
  console.log("prev", props);
  const { onClick } = props;
  console.log();
  return (
    <div
      className={[styles.slick_arrow, styles.slick_prev]}
      onClick={onClick}
      style={{ cursor: "pointer", marginTop: 25 }}
    >
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  console.log("next", props);

  const { onClick } = props;
  return (
    <div
      className={[styles.slick_arrow, styles.slick_next]}
      onClick={onClick}
      style={{ cursor: "pointer", marginTop: 25 }}
    >
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const Testimonials = (props) => {
  return (
    <div
      className={styles.testimonial}
      style={{
        padding: "170px 0",
        background: props.theme === "white" ? "white" : "#3e3535",
      }}
    >
      <div style={{ width: "50%", textAlign: "center", margin: "auto" }}>
        <h1
          style={{
            fontSize: 32,
            textAlign: "center",
            color: props.theme === "white" ? "black" : "white",
            fontWeight: 600,
          }}
        >
          OUR HAPPY USERS
        </h1>
        <hr
          style={{
            width: 150,
            margin: "0 auto 40px auto",
            borderTop: "2px solid brown",
          }}
        />

        <Slider
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          dots
          style={{ display: "flex" }}
        >
          <Card img="/maaz-khan.jpg" theme={props.theme} />
          <Card
            img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg"
            theme={props.theme}
          />
          <Card
            img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg"
            theme={props.theme}
          />
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img, theme }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p style={{ color: theme === "white" ? "black" : "white" }}>
        Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
        Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
        tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
        fringilla massa. Etiam hendrerit dolor eget rutrum
      </p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span
          style={{
            fontWeight: 500,
            color: theme === "white" ? "green" : "yellow",
          }}
        >
          MAAZ KHAN
        </span>
        <span
          style={{

            color: theme === "white" ? "gray" : "white",
          }}
        >
          , Software Engineer
        </span>
        
      </p>
    </div>
  );
};

export default Testimonials;

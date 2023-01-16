import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Testimonial.module.css";
import Avatar from '@mui/material/Avatar';
import {ArrowBackIos,ArrowForwardIos} from "@mui/icons-material";


const PreviousBtn = (props) => {
  console.log("prev",props);
  const { className, onClick } = props;
  console.log()
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  console.log("next",props);

  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const Testimonials = () => {
  return (
    <div
      className={styles.testimonial}
      style={{  margin: "50px 0" }}
    >
      <div style={{ width: "50%", textAlign: "center",margin:'auto' }}>
        <h1 style={{ fontSize:32,textAlign:'center',color:'black',fontWeight:600 }}>OUR HAPPY USERS</h1>
      <hr style={{width:150,margin:'0 auto 40px auto',borderTop:'2px solid brown'}}/>

        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          <Card img="/maaz-khan.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img }) => {
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
      <p>
        Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
        Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
        tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
        fringilla massa. Etiam hendrerit dolor eget rutrum
      </p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "green" }}>MAAZ KHAN</span> ,
        Software Engineer
      </p>
    </div>
  );
};

export default Testimonials;
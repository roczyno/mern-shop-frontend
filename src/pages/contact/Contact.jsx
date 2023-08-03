import "./contact.scss";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <h1>contact us</h1>
        <div className="container">
          <div className="left">
            <h3 className="title">Let's discuss about what you need</h3>
            <div className="contact">
              <div className="contact-item">
                <CallIcon sx={{ color: "green", fontSize: "34px" }} />
                <span>(233)548562559</span>
              </div>
              <div className="contact-item">
                <MailIcon sx={{ color: "blue", fontSize: "34px" }} />
                <span>adiabajacob9@gmail.com</span>
              </div>
              <div className="contact-item">
                <LocationOnIcon sx={{ color: "pink", fontSize: "34px" }} />
                <span>cape coast, ucc</span>
              </div>
            </div>
          </div>
          <div className="right">
            <h2>Get in touch. always available to respond</h2>
            <form action="">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Subject" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="message"></textarea>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

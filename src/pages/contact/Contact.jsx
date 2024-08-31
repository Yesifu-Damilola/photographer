import "./Contact.css";
import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { CiMobile2 } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="container-page">
        <h2>Contact</h2>
        <p>
          Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
          odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum
          debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum
          dolorem.
        </p>
      </div>
      <div className="container-item">
        <div className="location">
          <div className="location-icon">
            <SlLocationPin className="icon" />
          </div>
          <div className="location-text">
            <h4>Location:</h4>
            <p>A108 Adam Street, New York, NY 535022</p>
          </div>
        </div>
        <div className="email">
          <div className="email-icon">
            <TfiEmail className="icon" />
          </div>
          <div className="email-text">
            <h4>Email:</h4>
            <p>damilola@gmail.com</p>
          </div>
        </div>
        <div className="call">
          <div className="call-icon">
            <CiMobile2 className="icon" />
          </div>
          <div className="call-text">
            <h4>Call:</h4>
            <p>+234 806 294 1097 </p>
          </div>
        </div>
      </div>
      <form className="form">
        <div className="form-input">
          <div className="text-input">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your Name"
            />
          </div>
          <div className="email-input">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Your Email"
            />
          </div>
        </div>
        <div className="subject-input">
          <input
            type="text"
            className="form-control"
            name="subject"
            id="subject"
            placeholder="Subject"
          />
        </div>
        <div className="form-message">
          <textarea
            className="form-control"
            name="message"
            rows="8"
            placeholder="Message"
          ></textarea>
        </div>
      </form>
      <div className="submit-message">
        <button type="submit">Send Message</button>
      </div>
    </div>
  );
};

export default Contact;

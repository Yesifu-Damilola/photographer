import { Link } from "react-router-dom";
import { PiGreaterThanThin } from "react-icons/pi";
import { Testimonial } from "../testimonial/Testimonial";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about">
        <h1>About</h1>
        <p>
          Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
          odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum
          debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum
          dolorem.
        </p>
      </div>

      <button className="available">
        <Link to={""} className="hire-link">
          Available for hire
        </Link>
      </button>
      <div className="profile-info ">
        <div className="about-img">
          <img src="src/assets/profile-img.jpg" alt="profile" />
        </div>
        <div className="info-text">
          <h1>Professional Photographer from New York</h1>
          <div className="info-para">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod <br />
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="bio-data">
            <div className="bio-1">
              <div className="bio1-info">
                <PiGreaterThanThin />
                <strong>Birthday:</strong>
                <span>1 May 1995</span>
              </div>
              <div className="bio1-info">
                <PiGreaterThanThin />
                <strong>Website:</strong>
                <span>www.matlab.com</span>
              </div>
              <div className="bio1-info">
                <PiGreaterThanThin />
                <strong>Phone:</strong>
                <span>+234 806 2941 097</span>
              </div>
              <div className="bio1-info">
                <PiGreaterThanThin />
                <strong>City:</strong>
                <span>New York, USA</span>
              </div>
            </div>
            <div className="bio-2">
              <div className="bio2-info">
                <PiGreaterThanThin />
                <strong>Age:</strong>
                <span>30</span>
              </div>
              <div className="bio2-info">
                <PiGreaterThanThin />
                <strong>Degree:</strong>
                <span> Master</span>
              </div>
              <div className="bio2-info">
                <PiGreaterThanThin />
                <strong>Email:</strong>
                <span>yesifudammy.com</span>
              </div>
              <div className="bio2-info">
                <PiGreaterThanThin />
                <strong>Freelance: </strong>
                <span>Available</span>
              </div>
            </div>
          </div>
          <p className="para1">
            Officiis eligendi itaque labore et dolorum mollitia officiis optio
            vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
            incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime
            officiis quidem quia. Sed et consectetur qui quia repellendus itaque
            neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui
            repellendus omnis culpa magni laudantium dolores.
          </p>
          <p className="para2">
            Recusandae est praesentium consequatur eos voluptatem. Vitae dolores
            aliquam itaque odio nihil. Neque ut neque ut quae voluptas. Maxime
            corporis aut ut ipsum consequatur. Repudiandae sunt sequi minus qui
            et. Doloribus molestiae officiis. Soluta eligendi fugiat omnis enim.
            Numquam alias sint possimus eveniet ad. Ratione in earum eum magni
            totam.
          </p>
        </div>
      </div>
      <Testimonial />
    </>
  );
};

export default About;

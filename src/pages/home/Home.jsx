/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import "./Home.css";

const imageUrls = [
  "src/assets/gallery-1.jpg",
  "src/assets/gallery-2.jpg",
  "src/assets/gallery-3.jpg",
  "src/assets/gallery-4.jpg",
  "src/assets/gallery-5.jpg",
  "src/assets/gallery-6.jpg",
  "src/assets/gallery-7.jpg",
  "src/assets/gallery-8.jpg",
  "src/assets/gallery-9.jpg",
  "src/assets/gallery-10.jpg",
  "src/assets/gallery-11.jpg",
  "src/assets/gallery-12.jpg",
  "src/assets/gallery-13.jpg",
  "src/assets/gallery-14.jpg",
  "src/assets/gallery-15.jpg",
  "src/assets/gallery-16.jpg",
];

const Home = () => {
  return (
    <div className="container">
      <h1>
        I'm Damilola Matlab a Professional <br />
        Photographer from New York City
      </h1>
      <p>
        Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem
        <br />
        magni est deserunt sed qui libero. Qui voluptas amet.
      </p>
      <button className="available">
        <Link to={""} className="hire-link">
          Available for hire
        </Link>
      </button>
      <div className="galleries">
        <Link to={""} className="gallery-link">
          {imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`image ${index + 1}`}
              className="gallery-image"
            />
          ))}
        </Link>
      </div>
    </div>
  );
};

export default Home;

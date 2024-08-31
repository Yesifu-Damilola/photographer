import "./footer.css";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="horizontal-line">
        <hr />
      </div>
      <div className="copyright">
        © Copyright <span className="copy-photo">PhotoFolio</span>. All Rights
        Reserved
      </div>
      <div className="design">
        <p className="by-name">
          Designed by
          <span className="name" style={{ color: "#27a776" }}>
            Matlab Max
          </span>
        </p>
      </div>
    </div>
  );
};

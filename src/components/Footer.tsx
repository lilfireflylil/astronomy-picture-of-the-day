import { NASAData } from "../App";

type FooterProps = {
  handleToggleModel: () => void;
  data: NASAData | null;
  handleAboutMeButtonOnMouseOver: () => void;
  handleAboutMeButtonOnMouseOut: () => void;
};

function Footer(props: FooterProps) {
  const {
    handleAboutMeButtonOnMouseOver,
    handleAboutMeButtonOnMouseOut,
    handleToggleModel,
    data,
  } = props;

  return (
    <footer>
      <div className="bgGradient"></div>

      <button
        className="about-me-button"
        onMouseOver={handleAboutMeButtonOnMouseOver}
        onMouseOut={handleAboutMeButtonOnMouseOut}
      >
        <i className="fa-regular fa-circle-question"></i>
      </button>
      <div className="footer-middle-container">
        <div className="footer-text-container">
          <h1>
            <small>@Astronomy Picture of the Day</small>
          </h1>
          <h2>{data?.title}</h2>
        </div>
        <button onClick={handleToggleModel} title="more info">
          <i className="fa-solid fa-circle-info"></i>
        </button>
      </div>
    </footer>
  );
}

export default Footer;

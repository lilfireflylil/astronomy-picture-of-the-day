import { NASAData } from "../App";

type SideBarProps = {
  handleToggleModel: () => void;
  data: NASAData | null;
  showModel: boolean;
};

function SideBar(props: SideBarProps) {
  const { handleToggleModel, data, showModel } = props;

  return (
    <section className="sideBar">
      <div
        className={`bgOverlay ${showModel && "sideBar-open"}`}
        onClick={handleToggleModel}
      ></div>
      <div className={`sideBarContents ${showModel && "sideBar-open"}`}>
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModel}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
}

export default SideBar;

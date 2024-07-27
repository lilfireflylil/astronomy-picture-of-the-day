import { NASAData } from "../App";

type MainProps = {
  data: NASAData;
};

function Main(props: MainProps) {
  const { data } = props;

  return (
    <div className="imageContainer">
      <img
        src={data.hdurl}
        alt={data.title || "Background Image"}
        className="bgImage"
        title={`Image Credit & Copyright: ${data.copyright?.trim() || "NASA"}`}
      />
    </div>
  );
}

export default Main;

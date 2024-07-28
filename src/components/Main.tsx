import { NASAData } from "../App";

type MainProps = {
  data: NASAData;
};

function Main(props: MainProps) {
  const { data } = props;

  return (
    <>
      {data.media_type === "image" ? (
        <div className="imageContainer">
          <img
            src={data.hdurl || data.url}
            alt={data.title || "Background Image"}
            className="bgImage"
            title={`Image Credit & Copyright: ${
              data.copyright?.trim() || "NASA"
            }`}
          />
        </div>
      ) : data.media_type === "video" ? (
        <div className="videoContainer">
          <iframe src={data.url} className="bgVideo"></iframe>
        </div>
      ) : (
        <p>unknown media type</p>
      )}
    </>
  );
}

export default Main;

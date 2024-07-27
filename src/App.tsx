import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import { useEffect, useState } from "react";

// Mentioning all the properties is not necessary but I just did.
export type NASAData = {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
};

function App() {
  const [showModel, setShowModel] = useState<boolean>(false);
  const [data, setData] = useState<NASAData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showAboutMe, setShowAboutMe] = useState<boolean>(false);

  useEffect(() => {
    /*
    Create a ".env" file in the root directory of your project.
    and get the API key from this link:  https://api.nasa.gov/ 
    for example in ".env" file: VITE_NASA_API_KEY=someLongTextHere
    */

    async function fetchAPIData() {
      const NASA_APOD_API_KEY = import.meta.env.VITE_NASA_APOD_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_APOD_API_KEY}`;

      // const today = new Date().toDateString();
      // const localStorageKey = `NASA-${today}`;
      // const storedData = localStorage.getItem(localStorageKey);

      // Time in UTC
      const todayUTC = new Date().toISOString().split("T")[0];
      const localStorageKey = `NASA-${todayUTC}`;
      const storedData = localStorage.getItem(localStorageKey);

      if (storedData) {
        setLoading(true);
        setError(null);

        const apiData = JSON.parse(storedData);
        setData(apiData);
        console.log("fetched data from cache today");

        setLoading(false);
        return;
      }

      localStorage.clear();

      try {
        setLoading(true);
        setError(null);

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const apiData: NASAData = await response.json();
        localStorage.setItem(localStorageKey, JSON.stringify(apiData));
        setData(apiData);
        console.log("fetched data from API today");
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          console.log(error.message);
        } else {
          setError("An unknown error occurred");
          console.log("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchAPIData();
  }, []);

  useEffect(() => {}, [showModel]);

  function handleToggleModel() {
    setShowModel((prevShowModel) => !prevShowModel);
  }

  function handleAboutMeButtonOnMouseOver() {
    setShowAboutMe(true);
  }

  function handleAboutMeButtonOnMouseOut() {
    setShowAboutMe(false);
  }

  return (
    <>
      {loading ? (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      ) : error ? (
        <div className="errorState">
          <p>{error}</p>
        </div>
      ) : (
        data && <Main data={data} />
      )}

      {data && (
        <SideBar
          data={data}
          handleToggleModel={handleToggleModel}
          showModel={showModel}
        />
      )}

      {data && (
        <Footer
          data={data}
          handleToggleModel={handleToggleModel}
          handleAboutMeButtonOnMouseOver={handleAboutMeButtonOnMouseOver}
          handleAboutMeButtonOnMouseOut={handleAboutMeButtonOnMouseOut}
        />
      )}

      <AboutMe showAboutMe={showAboutMe} />
    </>
  );
}

export default App;

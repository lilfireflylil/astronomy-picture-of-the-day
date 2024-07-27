type AboutMeProps = {
  showAboutMe: boolean;
};

function AboutMe(props: AboutMeProps) {
  const { showAboutMe } = props;

  return (
    <>
      <aside
        className={`about-me-sidebar ${showAboutMe && "about-me-sidebar-open"}`}
      >
        <h3>About Me</h3>
        <p>
          Hi there! My name is Faisal. I created this site as a part of my
          journey to explore and share the wonders of the cosmos using the NASA
          API. This project is a testament to my love for coding and my
          dedication to learning and growing in the tech industry. For any
          inquiries or further information, feel free to reach out to me at
          &nbsp;
          <i className="fa-solid fa-envelope"></i>{" "}
          "hello.faisalatiqi@gmail.com". Thank you for visiting my site, and I
          hope you find it as fascinating as I do!
        </p>
      </aside>
    </>
  );
}

export default AboutMe;

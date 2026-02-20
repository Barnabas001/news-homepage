export default function About() {
  return (
    <>
      <div>
        <span className="mobileImage">
          <img src="./assets/images/mobile.jpg" alt="mobile-image" />
        </span>
        <span className="desktopImage">
          <img
            src="./assets/images/image-web-3-desktop.jpg"
            alt="desktop-image"
          />
        </span>
      </div>
      <div className="headingContent">
        <h2>The Bright Future of Web 3.0?</h2>
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="readButton">READ MORE</button>
      </div>
    </>
  );
}

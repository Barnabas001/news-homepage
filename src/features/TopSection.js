import Button from "../ui/Button";
import mobileImage from "../assets/images/mobile.jpg";

export default function TopSection() {
  return (
    <section className="topSection">
      <picture>
        <source
          media="(min-width:900px)"
          srcSet="/src/assets/images/image-web-3-desktop.jpg"
        />
        <img src={mobileImage} alt="web3" className="topImage" />
      </picture>

      <div className="topContent">
        <h1>The Bright Future of Web 3.0?</h1>

        <div className="topDescription">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people.
          </p>
          <Button>READ MORE</Button>
        </div>
      </div>
    </section>
  );
}

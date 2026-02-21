import Button from "../ui/Button";

export default function TopSection() {
  return (
    <section className="topSection">
      <picture>
        <source
          media="(min-width:900px)"
          srcSet="/src/assets/images/image-web-3-desktop.jpg"
        />
        <img src="/src/assets/images/mobile.jpg" alt="web3" />
      </picture>

      <div className="topContent">
        <h1>The Bright Future of Web 3.0?</h1>
        <div>
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

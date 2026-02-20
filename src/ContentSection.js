export default function ContentSection() {
  return (
    <div>
      <GridSection
        image={"./assets/images/image-retro-pcs.jpg"}
        note={"retro-pcs"}
        position={"01"}
        unitTitle={"Reviving Retro PCs"}
        content={"What happens when old PCs are given modern upgrades?"}
      />
      <GridSection
        image={"./assets/images/image-top-laptops.jpg"}
        note={"top-laptops"}
        position={"02"}
        unitTitle={"Top 10 Laptops of 2022"}
        content={"Our best picks for various needs and budgets"}
      />
      <GridSection
        image={"./assets/images/image-gaming-growth.jpg"}
        note={"gaming"}
        position={"03"}
        unitTitle={"The Growth of Gaming"}
        content={"How the pandemic has sparked fresh opportunities"}
      />
    </div>
  );
}

function GridSection({ image, position, unitTitle, content, note }) {
  return (
    <div>
      <span>
        <img src={image} alt={note} />
      </span>
      <span>
        <h2>{position}</h2>
        <p>{unitTitle}</p>
        <p>{content}</p>
      </span>
    </div>
  );
}

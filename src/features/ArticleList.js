import ArticleRow from "../ui/ArticleRow";

export default function ArticleList() {
  return (
    <section className="articles">
      <ArticleRow
        number="01"
        image="/src/assets/images/image-retro-pcs.jpg"
        title="Reviving Retro PCs"
        text="Old PCs given modern upgrades"
      />

      <ArticleRow
        number="02"
        image="/src/assets/images/image-top-laptops.jpg"
        title="Top 10 Laptops of 2022"
        text="Best picks for various needs"
      />

      <ArticleRow
        number="03"
        image="/src/assets/images/image-gaming-growth.jpg"
        title="The Growth of Gaming"
        text="Pandemic sparked opportunities"
      />
    </section>
  );
}

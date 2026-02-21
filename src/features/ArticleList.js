import ArticleRow from "../ui/ArticleRow";
import retro from "../assets/images/image-retro-pcs.jpg";
import laptops from "../assets/images/image-top-laptops.jpg";
import gaming from "../assets/images/image-gaming-growth.jpg";

export default function ArticleList() {
  return (
    <section className="articles">
      <ArticleRow
        number="01"
        image={retro}
        title="Reviving Retro PCs"
        text="Old PCs given modern upgrades"
      />

      <ArticleRow
        number="02"
        image={laptops}
        title="Top 10 Laptops of 2022"
        text="Best picks for various needs"
      />

      <ArticleRow
        number="03"
        image={gaming}
        title="The Growth of Gaming"
        text="Pandemic sparked opportunities"
      />
    </section>
  );
}

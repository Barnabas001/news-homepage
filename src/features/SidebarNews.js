import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

export default function SidebarNews() {
  return (
    <aside className="sidebar">
      <SectionTitle>New</SectionTitle>
      <Card
        title="Hydrogen VS Electric Cars"
        description="Will hydrogen-fueled cars ever catch up to EVs?"
      />
      <Card
        title="The Downsides of AI Artistry"
        description="Possible adverse effects of AI image generation"
      />
      <Card
        title="Is VC Funding Drying Up?"
        description="Private funding down 50% YOY"
      />
    </aside>
  );
}

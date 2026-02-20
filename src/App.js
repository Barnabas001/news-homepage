import "./Header";
import Header from "./Header";
import About from "./About";
import NewCard from "./NewCard";
import ContentSection from "./ContentSection";

export default function App() {
  return (
    <div className="mainContainer">
      <Header />
      <About />
      <NewCard />
      <ContentSection />
    </div>
  );
}

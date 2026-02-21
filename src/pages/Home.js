import Container from "../ui/Container";
import Header from "../layout/Header";
import TopSection from "../features/TopSection";
import SidebarNews from "../features/SidebarNews";
import ArticleList from "../features/ArticleList";

export default function Home() {
  return (
    <Container>
      <Header />

      <main className="mainGrid">
        <TopSection />
        <SidebarNews />
        <ArticleList />
      </main>
    </Container>
  );
}

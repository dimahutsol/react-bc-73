import { BlogCard, Statistics, Section, Container } from "components";
import article from "data/article";
import stats from "data/stats";

function App() {
  return (
    <Section>
      <Container>
        <BlogCard {...article} />
        <Statistics stats={stats} />
      </Container>
    </Section>
  );
}

export default App;

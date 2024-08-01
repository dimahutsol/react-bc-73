import { BlogCard, Statistics } from "components";
import article from "data/article";
import stats from "data/stats";

function App() {
  return (
    <>
      <BlogCard {...article} />
      <Statistics stats={stats} />
    </>
  );
}

export default App;

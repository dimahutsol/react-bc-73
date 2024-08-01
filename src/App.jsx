import { BlogCard } from 'components';
import article from 'data/article';

function App() {
  return (
    <>
      <BlogCard {...article} />
    </>
  );
}

export default App;

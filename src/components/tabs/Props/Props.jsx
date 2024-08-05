import { BlogCard, Statistics, Section, Container, Heading } from 'components';
import article from 'data/article';
import stats from 'data/stats';

const Props = () => {
  return (
    <Section>
      <Container>
        <Heading title="Blog Card" bottom />
        <BlogCard {...article} />
        <Heading title="Statistics" top bottom />
        <Statistics stats={stats} />
      </Container>
    </Section>
  );
};

export default Props;

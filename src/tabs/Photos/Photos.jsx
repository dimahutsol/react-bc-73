import { useEffect, useState } from 'react';
import { SearchPhotos, PhotosList, Section, Container } from 'components';
import { fetchImages } from '../../services/pexelsAPI';

const Photos = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(false);

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      try {
        const res = await fetchImages(query, page);
        setPhotos(prev => [...prev, ...res.photos]);
        setShowLoadMore(page < Math.ceil(res.total_results / res.per_page));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSearchSubmit = value => {
    setQuery(value);
    setPage(1);
    setPhotos([]);
    setShowLoadMore(false);
  };

  const handleClick = () => {
    setPage(prev => prev + 1);
  };

  return (
    <Section>
      <Container>
        <SearchPhotos onSearchSubmit={handleSearchSubmit} />
        {photos.length > 0 && <PhotosList photos={photos} />}
        {showLoadMore && <button onClick={handleClick}>Load More</button>}
      </Container>
    </Section>
  );
};

export default Photos;

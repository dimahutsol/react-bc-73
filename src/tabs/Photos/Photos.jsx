import { useEffect, useState } from "react";
import {
  SearchPhotos,
  PhotosList,
  Section,
  Container,
  Loader,
  Heading,
} from "components";
import { fetchImages } from "services/pexelsAPI";
import css from "./Photos.module.css";

const Photos = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetchImages(query, page);
        if (!res.photos.length) {
          setIsEmpty(true);
          return;
        }
        setPhotos((prev) => [...prev, ...res.photos]);
        setShowLoadMore(page < Math.ceil(res.total_results / res.per_page));
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSearchSubmit = (value) => {
    setQuery(value);
    setPage(1);
    setPhotos([]);
    setShowLoadMore(false);
    setIsError(false);
    setIsEmpty(false);
  };

  const handleClick = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <Section>
      <Container>
        <SearchPhotos onSearchSubmit={handleSearchSubmit} />
        {isEmpty && (
          <Heading title={"Nothing find, please enter valid query!"} />
        )}
        {photos.length > 0 && <PhotosList photos={photos} />}
        {isLoading && <Loader />}
        {showLoadMore && (
          <button className={css.btnLoadMore} onClick={handleClick}>
            Load More
          </button>
        )}
        {isError && <Heading title={"Something went wrong!"} />}
      </Container>
    </Section>
  );
};

export default Photos;

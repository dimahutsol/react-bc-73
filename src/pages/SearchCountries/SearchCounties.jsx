import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Container,
  Section,
  SearchCountriesForm,
  CountriesList,
  Heading,
  Loader,
} from "components";
import { getRegions } from "../../services/countriesAPI";

const SearchCountries = () => {
  const [countries, setCountries] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const region = searchParams.get("region");
    if (!region) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const countries = await getRegions(region);
        setCountries(countries);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);
  const handleSubmit = (region) => {
    setSearchParams({ region });
  };

  return (
    <Section>
      <Container>
        <SearchCountriesForm onSubmit={handleSubmit} />
        <CountriesList countries={countries} />
        {loading && <Loader />}
        {error && <Heading title={`Something went wrong! ${error}`} top />}
      </Container>
    </Section>
  );
};

export default SearchCountries;

import { useEffect, useState } from "react";
import { Container, Section, Loader, CountriesList, Heading } from "components";
import { getCountries } from "services/countriesAPI";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Section>
      <Container>
        <CountriesList countries={countries} />
        {isLoading && <Loader />}
        {isError && <Heading title={`Something went wrong! ${isError}`} />}
      </Container>
    </Section>
  );
};

export default Countries;

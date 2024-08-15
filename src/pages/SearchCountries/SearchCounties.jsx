import { Container, Section } from "components";
import { SearchCountriesForm } from "components";

const SearchCountries = () => {
    const handleSubmit = (region) => {
        console.log(region);
  };

  return (
    <Section>
      <Container>
        <SearchCountriesForm onSubmit={handleSubmit} />
      </Container>
    </Section>
  );
};

export default SearchCountries;

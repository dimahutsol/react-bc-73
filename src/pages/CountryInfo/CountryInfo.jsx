import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { getCountriesInfo } from 'services/countriesAPI';
import {
  Container,
  CountryDetails,
  Section,
  Loader,
  Heading,
  GoBackBtn,
} from 'components';

const CountryInfo = () => {
  const [countryInfo, setCountryInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  const location = useLocation();

  const goBackLink = useRef(location.state ?? '/countries');

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getCountriesInfo(id);
        setCountryInfo(...data);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  console.log(goBackLink);

  return (
    <Section>
      <Container>
        <GoBackBtn to={goBackLink.current} />
        {countryInfo && <CountryDetails countryInfo={countryInfo} />}
        {isLoading && <Loader />}
        {isError && <Heading title={`Something went wrong! ${isError}`} />}
      </Container>
    </Section>
  );
};

export default CountryInfo;

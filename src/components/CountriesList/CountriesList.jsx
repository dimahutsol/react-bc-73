export const CountriesList = ({ countries }) => {
  return (
    <ul>
      {countries.map((country) => {
        return (
          <li key={country.name.common}>
            <img src={country.flags.png} alt={country.name.common} />
          </li>
        );
      })}
    </ul>
  );
};
